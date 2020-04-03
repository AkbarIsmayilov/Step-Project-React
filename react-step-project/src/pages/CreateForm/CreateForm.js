import React, {useState} from 'react';
import {CirclePicker} from 'react-color';
import PropTypes from 'prop-types';

import './CreateForm.scss'
const CreateForm = ({typeOfForm = "create"}) => {

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
                bgColor: color.hex});
        console.log(state.bgColor);
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
        console.log(state);

        let data = {
            noteTitle: `${state.inputs.title}`,
            noteDescription: `${state.inputs.text}`,
            color: `${state.bgColor}`,
            isCompleted: "true"
        }
        console.log(JSON.stringify(data));

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3333/notes', true);
        xhr.setRequestHeader("Content-Type","application/json" );
        xhr.send(JSON.stringify(data));

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
            <input type={'submit'} value={typeOfForm.toUpperCase()} disabled={!state.isSubmittable} className="form-create-button"/>
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