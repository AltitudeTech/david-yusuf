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
            <h2 className="title">My Latest Blog</h2>
            <h4 className="desc">
              Every human being is created in God’s own image, and uniquely blessed with talent(s). This fundamental
              biblical truth has no racial or tribal limitations. Safe to say, that whatever talent we are blessed with has
              eternal purpose and for our destiny, in God’s own making.
            </h4>
            {list.map((item, i)=><h4
               key={i}
               className="list-item"
               >
              {item}
            </h4>)}
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
