import Layout from "../components/Layout";
import SignupComponent from "../components/signupComponent";

const Signup = () => {
  return (
    <Layout>
      <div className="row justify-content-center">
        <h2 className="col-12  text-center">Signup</h2>
        <div className="col-md-6 col-xs-12 align-self-center">
          <SignupComponent></SignupComponent>
        </div>
      </div>
    </Layout>
  );
};
export default Signup;
