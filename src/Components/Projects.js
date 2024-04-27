import React from "react";
import '../css/Projects.css'
import { NavLink, Outlet } from "react-router-dom";




const Projects = () => {
    const statusActive = ({ isActive }) => {
        return (
            {
                backgroundImage: isActive ? 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)' : ''
            }
        )
    }
    return (
        <div className="text-center mt-5 fs-5 moreOptionProjects" id="projects">
            <h2>My Projects</h2>
            <p>My name is Ahmed Aly , i live in Zagreb Croatia</p>
            <div className="container d-flex justify-content-center align-items-center" style={{marginBottom:'120px'}} >
                <NavLink style={statusActive} to={'section1'} className='px-lg-5 py-lg-2'>1st Section</NavLink>
                <NavLink style={statusActive} to={'section2'} className='px-lg-5 py-lg-2'>2st Section</NavLink>
                <NavLink style={statusActive} to={'section3'} className='px-lg-5 py-lg-2'>3st Section</NavLink>
            </div>
            <Outlet />
        </div>
    )
}


export default Projects