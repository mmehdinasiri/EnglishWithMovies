import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import { signup } from "../actions/auth";

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
  const router = useRouter();

  const { name, email, password, error, loading, message, showForm } = values;
  const updateValues = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };
  const showLoading = () =>
    loading ? <div className="alert alert-info">loading ...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-success">{message}</div> : "";
  const submitForm = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    const user = { name, email, password };
    signup(user).then((response) => {
      if (response.error) {
        setValues({ ...values, error: response.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          message: response.message,
          showForm: false,
          error: false,
          loading: false,
        });
        setTimeout(() => {
          router.push("/signin");
        }, 1000);
      }
    });
  };
  const signinForm = () => {
    return (
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="name">Name</Label>
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
        <Button className="mb-2">Submit</Button>
      </Form>
    );
  };
  return (
    <>
      {showForm && signinForm()}
      {showLoading()}
      {showError()}
      {showMessage()}
    </>
  );
};

export default SignupComponent;
