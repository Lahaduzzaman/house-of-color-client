import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard/TestimonialCard';


const Testimonial = () => {
    const [testimonialInfo, setTestimonialInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => setTestimonialInfo(data))
    }, [])

    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-5" >
                        <h3 className="text-center mt-3" >Client Reviews</h3>
                    </div>
                    {
                        testimonialInfo.map(each => <TestimonialCard testimonialInfo={each} ></TestimonialCard>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Testimonial;