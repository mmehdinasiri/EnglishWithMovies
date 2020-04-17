import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
