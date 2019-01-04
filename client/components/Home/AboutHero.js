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
            <div className="hero-text">
              <div>
                {/* <h4 className="title">The person born with a talent they are meant to use will find their greatest happiness in using it</h4> */}
                <h4 className="title">The Person Born With A Talent They Are Meant To Use Will Find Their Greatest Happiness In Using It.</h4>
                <div className="author text-right">- Johann Wolfgang von Goethe</div>
                <br />
                {/* <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  repudiandae a nulla consequuntur dolore soluta deserunt itaque
                  voluptas, quae, sint, porro praesentium rerum quas dicta minus
                  earum modi tempore enim!
                </p> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    <style jsx>{`
      .author{
        font-size: 22px;
        width: 100%;
      }
      .hero {
        width: 100%;
        color: #333;
        margin-top: 50px;
      }
      .hero-text {
        display: flex;
        align-items: center;
        height: 100%;
      }
      .title {
        width: 100%;
        font-weight: bold;
        line-height: 1.15;
        font-size: 2.5em;
        text-align: left;
        // text-transform: uppercase;
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
