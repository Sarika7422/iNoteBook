import React from 'react'
import { useContext, useEffect, useState, useRef } from 'react'
import noteContext from '../Context/Notes/noteContext'
import NotesItem from './NoteItem'
import AddNote from './AddNote'

export default function Note() {
  const context = useContext(noteContext);
  const { notes, fetchAllNotes, editNotes } = context;
  useEffect(() => {
    fetchAllNotes();
    //eslint-disable-next-line 
  }, []) // Should add the dependencies on which the useEffect is dependent.

  //References used for performing some operation in buttons by program.
  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({eid:"", etitle: "", edescription: "", etag: "" });

  //This function is used for update the notes that edited by user.
  const updateNote = (currentNote) => {
    console.log("Called update note fun. ",currentNote);
    ref.current.click();
    setNote({eid:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  }



  //This function will handle the final submit operation.
  const handleSubmit = async (e) => {
    console.log("Click update notes : ",note);
    e.preventDefault();
    editNotes(note.eid,note.etitle,note.edescription,note.etag);
    refClose.current.click();
  }

  // This function will handle the changes occurs in the input form.
  const handleChange = (e) => {
    setNote((prevNote) => ({ ...prevNote, [e.target.name]: e.target.value }));
  }

  return (
    <>
      <AddNote />

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>

                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="edescription">Description</label>
                  <textarea className="form-control" id="edescription" name="edescription" rows="3" value={note.edescription} onChange={handleChange}></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={handleChange} />
                </div>

                {/* <button  type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button> */}

              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled = {note.etitle.length<5 || note.edescription.length < 5} onClick={handleSubmit} type="button" className="btn btn-primary">Update Notes</button>
              <div>{(note.etitle.length < 5 || note.edescription.length<5)&&"[Title/Description should have at least 5 charactrers!]"}</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="row">
          <h2>Your notes</h2>
          {/* <div className="container mx-3">
            {notes.length === 0 && "No notes to display"}
          </div> */}
          {
            
            (notes.length !== 0) && notes.map((note) => {
              return note.title && <NotesItem key={note._id} note={note} updateNote={updateNote} />
            })}
        </div>
      </div>
    </>
  )
}
