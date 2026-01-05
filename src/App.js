import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/"  element={<News key="top" country={"in"} size={6} category={"top"}/>} />
            <Route path="/about"  element={<About/>} />
             <Route path="/business"  element={<News key="business" country={"in"} size={6} category={"business"}/>} />
             <Route path="/entertainment"  element={<News key="entertainment" country={"in"} size={6} category={"entertainment"}/>} />
             <Route path="/health"  element={<News key="health" country={"in"} size={6} category={"health"}/>} />
             <Route path="/science"  element={<News key="science" country={"in"} size={6} category={"science"}/>} />
             <Route path="/sports"  element={<News key="sports" country={"in"} size={6} category={"sports"}/>} />
             <Route path="/technology"  element={<News key="technology" country={"in"} size={6} category={"technology"}/>} />
              <Route path="/crime"  element={<News key="crime" country={"in"} size={6} category={"crime"}/>} />
              <Route path="/domestic"  element={<News key="domestic" country={"in"} size={6} category={"domestic"}/>} />
              <Route path="/education"  element={<News key="education" country={"in"} size={6} category={"education"}/>} />
              <Route path="/environment"  element={<News key="environment" country={"in"} size={6} category={"environment"}/>} />
              <Route path="/food"  element={<News key="food" country={"in"} size={6} category={"food"}/>} />
              <Route path="/lifestyle"  element={<News key="lifestyle" country={"in"} size={6} category={"lifestyle"}/>} />
              <Route path="/politics"  element={<News key="politics" country={"in"} size={6} category={"politics"}/>} />
              <Route path="/tourism"  element={<News key="tourism" country={"in"} size={6} category={"tourism"}/>} />
              <Route path="/world"  element={<News key="world" country={"in"} size={6} category={"world"}/>} />
              
          </Routes>
        </Router>
      </div>
    )
  }
}

