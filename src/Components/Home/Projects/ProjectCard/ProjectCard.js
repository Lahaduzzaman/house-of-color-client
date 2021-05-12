import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = ({ projectInfo }) => {
    const { projectImg, projectName, projectLocation } = projectInfo;
    return (
        <div className="col-md-4 d-flex justify-content-center mb-5">
            <Card border="light" className="shadow contain" style={{ width: '18rem' }}>
                <div className="text-center">
                    <Card.Img className="image" variant="top" src={projectImg} />
                </div>
                <div className="overlay">
                    <div class="text">
                        <h5>{projectName}</h5>
                        <p>{projectLocation}</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProjectCard;