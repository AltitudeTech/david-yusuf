import { Container, Row, Col } from "reactstrap";

import Section from "../Section";

const list = [
  'Why talents?',
  'How can we discover our God given talents?',
  'How can we develop those talents?',
  'What if we have problems discovering those talents?',
]

export default () => (
  <Section>
    <div className="hero">
      <Container>
        <Row>
          <Col md={12}>
            <h2>My Latest Blog</h2>
            <p>
              Every human being is created in God’s own image, and uniquely blessed with talent(s). This fundamental
              biblical truth has no racial or tribal limitations. Safe to say, that whatever talent we are blessed with has
              eternal purpose and for our destiny, in God’s own making.
            </p>
            {list.map((item, i)=><p key={i}>{item}</p>)}
          </Col>
        </Row>
      </Container>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        text-align:center ;
      }
    `}</style>
  </Section>
);
