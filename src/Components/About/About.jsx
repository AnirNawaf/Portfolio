import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-titale">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="thimeimg" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="profile_img" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a passionate Front-End Developer committed to creating clean, user-friendly interfaces and solving complex problems. I believe great software combines empathy with efficient design to deliver solutions that are both effective and enjoyable. I am eager to continuously learn and adopt new technologies to grow my skills and provide better experiences.</p>
                        

                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>CSS</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>javaScript</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React</p><hr style={{ width: "70%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                
                <div className="about-achievement">
                    <h1> 15+ </h1>
                    <p> PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1> 10+ </h1>
                    <p> HAPPY CLINTS</p>
                </div>

            </div>

        </div>




    );
};

export default About;