import React from 'react';
import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProjectCard({
  link, image, title, desc,
}) {
  // let projectLink = "/projects/" + props.projectLink;

  return (
    <a href={link} className="project-card">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
        </Card.Body>
        {/* <Link className="nav-link" to={link}>Learn More</Link> */}
        <a href={link}>Learn More</a>
      </Card>
    </a>
  );
}

ProjectCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
