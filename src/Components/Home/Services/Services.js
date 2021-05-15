import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import ServiceCard from './ServiceCard/ServiceCard';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://glacial-mountain-57695.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5" > <h2 className="text-center" ><Badge variant="primary" pill >Our Services</Badge></h2> </div>
                    <div className="col-12 mb-5" >
                        <h4 className="text-center mt-3" >Let's Choose Our <br /> Available Services</h4>
                    </div>
                    {
                        services.map(each => <ServiceCard key={each._id} serviceInfo={each} ></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;