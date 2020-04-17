import Layout from "../components/Layout";
import SignupComponent from "../components/signupComponent";

const Signup = () => {
  return (
    <Layout>
      <h1>Signup Page</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 align-self-center">
          <SignupComponent></SignupComponent>
        </div>
      </div>
    </Layout>
  );
};
export default Signup;
