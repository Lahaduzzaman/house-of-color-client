import React from 'react';
import { Badge } from 'react-bootstrap';
import projectChair from '../../../images/projectChair';
import projectFurniture from '../../../images/projectFurniture';
import projectInterior from '../../../images/projectInterior';
import projectSpray from '../../../images/projectSpray';
import projectWall from '../../../images/projectWall';
import ProjectCard from './ProjectCard/ProjectCard';

const projectList = [
    {
        projectImg: projectSpray,
        projectName: "Exterior Painting",
        projectLocation: "Dhaka, Bangladesh"
    },
    {
        projectImg: projectInterior,
        projectName: "Interior Painting",
        projectLocation: "Chittagong, Bangladesh"
    },
    {
        projectImg: projectWall,
        projectName: "Wall Painting",
        projectLocation: "Khulna, Bangladesh"
    },
    {
        projectImg: projectFurniture,
        projectName: "Furniture Painting",
        projectLocation: "Dhaka, Bangladesh"
    },
    {
        projectImg: projectChair,
        projectName: "Chair Painting",
        projectLocation: "Sylhet, Bangladesh"
    }
]

const Projects = () => {
    return (
        <section className="mt-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5" > <h3 className="text-center" ><Badge variant="danger" pill >Projects</Badge></h3> </div>
                    <div className="col-12 mb-5" >
                        <h1 className="text-center mt-3" >Take A Look <br /> Our Latest Project</h1>
                    </div>
                    {
                        projectList.map(each => <ProjectCard projectInfo={each} ></ProjectCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;