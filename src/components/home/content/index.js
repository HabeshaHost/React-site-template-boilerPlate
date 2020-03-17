import React from 'react';
import Image from 'react-bootstrap/Image';
import softimg from '../../../assets/app-application-application-software-applications.jpg';
import toolimg from '../../../assets/app-tools-application-banner.jpg';
import cloudimg from '../../../assets/cloud-computing-illustration-technology.jpg';
import lightimg from '../../../assets/light-points-social-media-network-networking.jpg';
import smartimg from '../../../assets/smartphone-mobile-phone-social-media-icon-phone-button.jpg';
const Content = () => {
    return (
        <div class="container">
                
            <div class="row">
                <div class="col-md-6">
                    <Image src={softimg} fluid />
                </div>
                
                <div class="col-md-6">
                    <br/><br/><br/>
                    <h2>Discover Habesha Insight</h2>
                    <p>Since the year 2000, we’ve helped our clients harness the power of digital innovation, delivering 300+ business- transforming digital experience projects over the last 20 years.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                
            </div>
            <div class="row">
                <div class="col-md-12">
                    
                    <h2 class="text-center">Our Service</h2>
                    <p class="text-justify">Turn your expertise into growth. Let’s define the digital innovation you need to win today — and the vision you need to win tomorrow. It’s time to create effortless user experiences and turn yesterday’s custom software investments into today’s assets. Here’s how we do it.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <h2>DISCOVER</h2>
                    <Image src={cloudimg} fluid />
                    <ul class="list-group">
                        <li class="list-group-item">Digital Strategy</li>
                        <li class="list-group-item">Design Sprints</li>
                        <li class="list-group-item">User Research</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h2>ENVISION</h2>
                    <Image src={toolimg} fluid />
                    <ul class="list-group">
                        <li class="list-group-item">User Experience Design</li>
                        <li class="list-group-item">User Interface Design</li>
                        <li class="list-group-item">Rapid Prototyping</li>
                    </ul>
                </div>
                
                <div class="col-md-4">
                    <h2>BUILD</h2>
                    <Image src={smartimg} fluid height="12px"/>
                    
                    <ul class="list-group">
                        <li class="list-group-item">Custom Software Development</li>
                        <li class="list-group-item">Application Modernization</li>
                        <li class="list-group-item">Web Portal Development</li>
                        <li class="list-group-item">A Web App Development</li>
                        <li class="list-group-item">Mobile App Development</li>
                    </ul>
                </div>
                
            </div>
            <div class="row">
               <br/>
            </div>
            <div class="row">
                <div class="col-md-12">
                    
                    <h2 class="text-center">We’re built to be your digital innovation partner</h2>
                </div>
            </div>
            <div class="row">
            <div class="col-md-12">
                    <Image src={lightimg} fluid />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    
                    <h2 class="text-center">Transform what matters most to your business.</h2>
                    <p class="text-justify">Your users expect frictionless experiences that surface critical information at the right time, cut complexity down to size, and empower confident financial decisions. We deliver.</p>
                </div>
            </div>
        </div>
    )
    
}

export default Content;
