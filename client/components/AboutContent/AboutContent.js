import { Container, Row, Col } from "reactstrap";

import Section from "../Section";
// import SvgLoader from "bv-react-svgloader";

export default () => (
  <Section>
    <Container>
        <Row>
          <Col md={6}>
            <p className="content">
              Discover your true talent, nature and develop those talent(s), and rise to the top.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img height={250} src="/static/images/blocks.png" />
          </Col>
        </Row>
    </Container>
    <style jsx>{`
      .content {
        font-size: 1.25rem;
      }
    `}</style>
  </Section>
);
