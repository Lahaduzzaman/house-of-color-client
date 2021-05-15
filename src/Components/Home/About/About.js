import React from 'react';
import { Badge } from 'react-bootstrap';
import Progress from './Progress';


const skillInfo = [
    {
        perchant: 95,
        name: 'Interior Painting',
        pathColor: 'teal'
    },
    {
        perchant: 85,
        name: 'Exterior Painting',
        pathColor: 'yellow'
    },
    {
        perchant: 90,
        name: 'Residential Painting',
        pathColor: 'aqua'
    },
    {
        perchant: 65,
        name: 'Others Painting',
        pathColor: 'indigo'
    }
]

const About = () => {
    return (
        <section className="my-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5" > <h2 className="text-center" ><Badge variant="primary" pill >About Us</Badge></h2> </div>
                    <div className="col-12 mb-5" >
                        <h4 className="text-center mt-3" >We Are Professional <br />Painting Services</h4>
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