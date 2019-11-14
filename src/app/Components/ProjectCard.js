import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import ptv from '../../images/projects/ptv.jpg'

export default function ProjectCard(props) {

    let projectLink = "/projects/" + props.projectLink;

    return (
        <Card style={cardStyle}>
            <Card.Img variant="top" src={ptv} />
            <Card.Body>
                <Card.Title>{props.projectTitle}</Card.Title>
                <Card.Text>
                    {props.projectDescription}
                </Card.Text>
            </Card.Body>
            <Link className="nav-link" to={projectLink}>Learn More</Link>
        </Card>
    )
}

const cardStyle = {
    marginBottom: "40px",
    padding: "0 20px",
    width: "33.333%",
    border: "none"
  }