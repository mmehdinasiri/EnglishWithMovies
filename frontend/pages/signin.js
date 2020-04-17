import Layout from "../components/Layout";
import SinginComponent from "../components/SinginComponent";

const Signin = () => {
  return (
    <Layout>
      <div className="row justify-content-center">
        <h2 className="col-12  text-center">Signin</h2>
        <div className="col-md-6 col-xs-12 align-self-center">
          <SinginComponent></SinginComponent>
        </div>
      </div>
    </Layout>
  );
};
export default Signin;
