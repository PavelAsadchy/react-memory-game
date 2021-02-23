import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export const Login = ({ handleName }) => {
  const [state, setState] = useState({
    name: '',
    valid: false,
  });
  const [warn, setWarn] = useState(false);

  const validateName = (name) => !!name;

  const handleChange = (e) => {
    const valid = validateName(e.target.value);
    if (valid) {
      setState({
        ...state,
        name: e.target.value,
        valid: valid,
      });
      setWarn(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!state.valid) {
      setWarn(true);
      return;
    };

    handleName(state.name);
  }

  return (
    <div className="login-wrapper">
      <Form
        noValidate
        validated={state.validated}
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Label>Enter Your Name:</Form.Label>
          <Form.Row>
            <Col xs="auto">
              <Form.Control
                className="login"
                type="text"
                placeholder="Your Nickname"
                onChange={handleChange}
                required
              />
            </Col>
            <Col xs="auto">
              <Button
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Form.Row>
          <Form.Control.Feedback type="invalid" style={warn ? {display: "block"} : {display: "none"}}>
            Please, choose a username
          </Form.Control.Feedback>
        </Form.Group>
        
      </Form>
    </div>
  );
};
