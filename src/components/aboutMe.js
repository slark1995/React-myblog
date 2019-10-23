import React from 'react';
import Header from './header';
import './aboutMe.css';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="aboutMe">
                <Header open={true} />
                
                <div className="aboutContainer">
                    <h2>About Me</h2>
                    <ul className="about-list">
                        <li>Name: Taijie Yang</li>
                        <li>Education: BSc, Specialization in Computer Science
                            <br/>&emsp;&emsp;&emsp;&emsp;&emsp;University of Alberta | Edmonton
                            <br/>&emsp;&emsp;&emsp;&emsp;&emsp;Sep 2015 - Aug 2019
                        </li>
                        <li>
                            Contact:&nbsp;
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;
                            <a href="mailto:taijie@ualberta.ca" target="_blank" rel="noopener noreferrer">taijie@ualberta.ca</a>&nbsp;|&nbsp;
                            <i className="fa fa-phone" aria-hidden="true"></i> 780-885-2568&nbsp;|&nbsp;
                            <span className = "wechat"><i className="fa fa-weixin" aria-hidden="true"></i> 610158299 </span>
                        </li>
                        <li>
                            Hobby: photographing and video recording, so i am Proficient in PS and Pr
                        </li>
                    </ul>
                    <h2>Professional skills</h2>
                    <ul className="about-list">
                        <li>
                        Programming Languages: Python, HTML/CSS, Javascript, C, Java, SQL, Matlab, Understanding assembly language
                        </li>
                        <li>
                            Summary: <br/>- 2 Years of experience in software development, including designing and implementing web/mobile applications using: ReactJS, Django REST Framework, MySQL, Java, REST API
                            <br/>- Strong skills in front-end web development using HTML, CSS, JavaScript, AJAX as well as modern JS frameworks
                            <br/>- Skillful in back-end development using Django REST Framework as well as sever-less technology such as Firebase
                            <br/>- Solid backgrounds in Git based source control tools such as Github, Bitbucket
                            <br/>- Experienced in Database tools, such as Django ORM as well as MySQL, NoSQL
                            <br/>- Knowledge in common network protocols such as HTTP, TCP/IP, Restful API design
                            <br/>- Experienced in Android mobile application development using Java
                            <br/>- Deep understanding and experienced in agile methodology and scrum
                        </li>
                        <li>
                            Others:<br/>- Thorough understanding in machine learning concepts, such as reinforcement learning and deep learning, and skillful with Python tools – Tensorflow, Numpy, and Matplotlib
                            <br/>- Advanced skills in Windows, Mac and Linux operating systems
                            <br/>- Hardworking, eager to learn new knowledge, passionate about programming
                        </li>
                    </ul>
                </div>
            </div>

        );

    };
};


export default AboutMe;