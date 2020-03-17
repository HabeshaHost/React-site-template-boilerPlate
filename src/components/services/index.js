import React from 'react';
import Image from 'react-bootstrap/Image';
import softimg from '../../assets/What-Should-the-Southern-California-Tech-Industry-Expect-in-2016.jpg';
import ethioimg from '../../assets/ethiopia-financial-inclusion.png';
import cloudimg from '../../assets/28777163450_220686de1e_b.jpg';
import mobimg from '../../assets/maxresdefault.jpg';
import smaimg from '../../assets/smartphone-mobile-phone-social-media-icon-phone-button.jpg';

import techimg from '../../assets/technology-784046_1280.jpg';
const Service = () => {
        return (
            <div class="container">
            <br/>  
            <div class="row">
                <div class="col-md-6">
                    
                    <h2>DIGITAL STRATEGY</h2>
                    <p>We are a digital innovation agency. As technology transforms the way we buy, sell, and do everything, don’t let essential people and processes get left behind. Praxent can help you define the innovation you need to win today — and the vision you need to win tomorrow.</p>
                </div>
                <div class="col-md-6">
                    <Image src={softimg} fluid />
                </div>
                
                
                
            </div>
            <br/>   <br/>  
            <div class="row">
                <div class="col-md-6">
                    <Image src={ethioimg} fluid />
                </div>
                
                <div class="col-md-6">
                    
                    <h2>DISCOVER</h2>
                    <p>How should your business innovate? Let’s dig in. We examine your strengths and weaknesses, processes and pain points to discern the most promising opportunities. We help you find the quick wins and strategic wows that fuel profitable growth.</p>
                </div>
                
            </div>
            <br/>   <br/>  
            <div class="row">
                <div class="col-md-6">
                    
                    <h2>USER RESEARCH</h2>
                    <p>What do your most important people have to say? Let’s find out. We’ll ask users what they want and analyze their behaviors to reveal real opportunities for your business. We question every assumption and validate every idea so you make just-right investments, every time.</p>
                </div>
                <div class="col-md-6">
                    <Image src={cloudimg} fluid />
                </div>
                
                
                
            </div>
            <br/>   <br/>  
            <div class="row">
                <div class="col-md-6">
                    <Image src={mobimg} fluid />
                </div>
                
                <div class="col-md-6">
                    
                    <h2>INNOVATION ROADMAP</h2>
                    <p>Goals are great, but how do we get there from here? Let’s set a course. We help you break your vision down into rational, achievable steps. Our agile, data-driven approach gets you moving in the right direction so you can build on positive momentum.</p>
                </div>
                
            </div>
            <br/>   <br/>  
            <div class="row">
                <div class="col-md-6">
                   
                    <h2>APPLICATION DEVELOPMENT</h2>
                    <p>Unlock potential with digital apps that empower. We’ll help you expand your reach online and on-the-go with custom mobile and progressive web applications. From automating critical documents to supporting distributed people, we build web and mobile apps that work harder.</p>
                </div>
                <div class="col-md-6">
                    <Image src={smaimg} fluid />
                </div>
                
                
                
            </div>
            <br/>   <br/>  
            <div class="row">
                <div class="col-md-6">
                    <Image src={techimg} fluid />
                </div>
                
                <div class="col-md-6">
                   
                    <h2>CUSTOM SOFTWARE DEVELOPMENT</h2>
                    <p>To win, you need software attuned to the precise needs of your essential people and processes. Whether you need to automate, orchestrate, coordinate, or transform — partner with us for custom software services focused on driving business results.</p>
                </div>
                
            </div>
            <br/>   <br/>  
            <div class="row">
                <div class="col-md-12">
                    
                    <h2 class="text-center">Transform what matters most to your business.</h2>
                    <p class="text-justify">Your users expect frictionless experiences that surface critical information at the right time, cut complexity down to size, and empower confident financial decisions. We deliver.</p>
                </div>
            </div>
        </div>
    )
}

export default Service;