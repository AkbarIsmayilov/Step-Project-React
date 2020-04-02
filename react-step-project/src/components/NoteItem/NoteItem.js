import React, {Component} from 'react';
import './NoteItem.css'

class NoteItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id={this.props.ob.id} className={'noteItem'} onClick={this.props.noteClicked}>
                <div className={'note-title-holder'}>
                    <h2 className={'note-title'}>{this.props.ob.noteTitle}</h2>
                </div>
                <div className={'note-body-holder'}>
                    <p className={'note-body'}>{this.props.ob.noteDescription}</p>
                </div>
            </div>
        );
    }
}


export default NoteItem;