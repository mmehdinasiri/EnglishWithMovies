import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useState } from "react";

const SignupComponent = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;
  const updateValues = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.table(values);
  };
  const signupForm = () => {
    return (
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="name">Email</Label>
          <Input
            value={name}
            type="name"
            name="name"
            onChange={updateValues("name")}
            id="name"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            value={email}
            type="email"
            name="email"
            onChange={updateValues("email")}
            id="email"
            placeholder="example@gmail.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            value={password}
            type="password"
            name="password"
            onChange={updateValues("password")}
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  };
  return <>{signupForm()}</>;
};

export default SignupComponent;
