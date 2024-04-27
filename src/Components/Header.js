import { React } from 'react';
import '../css/Header.css'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Header() {
  return (
    <div className="container-fluid d-flex justify-content-center fs-5 sticky-top" style={{ backgroundColor: "#002e596c" }} >
      <nav className="navbar navbar-expand-lg w-75">
        <div className="container-fluid">
          <h2 className="navbar-brand fs-4 logo" href="#">LOGO</h2>
          <button className="navbar-toggler bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className='d-flex justify-content-between w-100 '>
              <div className='d-flex w-100 justify-content-lg-end'>
                <div className='d-lg-flex justify-content-lg-end mt-3 mt-lg-0 w-100'>
                  <ul className="navbar-nav mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active text-light " aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light " aria-current="page" href="#skils">Skills</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light " href="#projects">Projects</a>
                    </li>
                  </ul>
                </div>
                <div className='d-flex flex-column flex-lg-row w-100 justify-content-end align-items-end'>
                  <div className='icons d-flex justify-content-end align-items-end justify-content-lg-center align-items-lg-center mb-2 m-lg-0'>
                    <div className='iconAfter'><a href='https://www.linkedin.com/in/ahmed-el-karra-ab4629249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><FontAwesomeIcon icon={faLinkedin} /></a></div>
                    <div className='iconAfter'><FontAwesomeIcon icon={faFacebook} /></div>
                    <div className='iconAfter'><FontAwesomeIcon icon={faInstagram} /></div>
                  </div>
                  <form className="afterButton">
                    <a href='#footer'>Let's Connect</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
