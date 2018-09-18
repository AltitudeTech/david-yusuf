import { Container, Row, Col } from "reactstrap";

import Section from "../Section";

export default ({ experience : {
  logo,
  name,
  url,
  subText,
  description
  }
}) => (
  <Section>
    <div className="hero">
      <Container>
        <Row>
          {/* <Col md={2}>
          </Col> */}
          <Col md={12}>
            <img src={logo} width="180px"/>
            <h2 className="mb-0">Lorem ipsum dolor sit amet consectetur</h2>
            <small style={{color: 'gold'}}>{subText}</small>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
    `}</style>
  </Section>
);
