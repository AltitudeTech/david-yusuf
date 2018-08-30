import React, { Fragment } from "react";
import { Container } from "reactstrap";
import Layout from "../components/Layout";
import BlankSection from "../components/Home/BlankSection";
import MediaFullwidth from "../components/Home/MediaFullwidth";
import FullwidthCaption from "../components/Home/FullwidthCaption";
import BlogSection from "../components/Home/BlogSection";
import BlogGridSection from "../components/Home/BlogGridSection";

const faith = (
  <div className="bg-home page-header">
    <Container>
      <h2>FAITH</h2>
    </Container>
    <style jsx>
      {`
        .bg-home {
          background-image: url("/static/images/faith.svg");
          height: 65vh;
          width: 100%;
        }
        .page-header {
          margin: 0;
          border: 0;
          display: flex;
          padding: 0;
          overflow: hidden;
          position: relative;
          align-items: center;
          background-size: cover;
          background-position: center center;
        }
        h2 {
          color: #000;
          text-transform: uppercase;
          margin-top: 250px;
          font-weight: bold;
          font-size: 4em;
        }
      `}
    </style>
  </div>
);

const Faith = () => (
  <Fragment>
    <Layout header={faith} about="logo2">
      <FullwidthCaption />
      <BlogGridSection />
      <BlogGridSection />
      <BlogGridSection />
      <BlogGridSection />
      <BlankSection />
    </Layout>
  </Fragment>
);

export default Faith;
