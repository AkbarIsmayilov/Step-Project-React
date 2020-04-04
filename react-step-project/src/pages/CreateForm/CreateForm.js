import React, {useState} from 'react';
import {CirclePicker} from 'react-color';

import './CreateForm.scss'

const CreateForm = (props) => {
    let [state, setState] = useState({
        bgColor: 'aqua',
        inputs: {
            text: '',
            title: ''
        },
        isSubmittable: false
    });

    const handleChangeComplete = (color, event) => {
        setState(
            {
                ...state,
                bgColor: color.hex
            })
    };

    const handleChangeNote = (e) => {
        const {name, value} = e.target;

        const newInputs = {
            ...state.inputs,
            [name]: value
        }

        setState(
            {
                ...state,
                inputs: {...newInputs},
                isSubmittable: Object.keys(newInputs).every(elem => newInputs[elem].length > 0)
            })
        console.log(state);
    }

    const handleSubmitNote = (e) => {
        e.preventDefault();
        console.log(e.target);
        const {title, text} = state.inputs,
            {bgColor} = state;

        const data = {
            noteTitle: title,
            noteDescription: text,
            color: bgColor,
            status: true
        };
        fetch(`http://localhost:3333/notes/`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                props.history.push('/');
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });



    }

    return (
        <form onSubmit={handleSubmitNote}
              onChange={handleChangeNote}
              className={"form-container"}
        >
            <h1>Fill Data</h1>
            <input className={"form-title-input"}
                   type="text"
                   name={"title"}
                   placeholder={"Title"}
            />
            <textarea className={"form-textarea"}
                      placeholder={"Note text "}
                      name="text" id=""
                      cols="30"
                      rows="10"
            ></textarea>
            <div className="form-note-color">
                <p>Color</p>
                <div className="form-color-palette">
                    <CirclePicker
                        onChangeComplete={handleChangeComplete}
                        width={"210px"}
                        colors={['yellowgreen', "yellow", 'pink', 'aqua', 'violet']}
                    />
                </div>
            </div>
            <button disabled={!state.isSubmittable} className="form-create-button">CREATE</button>
        </form>
    );
};


export default CreateForm;