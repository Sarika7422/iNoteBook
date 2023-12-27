import React, {useState}from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
    const noteInitial = [
        {
          "_id": "65367c034021c2f4c57060ce",
          "user": "65350602d6c2d56b9477b3c6",
          "title": "Pledge",
          "description": "Strictly follow the 4 rules of Acharya's",
          "tag": "Personal",
          "date": "2023-10-23T13:58:27.687Z",
          "__v": 0
        },
        {
          "_id": "65368844cbbb51f94e5d4a0a",
          "user": "65350602d6c2d56b9477b3c6",
          "title": "Rules",
          "description": "Have to control on the senses.",
          "tag": "Personal",
          "date": "2023-10-23T14:50:44.149Z",
          "__v": 0
        },
        {
          "_id": "65368844cbbb51f94e5d4a0a",
          "user": "65350602d6c2d56b9477b3c6",
          "title": "Rules",
          "description": "Have to control on the senses.",
          "tag": "Personal",
          "date": "2023-10-23T14:50:44.149Z",
          "__v": 0
        },
        {
          "_id": "65368844cbbb51f94e5d4a0a",
          "user": "65350602d6c2d56b9477b3c6",
          "title": "Rules",
          "description": "Have to control on the senses.",
          "tag": "Personal",
          "date": "2023-10-23T14:50:44.149Z",
          "__v": 0
        },
        {
          "_id": "65368844cbbb51f94e5d4a0a",
          "user": "65350602d6c2d56b9477b3c6",
          "title": "Rules",
          "description": "Have to control on the senses.",
          "tag": "Personal",
          "date": "2023-10-23T14:50:44.149Z",
          "__v": 0
        },
        {
          "_id": "65368844cbbb51f94e5d4a0a",
          "user": "65350602d6c2d56b9477b3c6",
          "title": "Rules",
          "description": "Have to control on the senses.",
          "tag": "Personal",
          "date": "2023-10-23T14:50:44.149Z",
          "__v": 0
        },
        {
          "_id": "65368844cbbb51f94e5d4a0a",
          "user": "65350602d6c2d56b9477b3c6",
          "title": "Rules",
          "description": "Have to control on the senses.",
          "tag": "Personal",
          "date": "2023-10-23T14:50:44.149Z",
          "__v": 0
        }
      ];

      const [notes,setNotes] = useState(noteInitial);

    return(
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;