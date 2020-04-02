import React, {Component} from 'react';

class SingleNote extends Component {
    render() {
        return (
            <div className={'noteItem'}>
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

export default SingleNote;