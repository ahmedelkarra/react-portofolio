import React from "react";
import '../css/MainSection.css'
import { TypeAnimation } from 'react-type-animation';
import Sun from '../img/sun.png'
import Merkur from '../img/Merkur.png'
import Venus from '../img/Venus.png'
import earth from '../img/earth.png'
import mars from '../img/mars.png'



const MainSection = () => {
    return (
        <div className="d-flex flex-lg-row  flex-column  align-items-lg-center justify-content-lg-around m-auto  moreOption ">
            <div className="test text-center w-75">
                <h2>Hello I'm Ahmed Aly</h2>
                <TypeAnimation
                    sequence={[
                        "I'm a Web Developer",
                        1000,
                        "MERN Stack",
                        1000,
                        "React & Node js",
                        1000,
                    ]}
                    speed={200}
                    repeat={Infinity}
                    style={{ fontSize: '2em', color: 'wiaht' }}
                />
            </div>
            <div className="d-flex justify-content-center  align-items-lg-center flex-sm-column  h-75 w-100 ">
                <div className="sunDiv ">
                    <img src={Sun} alt="Sun" className="mt-lg-0 " />
                    <div className="planetBorder">
                        <div className="palnetHTML">
                            <img src={Merkur} alt="Merkur"></img>
                        </div>
                        <div className="palnetCSS">
                            <img src={Venus} alt="Venus"></img>
                        </div>
                        <div className="palnetJS">
                            <img src={earth} alt="earth"></img>
                        </div>
                        <div className="palnetRE">
                            <img src={mars} alt="mars"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MainSection