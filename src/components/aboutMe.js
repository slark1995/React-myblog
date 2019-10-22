import React from 'react';
import Header from './header';
import './aboutMe.css';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="aboutMe">
                <div className="header"> <Header open={true} /> </div>
                
                <div className="aboutContainer">
                    <h2>About Me</h2>
                    <ul className="about-list">
                    <li>Name：Taijie Yang</li>
                        <li>Education：University of Alberta</li>
                        <li>
                            联系方式：

                            <a href="mailto:taijie@ualberta.ca" target="_blank">taijie@ualberta.ca</a>
                        </li>
                        
                    </ul>
                </div>
            </div>

        );

    };
};


export default AboutMe;