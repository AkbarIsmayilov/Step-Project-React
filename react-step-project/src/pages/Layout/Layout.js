import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Route} from "react-router";
import {NotesContext} from "../../components/NotesContext/NotesContext";
import Home from "../Home/Home";
import CreateForm from "../CreateForm/CreateForm";
import NoteItemPage from "../NoteItemPage/NoteItemPage";
import logo from "../../notes.png";


const Layout = () => {
    const [notes, setNotes] = useContext(NotesContext);
    const singleNoteItemHandler = ({match}) => {
        const note = notes.find(item => item.id == match.params.noteID);
        if (note) {
            return <NoteItemPage self={note}/>
        }

    }

    return (
        <div>
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
                <Route path={'/'} exact={true} render={() => <Home show={'all'}/>}/>
                <Route path={'/actual'} render={() => <Home show={'actual'}/>}/>
                <Route path={'/archive'} render={() => <Home show={'archive'}/>}/>
                <Route path={'/create'} component={CreateForm}/>
                <Route path={'/notes/:noteID'} render={singleNoteItemHandler}/>
            </main>
        </div>
    );
};

export default Layout;