import React, {useEffect, useState} from 'react';
import CreateForm from "./pages/CreateForm/CreateForm";
import NoteItemPage from "./pages/NoteItemPage/NoteItemPage";
import Home from './pages/Home/Home';
import Layout from "./pages/Layout/Layout";
import {Link} from "react-router-dom";
import {Route} from "react-router";
import logo from './notes.png';
import './App.css';

import {NotesProvider} from './components/NotesContext/NotesContext';

function App() {

    const apiUrl = 'http://localhost:3333/notes/';
    const [state, setState] = useState([]
    );

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setState(data))
    }, [apiUrl]);


    const singleNoteItemHandler = ({match}) => {
        console.log(state);

        const note = state.find(item => item.id == match.params.noteID);
        if (note) {
            return <NoteItemPage self={note}/>
        }

    }


    return (
        <NotesProvider>
            <div className="App">
                <Layout>
                    <main>
                        <Route path={'/'} exact={true} render={() => <Home show={'all'}/>}/>
                        <Route path={'/actual'} render={() => <Home show={'actual'}/>}/>
                        <Route path={'/archive'} render={() => <Home show={'archive'}/>}/>
                        <Route path={'/create'} render={() => <CreateForm/>}/>
                        <Route path={'/notes/:noteID'} render={singleNoteItemHandler}/>
                    </main>
                </Layout>
            </div>

</NotesProvider>
    );
}

export default App;
