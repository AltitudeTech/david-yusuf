import { Container, Row, Col } from "reactstrap";

import Section from "../Section";
import SvgLoader from "bv-react-svgloader";

export default () => (
  <Section>
    <Container>
      <div className="hero">
        <Row>
          <Col md={5}>
            <SvgLoader src="/static/images/about.svg" />
          </Col>
          <Col md={7}>
            <div className="heroText">
              <h2 className="title">Lorem ipsum dolor sit</h2>
              <br />
              <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                repudiandae a nulla consequuntur dolore soluta deserunt itaque
                voluptas, quae, sint, porro praesentium rerum quas dicta minus
                earum modi tempore enim!
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        margin-top: 50px;
      }
      .heroText {
        text-align: center;
        margin-top: 50px;
      }
      .title {
        width: 100%;
        font-weight: bold;
        line-height: 1.15;
        font-size: 4em;
        text-align: center;
      }
      .subtitle {
        width: 100%;
        line-height: 1.15;
        font-size: 2em;
        text-align: center;
      }
      .p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </Section>
);
