import React, { Fragment } from "react";
import { Container } from "reactstrap";
import Layout from "../components/Layout";
import BottomTextSection from "../components/BottomTextSection";
// import MediaFullwidth from "../components/Home/MediaFullwidth";
import FullwidthCaption from "../components/Home/FullwidthCaption";
import BlogGridSection from "../components/Home/BlogGridSection";
// import BibleImage from "../components/BibleImage";


const blog = (
  <div className="bg-home page-header">
    <Container>
      <div className="title-wrapper">
        {/* <BibleImage /> */}
        <h2>INSIGHT</h2>
      </div>
    </Container>
    <style jsx>
      {`
        .title-wrapper {
          display: flex;
          padding-top: 250px;
        }
        .bg-home {
          background-image: url("/static/images/blog-background.png");
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
    <Layout header={blog} about="logo2">
      <FullwidthCaption />
      <BlogGridSection />
      {/* <BlogGridSection />
      <BlogGridSection />
      <BlogGridSection /> */}
      <BottomTextSection />
    </Layout>
  </Fragment>
);

export default Faith;
