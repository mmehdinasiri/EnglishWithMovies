import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import { signin, authentication } from "../actions/auth";

const SigninComponent = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });
  const router = useRouter();

  const { email, password, error, loading, message, showForm } = values;
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
    const user = { email, password };
    signin(user).then((response) => {
      if (response.error) {
        setValues({ ...values, error: response.error, loading: false });
      } else {
        authentication(response, () => {
          router.push("/");
        });
      }
    });
  };
  const signupForm = () => {
    return (
      <Form onSubmit={submitForm}>
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
      {showForm && signupForm()}
      {showLoading()}
      {showError()}
      {showMessage()}
    </>
  );
};

export default SigninComponent;
