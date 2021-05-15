import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import topBanner from '../../../images/topBanner.jpg';


const TopBanner = () => {
    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="container">
                            <h1 style={{ fontSize: '45px' }} >Welcome To<br /> <b>House Of Color</b></h1>
                            <p className="mt-4" >House Of Color's team of painters will provide top-quality interior and exterior residential and commercial painting services to the local area. The facilities will include a reception area where clients can come in and buy paint and various paint tools such as brushes, rollers, etc. There will be storage area for inventory, an employee coffee room, and an office for the owner.The owner of House Of Color believes that most companies can be profitable and successful if they focus on maintaining customer satisfaction.</p>
                            <Link to="/services" className="btn btn-warning mt-4">Hire Us</Link>
                        </div>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-5">
                        <div className="text-center" >
                            <img className="w-100" style={{ height: '500px' }} src={topBanner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;