import React from "react";
import '../css/Footer.css'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Footer = () => {
    return (
        <div className="row position-relative" id="footer">
            <div className="d-flex col-12 w-75 m-auto moreOptionLable">
                <div className="toMakeNestedButton">
                    <input placeholder="Email Address"></input>
                    <button className="text-center" >Submit</button>
                </div>
                <h2 className="fs-5 w-25 ">see my projects at once & leave here your email</h2>
            </div>
            <div className="row justify-content-evenly align-content-end moreOptionsFooter">
                <h2 className="col-4 text-center">LOGO</h2>
                <div className='icons col-6 row justify-content-center justify-content-lg-end me-2'>
                    <div className='iconAfter'><a href='https://www.linkedin.com/in/ahmed-el-karra-ab4629249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><FontAwesomeIcon icon={faLinkedin} /></a></div>
                    <div className='iconAfter'><FontAwesomeIcon icon={faFacebook} /></div>
                    <div className='iconAfter'><FontAwesomeIcon icon={faInstagram} /></div>
                    <div className='text-center text-lg-end mt-2'><h3 className="fs-6 ">&copy; 2024 All rights Reserved Here by Ahmed Aly</h3></div>
                </div>
            </div>
        </div>

    )
}


export default Footer