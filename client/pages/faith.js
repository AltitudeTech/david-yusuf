import React, { Fragment } from "react";
import { Container } from "reactstrap";
import Layout from "../components/Layout";
import BlankSection from "../components/Home/BlankSection";
// import MediaFullwidth from "../components/Home/MediaFullwidth";
import FullwidthCaption from "../components/Home/FullwidthCaption";
import BlogGridSection from "../components/Home/BlogGridSection";
import BibleImage from "../components/BibleImage";


const faith = (
  <div className="bg-home page-header">
    <Container>
      <div className="title-wrapper">
        <BibleImage />
        <h2>FAITH</h2>
      </div>
    </Container>
    <style jsx>
      {`
        .title-wrapper {
          display: flex;
          padding-top: 250px;
        }
        .bg-home {
          background-image: url("/static/images/blog-banner.jpg");
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
          // margin-top: 250px;
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
      {/* <BlogGridSection />
      <BlogGridSection />
      <BlogGridSection /> */}
      <BlankSection />
    </Layout>
  </Fragment>
);

export default Faith;
