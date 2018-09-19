import { Container } from "reactstrap";

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
          <h2 className="mb-1"
            // style={{color: 'gold'}}
            >{subText}</h2>
        <div>
          <img className="c-logo" src={logo} width="180px"/>
          <p className="mt-3">{description}</p>
        </div>
      </Container>
    </div>
    <style jsx>{`
      .c-logo {
        float: left;
        margin-right: 20px;
      }
      .hero {
        width: 100%;
        color: #333;
      }
    `}</style>
  </Section>
);
