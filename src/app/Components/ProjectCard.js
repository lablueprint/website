import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cardStyle = {
  color: 'black',
  marginBottom: '40px',
  padding: '20px 20px',
  border: 'none',
  cursor: 'pointer',
  background: '#F8F8F8',
};

export default function ProjectCard({
  link, image, title, desc,
}) {
  // let projectLink = "/projects/" + props.projectLink;

  return (
    <a style={{ textDecoration: 'none' }} href={link}>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ color: '#505050' }}>
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
