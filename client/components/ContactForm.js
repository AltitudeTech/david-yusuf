import Section from './Section'

export default () => (
  <Section
    // backgroundColor='#f1f1f1'
    >
      <div className="hero">
        <h2 className="title">DROP US A LINE</h2>
      </div>
      <br />
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        width: 100%;
        font-weight : bold ;
        line-height: 1.15;
        font-size:3em ;
        text-align: center;
      }
    `}</style>
  </Section>
);
