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
      <div className="bg-home page-header">
        <div className="header-container">
          <div className="video-container">
            <video
              preload="true"
              autoPlay="autoplay"
              loop="loop"
              volume="0"
              poster="/static/images/home-background.svg"
            >
              <source src="/static/video/davidyusuf.mp4" type="video/mp4" />
              <source src="/static/video/davidyusuf.webm" type="video/webm" />
              <source src="/static/video/davidyusuf.ogg" type="video/ogg" />
            </video>
          </div>
        </div>
      </div>
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
      .bg-home {
        height: 75vh;
        width: 100%;
      }
      .page-header {
        margin: 0;
        border: 0;
        display: flex;
        padding: 0;
        overflow: hidden;
        position: relative;
        // max-height: 1000px;
        align-items: center;
        background-size: cover;
        background-position: center center;
      }
      .header-container {
        width: 100%;
        height: 650px;
        border-left: none;
        border-right: none;
        position: relative;
        padding: 20px;
      }

      .video-container {
        position: absolute;
        top: 0%;
        left: 0%;
        height: 100%;
        width: 100%;
        overflow: hidden;
      }

      video {
        position: absolute;
        z-index: -1;
        opacity: 1;
        width: 100%;
      }
    `}</style>
  </Fragment>
);
