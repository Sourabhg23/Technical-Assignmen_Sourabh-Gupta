import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

function ProjectList({ projects }) {
  return (
    <>
    <div className=''></div>
    <div className="project-list">
      
      <Row className="g-4">
        {projects.map((project) => (
          <Col key={project.id} >
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                  {project.description.length > 100
                    ? `${project.description.substring(0, 100)}...`
                    : project.description}
                </Card.Text>
                <Button as={Link} to={`/project/${project.id}`} variant="primary">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </>
  );
}

export default ProjectList;
