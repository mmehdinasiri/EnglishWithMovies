import Header from "../components/Header";
import Footer from "../components/Footer";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};
const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
