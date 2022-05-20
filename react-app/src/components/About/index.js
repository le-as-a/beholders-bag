import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about'>
            <div className='about-bio'>
                <div className='about-title'>Welcome! Thanks for stopping by.</div>
                This app was built using the <a href='https://api.open5e.com/' rel="noreferrer" target='_blank'>Open5e API</a>, designed and developed by myself,
                <a href='https://le-as-a.github.io/' rel='noreferrer' target='_blank'> Asia Le</a>, a backend dev-to-be! It was developed using React.js, Redux,
                Flask.py, PostgreSQL, Docker, and HTML/CSS.
                This is the <a href='https://github.com/le-as-a/dnd-search' rel='noreferrer' target='_blank'>repository </a>
                associated with my app, and below you'll find ways to reach me.<br /><br />
                <div className='about-links'>
                    <a href='https://www.linkedin.com/in/asia-le-073860103/' rel='noreferrer' target='_blank'>
                        <img src='https://i.imgur.com/AkVl130.png' id='linkedin' />
                    </a>
                    <a href='https://angel.co/u/asia-le-1' rel='noreferrer' target='_blank'>
                        <img src='https://i.imgur.com/LJxtKwI.png' id='angellist' />
                    </a>
                    <a href='https://github.com/le-as-a' rel='noreferrer' target='_blank'>
                        <img src='https://i.imgur.com/YeTBDsA.png' id='github' />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default About;
