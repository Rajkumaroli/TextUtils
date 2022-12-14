import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About US
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            <div className="d-flex">
              <div className='bg-primary rounded mx-2' style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.changeMode('primary')}}></div>
            </div>
            <div className="d-flex">
              <div className='bg-success rounded mx-2' style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.changeMode('success')}}></div>
            </div>
            <div className="d-flex">
              <div className='bg-danger rounded mx-2' style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.changeMode('danger')}}></div>
            </div>
            <div className="d-flex">
              <div className='bg-warning rounded mx-2' style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.changeMode('warning')}}></div>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={()=>{props.changeMode('null')}}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={props.mode=='light' ? {color:"black"} : {color:"white"}}
              >
                {props.mode=='light' ? "Light" : "Dark"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Navbar
Navbar.propTypes = {
    title: PropTypes.string
}
Navbar.defaultProps = {
    title:"TextUtils"
}