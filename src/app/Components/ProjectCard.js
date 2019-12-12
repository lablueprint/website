import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const cardStyle = {
  color: 'black',
  marginBottom: '40px',
  padding: '20px 20px',
  border: 'none',
  cursor: 'pointer',
  background: '#F8F8F8',
};

export default function ProjectCard(props) {
  // let projectLink = "/projects/" + props.projectLink;
  // eslint-disable-next-line object-curly-newline
  const { projectLink, projectImage, projectTitle, projectDescription } = props;

  return (
    <a style={{ textDecoration: 'none' }} href={projectLink}>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={projectImage} />
        <Card.Body>
          <Card.Title>{projectTitle}</Card.Title>
          <Card.Text style={{ color: '#505050' }}>
            {projectDescription}
          </Card.Text>
        </Card.Body>
        {/* <Link className="nav-link" to={projectLink}>Learn More</Link> */}
        <a href={projectLink}>Learn More</a>
      </Card>
    </a>
  );
}

ProjectCard.propTypes = {
  projectLink: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
};
