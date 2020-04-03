import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './NoteItem.css'

class NoteItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link id={this.props.ob.id} className={'note-item'} onClick={this.props.noteClicked}
                  to={`/notes/${this.props.ob.id}`}>
                <div className={'note-title-holder'}>
                    <h2 className={'note-title'}>{this.props.ob.noteTitle}</h2>
                </div>
                <div className={'note-body-holder'}>
                    <p className={'note-body'}>{this.props.ob.noteDescription}</p>
                </div>
            </Link>

        );
    }
}


export default NoteItem;