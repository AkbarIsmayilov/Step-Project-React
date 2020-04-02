import React, {Component} from 'react';
import Home from './components/Home/Home';
import {Link, Route} from "react-router-dom";
import './App.css';
import logo from './notes.png';
import SingleNote from "./components/SingleNote/SingleNote";


class App extends Component {
    constructor() {
        super();
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

    render() {
        let routes = this.state.notes.map((item, ind) => <SingleNote key={ind} ob={item}/>);

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
                <main className={'main-holder'}>
                    <Route path={'/'} exact={true} render = {() => <Home show={'all'}/>} />
                    <Route path={'/actual'}  render = {() => <Home show={'actual'}/>} />
                    <Route path={'/archive'}  render = {() => <Home show={'archive'}/>} />
                    <Route path={'/create'} render = {() => <p>Create Note is gonna be here</p>} />

                    {routes}
                </main>
            </div>
        );
    }
}

export default App;
