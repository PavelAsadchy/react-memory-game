import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    <div className="login">
      <Form
        noValidate
        validated={state.validated}
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Label>Enter Your Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Nickname"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid" style={warn ? {display: "block"} : {display: "none"}}>
            Please, choose a username
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
