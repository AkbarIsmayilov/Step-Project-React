import React, {useEffect, useState} from 'react';
import CreateForm from "./pages/CreateForm/CreateForm";
import NoteItemPage from "./pages/NoteItemPage/NoteItemPage";
import Home from './components/Home/Home';
import logo from './notes.png';
import {Link} from "react-router-dom";
import {Route} from "react-router";
import './App.css';

function App() {const apiUrl = 'http://localhost:3333/notes/';
    const [state, setState] = useState([]
    );

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setState(data))
    },[apiUrl]);


    const singleNoteItemHandler = ({match}) => {
        console.log(state);

        const note = state.find( item => item.id == match.params.noteID);
         if (note ){ return <NoteItemPage  self={note}/>   }

    }



  return (
    <div className="App">

        <header className={'header'}>
            <Link className={'logo-holder'} to={'/'}>
                <img className={'logo'} src={logo} alt=""/>
                <h1 className={'logo-text'}>NotesApp</h1>
            </Link>
            <div className={'links-holder'}>
                <Link className={'actual'} to={'/actual'}>Actual</Link>
                <Link className={'archive'} to={'/archive'}>Archive</Link>
                <div className={'vertical-lines'}></div>
                <Link className={'create'} to={'/create'}>Create</Link>
            </div>
        </header>
        <main>
            <Route path={'/'} exact={true} render = {() => <Home show={'all'}/>} />
            <Route path={'/actual'}  render = {() => <Home show={'actual'}/>} />
            <Route path={'/archive'}  render = {() => <Home show={'archive'}/>} />
            <Route path={'/create'} render = {() => <CreateForm/>} />
            <Route path={'/notes/:noteID'} render={singleNoteItemHandler} />
        </main>
    </div>
  );
}

export default App;
