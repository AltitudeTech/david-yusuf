import { Container, Row, Col } from "reactstrap";

import Section from "../Section";
import SvgLoader from "bv-react-svgloader";

export default () => (
  <Section>
    <Container>
        <Row>
          <Col md={6}>
            <p className="mt-3">
              Discover your true talent, nature and develop those talents(s), and rise to the top.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img height={250} src="/static/images/blocks.png" />
          </Col>
        </Row>
    </Container>
    <style jsx>{`
      .p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </Section>
);
