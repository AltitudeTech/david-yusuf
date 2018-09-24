import { Container, Row, Col } from "reactstrap";

import Section from '../Section'

export default () => (
  <Section>
    <Container>
      {/* <div className="hero">
        <h2 className="title">MY TALENT IS A</h2>
        <h3 className="subtitle">GIFT FROM GOD</h3>
      </div>
      <br /> */}
      <Row>
        <Col md={6} className="text-center tal">
          <h3>Lorem Ipsum dolor sit amit</h3>
          <img src="/static/images/home1.jpg"/>
        </Col>
        <Col md={6} className="text-center tal">
          <h3>Lorem Ipsum dolor sit amit</h3>
          <img src="/static/images/home2.jpg"/>
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      :global(.tal):hover img {
        filter: grayscale(0%);
      }
      :global(.tal) img {
        filter: grayscale(100%);
        transition: all 1s;
        height: 350px;
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
