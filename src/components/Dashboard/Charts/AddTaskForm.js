import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AddTaskForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        state: 'To Do', // Default state
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('Task title is required'),
        description: Yup.string().max(500, 'Description must be less than 500 characters'),
        state: Yup.string().oneOf(['To Do', 'In Progress', 'Done'], 'Invalid state'),
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className="add-task-form">
          <div>
            <label htmlFor="title">Task Title</label>
            <Field id="title" name="title" placeholder="Enter task title" />
            <ErrorMessage name="title" component="div" className="error-message" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field
              id="description"
              name="description"
              as="textarea"
              placeholder="Enter task description"
            />
            <ErrorMessage name="description" component="div" className="error-message" />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <Field as="select" id="state" name="state">
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </Field>
            <ErrorMessage name="state" component="div" className="error-message" />
          </div>
          <button type="submit">Add Task</button>
        </Form>
      )}
    </Formik>
  );
}

export default AddTaskForm;
