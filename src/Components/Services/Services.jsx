import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import htmlIMG from '../img/HTML.png'
import CSSIMG from '../img/CSS.png'
import JavaScript from '../img/JS.png'
import React1 from '../img/REACT.png'
import TailwindCSS from '../img/feather-pen 1.png'
import GitHub from '../img/GitHub.png'


const Services = () => {
    return (
        <div id='services' className="services">
            {/* Title Section */}
            <div className="services-title">
                <h1>My Skills</h1>
                <img src={theme_pattern} alt="theme" />
            </div>

            {/* Services Grid */}
            <div className="services-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mt-10">

                    <div className="bg-[linear-gradient(267deg,_rgb(22,22,22)_0.36%,_rgb(226,175,175)_102.06%)]  p-6 h-64 ">
                        <img src={htmlIMG} alt="HTML" className="h-20 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">HTML5</h2>
                        <p>Clean, semantic, SEO-friendly HTML code for accessible web pages.</p>
                    </div>

                    <div className="bg-[linear-gradient(267deg,_rgb(22,22,22)_0.36%,_rgb(226,175,175)_102.06%)] p-6 rounded-lg shadow h-64">
                        <img src={CSSIMG} alt="CSS3" className="h-20 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">CSS3</h2>
                        <p>Styling responsive and visually appealing layouts using CSS3 and Flexbox.</p>
                    </div>

                    <div className="bg-[linear-gradient(267deg,_rgb(22,22,22)_0.36%,_rgb(226,175,175)_102.06%)]  p-6 rounded-lg shadow h-64">
                        <img src={JavaScript} alt="JavaScript" className="h-20 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">JavaScript</h2>
                        <p>Dynamic interactivity with modern JavaScript features and ES6+ syntax.</p>
                    </div>

                    <div className="bg-[linear-gradient(267deg,_rgb(22,22,22)_0.36%,_rgb(226,175,175)_102.06%)]  rounded-lg shadow h-64">
                        <img src={React1} alt="React" className="h-20 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">React</h2>
                        <p>Reusable components, state management, and fast modern UIs.</p>
                    </div>


                    <div className="bg-[linear-gradient(267deg,_rgb(22,22,22)_0.36%,_rgb(226,175,175)_102.06%)]  p-6 rounded-lg shadow h-64">
                        <img src={TailwindCSS} alt="TailwindCSS" className="h-20 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">TailwindCSS</h2>
                        <p>Build responsive, elegant designs efficiently with TailwindCSS.</p>
                    </div>
                    <div className="bg-[linear-gradient(267deg,_rgb(22,22,22)_0.36%,_rgb(226,175,175)_102.06%)]  p-6 rounded-lg shadow h-64">
                        <img src={GitHub} alt="GitHub" className="h-20 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Git / GitHub</h2>
                        <p>Version control and collaboration using Git and GitHub. Experienced in managing repositories, branching, pull requests, and team workflows.</p>
                    </div>

                </div>

                {/* Read More Section */}

            </div>
        </div>
    );
};

export default Services;
