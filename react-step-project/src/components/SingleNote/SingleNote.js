import React, {Component} from 'react';
import {Route} from "react-router-dom";
import './SingleNote.css';

class SingleNote extends Component {
    render() {
        return (
            <Route path={`/notes/${this.props.ob.id}`} render={() =>
                <div className={'single-item'}>
                    <div className={'single-title-holder'}>
                        <h2 className={'single-title'}>{this.props.ob.noteTitle}</h2>
                    </div>
                    <div className={'single-body-holder'}>
                        <p className={'single-body'}>{this.props.ob.noteDescription}</p>
                    </div>
                </div>}/>

        );
    }
}

export default SingleNote;