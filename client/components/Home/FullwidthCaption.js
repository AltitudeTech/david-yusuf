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
            <h1 className="title">My Latest Blog</h1>
            <h3 className="desc">
              Every human being is created in God’s own image, and uniquely blessed with talent(s). This fundamental
              biblical truth has no racial or tribal limitations. Safe to say, that whatever talent we are blessed with has
              eternal purpose and for our destiny, in God’s own making.
            </h3>
            {list.map((item, i)=><h3
               key={i}
               className="list-item"
               >
              {item}
            </h3>)}
          </Col>
        </Row>
      </Container>
    </div>
    <style jsx>{`
      .title {
        text-align:center;
        padding-bottom: 20px;
      }
      .desc {
        padding-bottom: 20px;
      }
      .list-item::before {
        content : " ♦ ";
        // content : " \u3009";
        font-weight : bolder ;
        color : #DAA520 ;
      }
      .list-item {
        text-align: left;
      }
      .hero {
        width: 100%;
        color: #333;
        text-align:left ;
      }
    `}</style>
  </Section>
);
