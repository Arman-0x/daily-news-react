import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<News country={"in"} size={6} category={"others"}/>} />
             <Route path="/business" element={<News country={"in"} size={6} category={"business"}/>} />
             <Route path="/entertainment" element={<News country={"in"} size={6} category={"entertainment"}/>} />
             <Route path="/health" element={<News country={"in"} size={6} category={"health"}/>} />
             <Route path="/science" element={<News country={"in"} size={6} category={"science"}/>} />
             <Route path="/sports" element={<News country={"in"} size={6} category={"sports"}/>} />
             <Route path="/technology" element={<News country={"in"} size={6} category={"technology"}/>} />
              <Route path="/crime" element={<News country={"in"} size={6} category={"crime"}/>} />
              <Route path="/domestic" element={<News country={"in"} size={6} category={"domestic"}/>} />
              <Route path="/education" element={<News country={"in"} size={6} category={"education"}/>} />
              <Route path="/environment" element={<News country={"in"} size={6} category={"environment"}/>} />
              <Route path="/food" element={<News country={"in"} size={6} category={"food"}/>} />
              <Route path="/lifestyle" element={<News country={"in"} size={6} category={"lifestyle"}/>} />
              <Route path="/politics" element={<News country={"in"} size={6} category={"politics"}/>} />
              <Route path="/top" element={<News country={"in"} size={6} category={"top"}/>} />
              <Route path="/tourism" element={<News country={"in"} size={6} category={"tourism"}/>} />
              <Route path="/world" element={<News country={"in"} size={6} category={"world"}/>} />
              
          </Routes>
        </Router>
      </div>
    )
  }
}

