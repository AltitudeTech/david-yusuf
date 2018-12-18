import { Container } from "reactstrap";

import Button from '../Button'
import Section from '../Section'

export default () => (
  <Section
    // backgroundImage='/static/images/hire-me-background.png'
    className='sect-filtered'
    >
    <div className="bg-hire-me hire-me-section">
      <Container>
        <div className="text">
          {/* <span>consectetur adipiscing elit, sed do eiusmod tempor</span> */}
          {/* <h1 className="title">Lorem ipsum dolor<br/> sit amet!</h1> */}
          <h3 className="title">“ Talent is a univeral gift, <br />But it takes a lot of courage to use it.
          <br/>Don't be afraid to be the best ”</h3>
          <div className="author text-right">- Paulo Coelho</div>
          <Button text='Contact Me Today' href="/contact"/>
        </div>
      </Container>
    </div>
    <style jsx>{`
      :global(.sect-filtered):hover {
        background-blend-mode: lighten;
      }
      :global(.sect-filtered) {
        background-image: linear-gradient(black, black), url(/static/images/hire-me-background.png);
        background-size: cover;
        background-blend-mode: saturation;
        transition: all 1s;
      }
      .author{
        font-size: 22px;
        width: 100%;
        padding-bottom: 70px;
      }
      .hero {
        width: 100%;
      }
      .text {
        margin: 0;
        width: 100%;
        text-align: center;
      }
      .title {
        line-height: 1.15;
        font-size: 40px;
        text-transform: capitalize;
      }
      .bg-hire-me {
        width: 100%;
        color: white;
      }
      .hire-me-section {
        height: 90vh;
        margin: 0;
        border: 0;
        display: flex;
        padding: 0;
        overflow: hidden;
        position: relative;
        align-items: center;
      }
      `}</style>
  </Section>
);
