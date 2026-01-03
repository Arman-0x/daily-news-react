import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">NewsApp</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/business">business</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/crime">crime</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/domestic">domestic</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/education">education</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/entertainment">entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/environment">environment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/food">food</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/health">health</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/lifestyle">lifestyle</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/politics">politics</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/science">science</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/sports">sports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/technology">technology</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" to="/top">top</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" to="/tourism">tourism</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" to="/world">world</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
