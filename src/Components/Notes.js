import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext'
import NotesItem from './NoteItem'
import AddNote from './AddNote'

export default function Note() {
    const context = useContext(noteContext);
    const {notes} = context;
  return (
    <>
    <AddNote/>
    <div>
        <div className="row">
            <h2>Your notes</h2>
            {notes.map((note)=>{
                return <NotesItem  key={note._id} note = {note}/>
            })}
        </div>
    </div>
    </> 
  )
}
