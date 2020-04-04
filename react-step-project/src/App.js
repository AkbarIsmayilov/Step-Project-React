import React from 'react';
import Layout from "./pages/Layout/Layout";

import './App.css';

import {NotesProvider} from './components/NotesContext/NotesContext';

function App() {
    return (
        <NotesProvider>
            <div className="App">
                <Layout/>

           </div>

</NotesProvider>
    );
}

export default App;
