import { faFacebookSquare, faInstagramSquare, faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <section className="bg-danger text-white p-5" >
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6> <FontAwesomeIcon className="mr-1" icon={faMapMarker} /> H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka, Bangladesh</h6>
                    </div>
                    <div className="col-md-2">
                        <h5 className="mb-4 mt-md-0 mt-4">Company</h5>
                        <p >About</p>
                        <p>Project</p>
                        <p>Our Team</p>
                        <p>Terms & Condition</p>
                        <p>Submit Listing</p>
                    </div>
                    <div className="col-md-2">
                        <h5 className="mb-4 mt-md-0 mt-4">Quick Links</h5>
                        <p>Services</p>
                        <p>Sales</p>
                        <p>Contact</p>
                        <p>Our Blog</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-4 mt-md-0 mt-4">About us</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias rem deleniti repudiandae animi quas illo!</p>
                        <div>
                            <FontAwesomeIcon className="ml-3" size="2x" icon={faFacebookSquare} />
                            <FontAwesomeIcon className="ml-3" size="2x" icon={faInstagramSquare} />
                            <FontAwesomeIcon className="ml-3" size="2x" icon={faLinkedin} />
                            <FontAwesomeIcon className="ml-3" size="2x" icon={faYoutubeSquare} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;