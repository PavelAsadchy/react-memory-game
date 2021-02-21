import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Login = ({ handleName }) => {
  const [name, setName] = useState('');
  const [validated, setValidated] = useState(false);

  const validateName = (name) => !!name;

  const handleChange = (e) => {
    const valid = validateName(e.target.value);
    setName(e.target.value);
    setValidated(valid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!validated) {
      console.log('ggg')
      return
    };

    handleName(name);
  }

  return (
    <div className="login">
      <Form
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Group>
          <Form.Label>Enter Your Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Nickname"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid" style={validated ? {display: "none"} : {display: "block"}}>
            nooooooo
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
