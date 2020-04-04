import React, {useContext} from 'react';
import {NotesContext} from "../../components/NotesContext/NotesContext";
import NoteItem from "../../components/NoteItem/NoteItem";
import './Home.css';

const Home = (props) => {

    const [notes, setNotes] = useContext(NotesContext);

    const all = notes,
        actual = notes.filter(note => note.status === true),
        archive = notes.filter(note => note.status === false);

    let noteItem;
    if (props.show === 'all') {
        noteItem = all;
    } else if (props.show === 'actual') {
        noteItem = actual;
    } else {
        noteItem = archive;
    }
    noteItem = noteItem.map((item, ind) => <NoteItem key={ind} ob={item}/>);
    return (
        <div className={'home-wrapper'}>
            {noteItem}
        </div>
    );
};

export default Home;