import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/**
* @author Jean-Marc Cheynier
 * @param  {string} title
 * @param  {object} initialForm
 * @component
 * @example
 *  return (<DocumentedComponent/>)
 * 
 */
const DocumentedComponent = ({ title, initialForm, onSubmit }) => {
  
  const [form, setForm] = useState(initialForm)
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    form[name] = value;
    setForm({ ...form });
  }
  
  const handleOnSubmit = () => {
    onSubmit(form)
  }
  
  return (
    <Form className="bg-light p-3">
      <Form.Group>
        <Form.Label>Input Label</Form.Label>
        <Form.Control
          type="text"
          name="myInput"
          value={form.myInput}
          placeholder="Enter something"
          onChange={handleOnChange}/>
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleOnSubmit}>
        Submit <FontAwesomeIcon icon={faCheck}/>
      </Button>
    </Form>)
  
}

DocumentedComponent.propTypes = {
  title: PropTypes.string,
  initialForm: PropTypes.object,
  onSubmit: PropTypes.func
}

DocumentedComponent.defaultProps = {
  title: 'Default title',
  initialForm: {
    myInput: 'Initial Input'
  },
  onSubmit: form => alert(JSON.stringify(form))

}

export default DocumentedComponent;