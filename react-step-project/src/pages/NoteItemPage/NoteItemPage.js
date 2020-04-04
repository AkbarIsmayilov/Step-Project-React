import React, {useState} from 'react';
import './NotePageItem.scss'
import ModalWindow from "../../components/ModalWindow/ModalWindow";
const NoteItemPage = (props) => {
    const {noteTitle,noteDescription,color,id,status} =props.self;
    const styles = {backgroundColor: color};

    const [editButton, setEditButton] = useState(true),
        [modal, setModal] = useState(false);


    const singleTitle = React.createRef(),
            singleText = React.createRef();


    const updateData = (newData) => {
        fetch( `http://localhost:3333/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    const editNoteHandler = () => {

        if (editButton === false){
            const newNote = {
                ...props.self,
                noteTitle: singleTitle.current.value,
                noteDescription: singleText.current.value
            };

            updateData(newNote);
        }

        setEditButton(!editButton);

    };

    const archiveNoteHandler = () => {
        const newNote = {
            ...props.self,
            status:!status
        };
        updateData(newNote);
    };

    const deleteNoteHandler = () => {
        fetch(`http://localhost:3333/notes/${id}`, {
            method: 'DELETE'
        }).then(() =>{});
    };
    const openModal = () => {
            setModal(true);
    };

    const closeModal = (e) => {

        if (e.target == e.currentTarget) {
            setModal(false);
        }
    };


        return (
        <div className={"single-container"}>
            <div style={styles} className={"single-item"}>
                <input ref={singleTitle} disabled={editButton ? true : false} className="single-title" value={editButton ? noteTitle: null} style={styles}/>
                <textarea ref={singleText} disabled={editButton ? true : false} className="single-text" cols="20" rows="30" style={styles} value={editButton ?noteDescription : null}></textarea>
            </div>
            <div className="single-buttons">
                <button  className="single-btn" onClick={editNoteHandler}>{editButton ? "EDIT" : "SAVE"}</button>
                <button onClick={archiveNoteHandler} className="single-btn">{status ? "ARCHIVE" : "ACTUALISE"}</button>
                <button onClick={openModal} className="single-btn">DELETE</button>
            </div>
            {modal ? <ModalWindow closeModal={closeModal} delete={deleteNoteHandler}/> : null}
        </div>
    );
};

export default NoteItemPage;