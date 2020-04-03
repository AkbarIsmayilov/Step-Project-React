import React, { useState} from 'react';
import {Redirect} from 'react-router-dom';
import {CirclePicker} from 'react-color';
import PropTypes from 'prop-types';

import './CreateForm.scss'
const CreateForm = ({typeOfForm = "create"}) => {
    const dbUrl = 'http://localhost:3333/notes';
    let [state, setState] = useState({
        bgColor:'aqua',
        inputs : {
            text: '',
            title: ''
        },
        isSubmittable: false
    });

    const handleChangeComplete = (color, event) => {
        setState(
            { ...state,
                bgColor: color.hex})
    };

    const handleChangeNote  = (e) => {
        const {name, value} =e.target;

        const newInputs = {
            ...state.inputs,
            [name] :value
        }

        setState(
            { ...state,
                inputs : {...newInputs},
                isSubmittable: Object.keys(newInputs).every( elem => newInputs[elem].length > 0 )
            })
        console.log(state);
    }

    const handleSubmitNote = (e) =>  {
        e.preventDefault();
        console.log(e.target);
        const {title, text} = state.inputs,
         {bgColor } = state;

        if (typeOfForm === 'create') {
            const data = {
                noteTitle: title,
                noteDescription: text,
                color: bgColor,
                status: true
            };
            fetch( `http://localhost:3333/notes/`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            return <Redirect to={'/actual'}/>
        }
        else if (typeOfForm === 'edit') {
            const {id} = 1
            fetch( `http://localhost:3333/notes/${id}`, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(1),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }



    }

    return (
        <form   onSubmit={handleSubmitNote}
                onChange={handleChangeNote}
                className={"form-container"}
        >
            <h1>Fill Data</h1>
            <input  className={"form-title-input"}
                    type="text"
                    name={"title"}
                    placeholder={"Title"}
            />
            <textarea  className={"form-textarea"}
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
                        colors={['yellowgreen', "yellow" , 'pink' , 'aqua', 'violet']}
                    />
                </div>
            </div>
            <button disabled={!state.isSubmittable} className="form-create-button">{typeOfForm.toUpperCase()}</button>
        </form>
    );
};

CreateForm.propTypes = {
    typeOfForm : PropTypes.string
};

CreateForm.defaultProps  = {
    typeOfForm: "create"
};


export default CreateForm;