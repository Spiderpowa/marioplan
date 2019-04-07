import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by the {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

ProjectSummary.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  })
}

export default ProjectSummary