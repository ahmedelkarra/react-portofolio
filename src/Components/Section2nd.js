import React from "react";
import '../css/Section2nd.css'
import contactMe from '..//img/forContact.png'




const Section2nd = () => {
    return (
        <div className="mainDevSection row justify-content-evenly">
            <img src={contactMe} alt="contactMe" className="col-6" />


            <div class=" g-3 w-50 col-6 w-50 row">
                <h2>Get In Touch</h2>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder='First Name' />
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder='Last Name' />
                </div>
                <div class="col-md-6">
                    <input type="email" class="form-control" placeholder='Email Address' />
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder='Phone Number' />
                </div>
                <div class="col-12">
                    <textarea></textarea>
                </div>
                <div class="col-12 w-100 ">
                    <button type="submit" class="btn btn-primary w-50 ">Sign in</button>
                </div>
            </div>


        </div>
    )
}


export default Section2nd