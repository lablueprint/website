import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {

    let projectLink = "/projects/" + props.projectLink;

    return (
        <a style={{textDecoration: "none"}} href={projectLink}>
            <Card style={cardStyle} >
                <Card.Img variant="top" src={props.projectImg} />
                <Card.Body>
                    <Card.Title>{props.projectTitle}</Card.Title>
                    <Card.Text style={{color: "#505050"}}>
                        {props.projectDescription}
                    </Card.Text>
                </Card.Body>
                <Link className="nav-link" to={projectLink}>Learn More</Link>
            </Card>
        </a>
    )
}

const cardStyle = {
    color: "black",
    marginBottom: "40px",
    padding: "20px 20px",
    border: "none",
    cursor: "pointer",
    background: "#F8F8F8",
  }