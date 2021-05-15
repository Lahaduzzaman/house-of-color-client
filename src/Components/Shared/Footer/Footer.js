import { faFacebookSquare, faInstagramSquare, faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Footer = () => {
    return (
        <section className="bg-info text-white p-5" >
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="mb-4 mt-md-0 mt-4">About Us</h5>
                        <p>House Of Color will seek to provide its painting services based on when they were booked.The owner sees each contract as a partnership between two parties with mutual needs,one being the homeowner who needs something painted and the contractor who wants to maintain a long-term successful business relationship.With this approach we are hoping to get repeat business and many referrals.</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-4 mt-md-0 mt-4">Company</h5>
                        <p >About</p>
                        <p>Project</p>
                        <p>Our Team</p>
                        <p>Terms & Condition</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-4 mt-md-0 mt-4">Quick Links</h5>
                        <p>Services</p>
                        <p>Sales</p>
                        <p>Contact</p>
                        <p>Our Blog</p>
                    </div>
                    <div className="col-md-2">
                        <p> <FontAwesomeIcon className="mr-1" icon={faMapMarker} />Navana GH Heights,67 Satmasjid Road,Dhaka,Bangladesh</p>
                        <br></br>
                        <br></br>
                        <div>
                            <FontAwesomeIcon className="ml-3" size="2x" icon={faFacebookSquare} />
                            <FontAwesomeIcon className="ml-3" size="2x" icon={faInstagramSquare} />
                            <FontAwesomeIcon className="ml-3" size="2x" icon={faLinkedin} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;