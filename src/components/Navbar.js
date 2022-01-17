import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import FindDoctors from './FindDoctors';

export default function Navbar( props) {
    return (
        <>
<nav className="navbar navbar-dark">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">{props.title}</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
        <li><Link to="/FindDoctors">{props.menu1}</Link></li>
        <li><a href="/">{props.menu2}</a></li>
        <li><a href="/">{props.menu3}</a></li>
        <li><a href="/">{props.menu4}</a></li>
      </ul>
      <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search"/>
        </div>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/">Login /SignUp</a></li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

Navbar.propTypes = {
     title : PropTypes.string,
     menu1 : PropTypes.string,
     menu2 : PropTypes.string,
     menu3 : PropTypes.string,
     menu4 : PropTypes.string,
    }

Navbar.defaultProps = {
    title : 'Max',
    menu1 : 'Menu1',
    menu2 : 'Menu2',
    menu3 : 'Menu3',
    menu4 : 'Menu4'
}
