import { Container, Row, Col } from "reactstrap";
import SvgLoader from 'bv-react-svgloader'

import Section from "../Section";

import expertise from '../../../expertise';
// client\static\images\share.svg

export default () => (
  <Section>
    <div className="hero">
      <Container>
        {expertise.map((item, i)=>(
          <Row key={i}>
            <Col md={12}>
              <h2>{item.title}</h2>
            </Col>
            <Col md={4}>
              <div className="post-item">
                <img src={item.image}  width="350px" height="200px"/>
                {/* <div className="post-image" /> */}
              </div>
            </Col>
            <Col md={8}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              {/* <a href="#"><img width="15px" src='/static/images/share.svg'/></a> */}
              <a href="#">Share <img width="15px" src='/static/images/share.svg'/></a>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .post-item img {
        border: 1px solid #cacaca;
      }
      // .post-image {
      //   height: 200px;
      //   background-color: gray;
      //   opacity: 1 !important;
      //   -webkit-transition: opacity 0.3s ease-out;
      //   -moz-transition: opacity 0.3s ease-out;
      //   -ms-transition: opacity 0.3s ease-out;
      //   -o-transition: opacity 0.3s ease-out;
      //   transition: opacity 0.3s ease-out;
      //   -webkit-backface-visibility: hidden;
      //   backface-visibility: hidden;
      //   -webkit-transform-style: preserve-3d;
      // }
      .post-image:hover {
        opacity: 0.5 !important;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
      }
      .post-item {
        height: 250px;
        background-color: white;
      }
      a {
        color: #000 !important;
        background-color: #daa520;
        padding: 8px 15px;
        display: "block";
        bottom: 0;
        float: right;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
      }
    `}</style>
  </Section>
);
