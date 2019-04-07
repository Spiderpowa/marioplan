import React from 'react';
import ProjectSummary from './ProjectSummary';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return (
          <Link to={'/project/' + project.id} key={project.id} >
            <ProjectSummary project={project} />
          </Link>
        )
      })}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  )
}

export default ProjectList