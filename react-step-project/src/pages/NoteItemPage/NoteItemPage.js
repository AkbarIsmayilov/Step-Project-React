import React from 'react';
import {Redirect, Route} from 'react-router';
import {Link} from 'react-router-dom'
import './NotePageItem.scss'
const NoteItemPage = (props) => {
    const {noteTitle,noteDescription,color,id,status} =props.self;
    const styles = {backgroundColor: color};

    const deleteNoteHandler = () => {
        fetch(`http://localhost:3333/notes/${id}`, {
            method: 'DELETE'
        })

    };

    const archiveNoteHandler = () => {
        const newNote = {
            ...props.self,
            status:!status
        };

        fetch( `http://localhost:3333/notes/${id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNote),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


        return (
        <div className={"note-container"}>
            <div style={styles} className={"note-item"}>
                <div className="note-title">{noteTitle}</div>
                <div className="note-text">{noteDescription}</div>
            </div>
            <div className="note-buttons">
                <button  className="note-btn">EDIT</button>
                <button onClick={archiveNoteHandler} className="note-btn">{status ? "ARCHIVE" : "ACTUALISE"}</button>
                <button onClick={deleteNoteHandler} className="note-btn"> <Link to={'/'}>DELETE</Link></button>

            </div>
        </div>
    );
};

export default NoteItemPage;