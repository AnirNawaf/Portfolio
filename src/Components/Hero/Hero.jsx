import React from 'react';
import './Hero.css'
import profile_img from '../../assets/profile_img.svg.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt=" profile" />
            <h1><span>I'm Md. Anir Nawaf Bishal</span> a <span>Font-End</span> Developer from Banglasesh</h1>
            <p>Lipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo dolores magnam vitae voluptate quam, sapiente quos velit provident esse! Veniam quia illum laborum autem verit</p>

            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect With Me</AnchorLink> </div>
                <div className="hero-resume"><a href="https://drive.google.com/file/d/1DKM3HZYSXofKdeDk8AgfWX9-ogu44eYy/view?usp=sharing">My Resume</a></div>
            </div>
            
        </div>
    );
};

export default Hero;
