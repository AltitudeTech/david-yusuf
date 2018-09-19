import { Fragment } from "react";
import { Container } from "reactstrap";
import { withRouter } from "next/router";

import Navbar from "./Navbar";
import Footer from "./Footer";
// import SvgLoader from 'bv-react-svgloader'

const darkmenu = props => {
  const { router : { pathname } } = props;
  if ( pathname === '/about' || pathname === '/faith' || pathname === '/contact'
  || pathname === '/privacy-policy' || pathname === '/terms-of-service' ) {
    return "dark-wrapper";
  }
  return '';
}

export default withRouter(props => (
  <Fragment>
    <div className="header-wrapper">
      <div className={`navbar-wrapper ${darkmenu(props)}`}>
        <Container>
          <Navbar about={props.about} />
        </Container>
      </div>
      {props.header}
    </div>
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
      .dark-wrapper{
        background-color: rgba(0, 0, 0, 0.46);
      }
    `}</style>
  </Fragment>
));
