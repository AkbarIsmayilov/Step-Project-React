import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './NoteItem.css'

class NoteItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const noteItemStyle = {
            "backgroundColor": `${this.props.ob.color}`
        };
        return (
            <Link id={this.props.ob.id} className={'note-item'} onClick={this.props.noteClicked}
                  to={`/notes/${this.props.ob.id}`}>
                <div className={'note-title-holder'} style={noteItemStyle}>
                    <h2 className={'note-title'}>{this.props.ob.noteTitle}</h2>
                </div>
                <div className={'note-body-holder'} style={noteItemStyle}>
                    <p className={'note-body'}>{this.props.ob.noteDescription}</p>
                </div>
            </Link>

        );
    }
}


export default NoteItem;