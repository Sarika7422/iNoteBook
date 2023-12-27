import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext'
import NotesItem from './NoteItem'

export default function Note() {
    const context = useContext(noteContext);
    const {notes} = context;
  return (
    <div>
        <div className="row">
            <h2>Your notes</h2>
            {notes.map((note)=>{
                return <NotesItem note = {note}/>
            })}
        </div>
    </div>
  )
}
