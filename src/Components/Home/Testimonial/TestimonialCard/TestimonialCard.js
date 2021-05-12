import React from 'react';
import { Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const TestimonialCard = ({ testimonialInfo }) => {
    const { name, post, review, photo, rating } = testimonialInfo
    return (
        <div className="col-md-4 d-flex justify-content-center mb-5">
            <Card border="light" className="shadow" style={{ width: '18rem' }}>
                <div className="row mt-3" >
                    <div className="col-4 text-right">
                        <img style={{ width: "50px" }} src={photo} alt="" />
                    </div>
                    <div className="col-8 text-left" >
                        <h6>{name}</h6>
                        <small>{post}</small>
                    </div>
                </div>
                <Card.Body>
                    <Card.Text>
                        {review}
                    </Card.Text>
                    <StarRatings
                        rating={Number(rating)}
                        starDimension="25px"
                        starSpacing="5px"
                        starRatedColor="#FFAC0C"
                    />
                </Card.Body>
            </Card>
        </div>
    );
};

export default TestimonialCard;