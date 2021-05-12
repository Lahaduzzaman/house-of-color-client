import React from 'react';
import { Badge } from 'react-bootstrap';
import Progress from './Progress';

const skillInfo = [
    {
        perchant: 87,
        name: 'Residential Painting',
        pathColor: '#E30032'
    },
    {
        perchant: 84,
        name: 'Exterior Painting',
        pathColor: '#2F80CD'
    },
    {
        perchant: 89,
        name: 'Interior Painting',
        pathColor: '#8C00C6'
    },
    {
        perchant: 67,
        name: 'Others Painting',
        pathColor: '#4EBDC5'
    }
]

const About = () => {
    return (
        <section className="my-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5" > <h3 className="text-center" ><Badge variant="danger" pill >About us</Badge></h3> </div>
                    <div className="col-12 mb-5" >
                        <h1 className="text-center mt-3" >We Are Professioanal <br />Painting Services</h1>
                    </div>
                    {
                        skillInfo.map(each => <Progress perchantage={each} ></Progress>)
                    }
                </div>
            </div>
        </section>
    );
};

export default About;