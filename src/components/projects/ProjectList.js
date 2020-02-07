import React from 'react';
import ProjectSummary from "./ProjectSummary";
import {Link} from "react-router-dom";

const ProjectList = ({projects}) => {
    return (
        <div className={"project-list section"}>
            {/* the reason we have projects && is to check whether there are projects existing*/}
            { projects && projects.map(project => {
                return (
                    //The Key should always be on the parent element
                    <Link to={'/project/'+project.id} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                );
            })}
        </div>
    );
};

export default ProjectList;
