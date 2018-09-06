import { Container, Row, Col } from "reactstrap";

import Section from "../Section";

export default ({ items = [] }) => (
  <Section>
    {/* <div className="hero"> */}
      <Container>
        { items.map(({title, content}, i) => <div key={i}>
          <h3>{i+1}. {title}</h3>
          <p>
            {content}
          </p>
        </div>)}
      </Container>
    {/* </div> */}
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
