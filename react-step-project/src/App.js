import React from 'react';
import CreateForm from "./pages/CreateForm/CreateForm";
import Home from './components/Home/Home';
import {Link, Route} from "react-router-dom";
import './App.css';
import logo from './notes.png';

function App() {
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
            <Route path={'/create'} render = {() => <p>Create Note is gonna be here</p>} />
        </main>
    </div>
  );
}

export default App;
