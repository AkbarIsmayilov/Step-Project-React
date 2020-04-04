import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../notes.png";

const Layout = ({children}) => {
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
            {children}
        </div>
    );
};

export default Layout;