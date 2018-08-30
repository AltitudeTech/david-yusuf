import { Fragment } from "react";
import { Container } from "reactstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import SvgLoader from 'bv-react-svgloader'
export default props => (
  <Fragment>
    <div className="header-wrapper">
      <div className="navbar-wrapper">
        <Container>
          <Navbar />
        </Container>
      </div>
      {props.header}
    </div>
    {/* <SvgLoader src='/static/images/home-background.svg'/> */}
    {props.children}
    <Footer />
    <style jsx>{`
      .header-wrapper {
        position: relative;
      }
      .navbar-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10;
      }
    `}</style>
  </Fragment>
);
