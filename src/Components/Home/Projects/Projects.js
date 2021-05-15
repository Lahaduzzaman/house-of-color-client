import React from 'react';
import { Badge } from 'react-bootstrap';
import ProjectCard from './ProjectCard/ProjectCard';
import projectExterior from '../../../images/projectExterior.png';
import projectInterior from '../../../images/projectInterior.png';
import projectFurniture from '../../../images/projectFurniture.png';
import projectChair from '../../../images/projectChair.png';
import projectWall from '../../../images/projectWall.png';


const projectList = [
    {
        projectImg: projectExterior,
        projectName: "Exterior Painting",
        projectLocation: "Dhaka, Bangladesh"
    },
    {
        projectImg: projectInterior,
        projectName: "Interior Painting",
        projectLocation: "Dinajpur, Bangladesh"
    },
    {
        projectImg: projectFurniture,
        projectName: "Furniture Painting",
        projectLocation: "Rajshahi, Bangladesh"
    },
    {
        projectImg: projectChair,
        projectName: "Chair Painting",
        projectLocation: "Rangpur, Bangladesh"
    },
    {
        projectImg: projectWall,
        projectName: "Wall Painting",
        projectLocation: "Chattogram, Bangladesh"
    }

]

const Projects = () => {
    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5" > <h2 className="text-center" ><Badge variant="primary" pill >Our Projects</Badge></h2> </div>
                    {
                        projectList.map(each => <ProjectCard projectInfo={each} ></ProjectCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;