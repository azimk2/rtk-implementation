import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Movie from "./components/Movies/Movie";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import Create from "./components/Movies/Create";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/movies" component={Home}/>
                <Route exact path="/movie/:id" component={Movie}/>
                <Route exact path="/movies/create" component={Create}/>
                <Route exact component={PageNotFound}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
