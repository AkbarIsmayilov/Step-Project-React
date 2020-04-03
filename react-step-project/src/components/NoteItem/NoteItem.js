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

        const truncateText = (text, maxLength) => {
            let truncated = text;
            if (truncated.length > maxLength) {
                truncated = truncated.substr(0, maxLength) + ' ...';
            }
            return truncated;
        }

        return (

            <Link className={'note-item'} to={`/notes/${this.props.ob.id}`}>
                <div className={'note-title-holder'} style={noteItemStyle}>
                    <h2 className={'note-title'}>{truncateText(this.props.ob.noteTitle, 30)}</h2>
                </div>
                <div className={'note-body-holder'} style={noteItemStyle}>
                    <p className={'note-body'}>{truncateText(this.props.ob.noteDescription, 640)}</p>
                </div>
            </Link>

        );

    }
}


export default NoteItem;