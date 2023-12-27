import React, { useState } from 'react'
import { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext'

export default function AddNote() {
  const context = useContext(noteContext);
  const {addNotes } = context;

  const [ note, setNote ] = useState({title:"",description:"",tag:"default"});
  //This function will handle the final submit operation.
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log("note title: "+note.title);
    await addNotes(note.title, note.description, note.tag);
  }

  //This function will handle the changes occurs in the input form.
  const handleChange =  (e) => {
    // console.log("Called handle change => name : "+e.target.name+" value : "+e.target.value);
    setNote((prevNote)=>({ ...prevNote, [e.target.name]: e.target.value }));
    // console.log("New note title is : ", note.title," new note description : "+note.description);
  }
  return (
    <>
      <h2>Add Notes</h2>
      <div className="container my-3">
        <form>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title"  onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

        </form>
      </div>
    </>
  )
}
