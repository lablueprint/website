import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link, useRouteMatch } from 'react-router-dom';

export default function ProjectCard(props) {
    let match = useRouteMatch();

    return (
        <a style={{textDecoration: "none"}} href={`${match.url}/${props.projectLink}`}>
            <Card style={cardStyle} >
                <Card.Img variant="top" src={props.projectImg} />
                <Card.Body>
                    <Card.Title>{props.projectTitle}</Card.Title>
                    <Card.Text style={{color: "#505050"}}>
                        {props.projectDescription}
                    </Card.Text>
                </Card.Body>
                <Link className="nav-link" to={`${match.url}/${props.projectLink}`}>Learn More</Link>
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