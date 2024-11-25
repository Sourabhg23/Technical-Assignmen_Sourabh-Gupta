import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Card } from 'react-bootstrap';

function AddProjectForm({ onSubmit }) {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title className="text-center mb-4">Add a New Project</Card.Title>
        <Formik
          initialValues={{
            name: '',
            description: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Project name is required'),
            description: Yup.string().max(
              200,
              'Description must be less than 200 characters'
            ),
          })}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Project Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter project name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <Field
                  id="description"
                  name="description"
                  as="textarea"
                  className="form-control"
                  placeholder="Enter project description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                >
                  Add Project
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}

export default AddProjectForm;
