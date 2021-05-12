import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ serviceInfo }) => {
    const { serviceName, serviceImg, serviceDesc, servicePrice, _id } = serviceInfo;
    return (
        <div className="col-md-4 d-flex justify-content-center mb-5">
            <Card as={Link} to={`dashboard/book/${_id}`} border="light" className="shadow" style={{ width: '18rem', textDecoration: 'none' }}>
                <Card.Title className="text-center text-danger py-4" >{serviceName}</Card.Title>
                <div className="text-center">
                    <Card.Img className="service-img" variant="top" style={{ width: '100px' }} src={serviceImg} />
                </div>
                <Card.Body>
                    <Card.Title className="text-danger" > $ {servicePrice} </Card.Title>
                    <Card.Text className="text-secondary" >
                        {serviceDesc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;