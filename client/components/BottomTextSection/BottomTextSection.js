import Section from '../Section'
import { Container, Row, Col } from 'reactstrap';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
export default () => (
  <Section
    // backgroundColor='#f1f1f1'
    >
      <Container className="bt-section">
      <Row>
        <Col md={6}><p>{text}</p></Col>
        <Col md={6}><p>{text}</p></Col>
      </Row>
      </Container>
    {/* <style jsx>{`
      .bt-section {
        width: 100%;
        height: 50vh;
        margin: 0;
        border: 0;
        display: flex;
        padding: 0;
        overflow: hidden;
        position: relative;
        // align-items: center;
      }
      `}</style> */}
  </Section>
);
