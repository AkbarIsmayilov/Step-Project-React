import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import './Home.css';
import NoteItem from "../NoteItem/NoteItem";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        const myReq = new XMLHttpRequest();
        myReq.open('GET', 'http://localhost:3333/notes');
        myReq.onreadystatechange = () => {
            if (myReq.readyState == 4 && myReq.status == 200) {
                this.setState({notes: JSON.parse(myReq.response)});
            }
        }
        myReq.send();
    }

    goToSingleNote = (e) => {
        console.log(e.currentTarget.id);

    }

    render() {
        let all = this.state.notes;
        let actual = this.state.notes.filter(note => note.status === true);
        let archive = this.state.notes.filter(note => note.status === false);
        let notes;
        if (this.props.show === 'all') {
            notes = all;
        } else if (this.props.show === 'actual') {
            notes = actual;
        } else {
            notes = archive;
        }
        notes = notes.map((item, ind) => <NoteItem key={ind} ob={item} noteClicked={this.goToSingleNote}/>);
        return (
            <div className={'home-wrapper'}>
                {notes}
            </div>
        );
    }
}

export default Home;