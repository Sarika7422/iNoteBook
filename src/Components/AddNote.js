import React, { useState } from 'react'
import { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext'

export default function AddNote() {
  const context = useContext(noteContext);
  const { addNotes } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "default" });
  //This function will handle the final submit operation.
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("note title: "+note.title);
    await addNotes(note.title, note.description, note.tag);
  }

  //This function will handle the changes occurs in the input form.
  const handleChange = (e) => {
    setNote((prevNote) => ({ ...prevNote, [e.target.name]: e.target.value }));
  }
  return (
    <>
      <h2>Add Notes</h2>
      <div className="container my-3">
        <form>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" onChange={handleChange}/>
          </div>

          {/* <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' onChange={handleChange} />
          </div> */}

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" name = "description" rows="3" onChange={handleChange}></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name='tag' onChange={handleChange} />
          </div>

          <button disabled = {note.title.length < 5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
          <div style={{height:"10px"}}>{(note.title.length < 5 || note.description.length<5)&&"[Title/Description should have at least 5 charactrers!]"}</div>
        </form>
      </div>
    </>
  )
}
