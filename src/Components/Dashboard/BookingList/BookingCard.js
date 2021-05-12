import React from 'react';
import { Badge, Card } from 'react-bootstrap';

const BookingCard = ({ bookingInfo }) => {
    const { service, image, description, status, color } = bookingInfo;
    return (
        <div className="col-md-4 d-flex justify-content-center my-5">
            <Card border="light" className="shadow" style={{ width: '22rem' }}>
                <Card.Body>
                    <div className="d-flex justify-content-between" ><Card.Img variant="top" style={{ width: '80px' }} src={image} />
                        <div><h4><Badge variant={color} >{status}</Badge></h4></div>
                    </div>
                    <Card.Title className="text-danger" >{service}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookingCard;