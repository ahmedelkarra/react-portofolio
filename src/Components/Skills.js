import React from "react";
import '../css/Skills.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GradientSVG from "./Gradient";


const Skills = () => {
    const percentage1 = 92
    const percentage2 = 90
    const percentage3 = 93
    const percentage4 = 94

    const idCSS = "color";

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="w-75 mx-auto mt-4  text-center moreOptions" id="skils" >
            <h2 className="mb-2">Skills</h2>
            <p className="mb-4">Here Are My Skills</p>
            <Carousel
                className=" text-center m-auto"
                infinite={true}
                responsive={responsive}>
                <div>
                    <GradientSVG />
                    <CircularProgressbar value={percentage1} text={`${percentage1}%`} className="Progressbar"
                        styles={{
                            path: { stroke: `url(#${idCSS})`, height: "100%", transform: 'rotate(0.20turn)', transformOrigin: 'center center', },
                            trail: {
                                stroke: ""
                            }
                        }}
                    />


                    <h5 className="my-2">React</h5>
                </div>
                <div>
                    <CircularProgressbar value={percentage2} text={`${percentage2}%`} className="Progressbar .CircularProgressbar-path .CircularProgressbar-text"
                        styles={{
                            path: { stroke: `url(#${idCSS})`, height: "100%", transform: 'rotate(0.20turn)', transformOrigin: 'center center', },
                            trail: {
                                stroke: ""
                            }
                        }} />
                    <h5 className="my-2">Front End</h5>
                </div>
                <div>
                    <CircularProgressbar value={percentage3} text={`${percentage3}%`} className="Progressbar"
                        styles={{
                            path: { stroke: `url(#${idCSS})`, height: "100%", transform: 'rotate(0.20turn)', transformOrigin: 'center center', },
                            trail: {
                                stroke: ""
                            }
                        }} />
                    <h5 className="my-2">Node JS</h5>
                </div>
                <div>
                    <CircularProgressbar value={percentage4} text={`${percentage4}%`} className="Progressbar"
                        styles={{
                            path: { stroke: `url(#${idCSS})`, height: "100%", transform: 'rotate(0.20turn)', transformOrigin: 'center center', },
                            trail: {
                                stroke: ""
                            }
                        }} />
                    <h5 className="my-2">Back End</h5>
                </div>
            </Carousel>
        </div>
    )
}


export default Skills