import { Container, Row, Col } from "reactstrap";

import Section from '../Section'
import SvgLoader from 'bv-react-svgloader'

export default () => (
  <Section>
    <Container>
      <div className="hero">
        <Row>
            <Col md={5}>
                <SvgLoader src="/static/images/about.svg" />
             </Col>
            <Col md={7}>
            <div className="text">
                <h2 className="title">My passions and personality</h2>
            </div>
            </Col>
        </Row>
      </div>
    </Container>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        margin-top : 50px ;
      }
      .hero .text {
        margin-top : 150px ;
      }
      .title {
        width: 100%;
        font-weight: bold ;
        line-height: 1.15;
        font-size:4em ;
        text-align: center;
      }
      .subtitle {
        width: 100%;
        line-height: 1.15;
        font-size: 2em ;
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
