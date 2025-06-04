/* eslint-disable react/no-typos */
/* eslint-disable jsx-a11y/anchor-is-valid */

//import { Link } from "react-router-dom";

export default function Navbar(props) {
  
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.propTitle}</a>
    {/*<Link className="navbar-brand" to="/">{props.propTitle}</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"> {props.navOption1} </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.navOption2} </a>
        </li>        
      </ul>

      <form className="d-flex mx-3" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> 
      </form>
    </div>
      <div className="form-check form-switch mx-6">
        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" value="ModeS" id="checkNativeSwitch" />
          <label className={`form-check-label text-${props.mode === "light"?"dark":"light"}`} htmlFor="checkNativeSwitch">
            Enable dark mode
         </label>
      </div>
  </div>
</nav>
    )

  }
