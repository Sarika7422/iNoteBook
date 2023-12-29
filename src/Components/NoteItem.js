import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext'

export default function NoteItem(props) {
    const { note,updateNote } = props;
    const context = useContext(noteContext);
    const {deleteNotes} = context;

    return (
        <div className="col-md-3">
            <div className="card  my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title} </h5>
                        <i className="fa-solid fa-trash-can mx-5" onClick={()=>{deleteNotes(note._id)}}></i>
                        <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text"><strong>Tag:</strong> {note.tag}</p>
                </div>
            </div>
        </div>
    )
}
