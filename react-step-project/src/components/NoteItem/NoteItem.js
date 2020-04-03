import React, {Component} from 'react';
import './NoteItem.css'
import {Link} from "react-router-dom";

class NoteItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Link to={`/notes/${this.props.ob.id}`}>
                <div id={this.props.ob.id} className={'noteItem'} onClick={this.props.noteClicked}>
                    <div className={'note-title-holder'}>
                        <h2 className={'note-title'}>{this.props.ob.noteTitle}</h2>
                    </div>
                    <div className={'note-body-holder'}>
                        <p className={'note-body'}>{this.props.ob.noteDescription}</p>
                    </div>
                </div>
            </Link>

    );
    }
}


export default NoteItem;