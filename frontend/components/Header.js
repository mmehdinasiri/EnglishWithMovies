import Link from "next/link";
const linkStyle = {
  marginRight: 15,
};
const Header = () => {
  return (
    <React.Fragment>
      <Link href="/">
        <a style={linkStyle}>Home Page</a>
      </Link>
      <Link href="/signup">
        <a style={linkStyle}>Signup Page</a>
      </Link>
      <Link href="/signin">
        <a style={linkStyle}>signin Page</a>
      </Link>
    </React.Fragment>
  );
};

export default Header;
