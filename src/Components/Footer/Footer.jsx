import React from 'react';
import './Footer.css'
import facebookimg from '../img/Facebook.jpg'
import LinkedInimg from '../img/LinkedIn.png'
import Instagram from '../img/Instagram.png'
import Twitter from '../img/Twitter.png'



const Footer = () => {
    return (
        <div className='footer'>
           <footer class="flex flex-col md:flex-row justify-between items-center gap-6 border-t pt-6">
    <h1 class="font-bold text-2xl">Anir</h1>
    <nav class="flex gap-6">
      <a href="#">Home</a>
      <a href="#">Portfolio</a>
      <a href="#">About Me</a>
      <a href="#">Testimonials</a>
    </nav>
    <div class="flex gap-4">
      <a href="https://www.facebook.com/share/1BGu6RAfPy/"><img src={facebookimg} alt="Facebook" className=" bg-blue-400 h-8 w-8 h-8 w-8 " /></a>
      <a href="https://www.linkedin.com/in/md-anir-nawaf-bishal-34aa7a239/"><img src="src/Components/img/LinkedIn.png" alt="LinkedIn" className="bg-blue-400 h-8 w-8" /></a>
      <a href="https://github.com/AnirNawaf"><img src="src/Components/img/GitHub.png" alt="GitHub" class=" bg-blue-400 h-8 w-8 h-8 w-8" /></a>
      <a href="#"><img src="src/Components/img/Instagram.png" alt="Instagram.png" class=" bg-blue-400 h-8 w-8 h-8 w-8" /></a>
      <a href="#"><img src="src/Components/img/Twitter.png" alt="Twitter" class=" bg-blue-400 h-8 w-8 h-8 w-8" /></a>
      
    </div>
  </footer>
  <div class="mt-12 justify-center w-[60%] bg-green-800">
  <h1 class=" mx-10 ">I am undersigned, hereby declare that I will be responsible for any wrong information.</h1>
</div>
  <p class="text-center mt-6 text-gray-500">
    Copyright © 2025 <a href="https://www.facebook.com/share/1BGu6RAfPy/"
      class="text-indigo-600 font-semibold">Anir</a>. All rights reserved.
  </p>

</div>
    );
};

export default Footer;