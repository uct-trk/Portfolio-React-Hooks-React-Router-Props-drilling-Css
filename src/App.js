import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Services from './components/pages/Services';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';

const App = () => {
    return (
        <Router>

            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/services" exact component={Services} />
                <Route path="/about" exact component={About} />
                <Route path="/sign-up" exact component={SignUp} />
            </Switch>

        </Router>
    )
}

export default App
