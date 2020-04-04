import React, {createContext, useEffect, useState} from "react";

export const NotesContext = createContext();

export const NotesProvider = (props) => {

    const apiUrl = 'http://localhost:3333/notes/';
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setNotes(data))
    },[apiUrl]);

    return (
        <NotesContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NotesContext.Provider>
    );
}

