import React, { Fragment } from "react";
// import Link from "next/link";



// import Head from '../components/head'
import Layout from "../components/Layout";
import HeroSection from "../components/Home/HeroSection";
import HireMeSection from "../components/Home/HireMeSection";
import BlogSection from "../components/Home/BlogSection";
import BlankSection from "../components/Home/BlankSection";
import { Container, Row, Col } from "reactstrap";


const about = (<div className="bg-home page-header">
                <div className="header-container">
                  <div className="video-container">
                      <Col md={4}>

                      </Col>
                      <Col md={8}>
                      </Col>
                  </div>
                </div>
                <style jsx>{`
                  .header-container {
                    width: 100%;
                    height: 650px;
                    border-left: none;
                    border-right: none;
                    position: relative;
                    padding: 20px;
                  }
            
                  .video-container {
                    position: absolute;
                    top: 0%;
                    left: 0%;
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                  }
            
                  video {
                    position: absolute;
                    z-index: -1;
                    opacity: 1;
                    width: 100%;
                  }
                `}
                </style>
              </div>) ;


const Home = () => (
  <Fragment>
    <Layout header={about} about="logo">
      {/* <Head title="Home" /> */}
      {/* <Nav /> */}
      <HeroSection />
      <HireMeSection />
      <BlogSection />
      <BlankSection />
    </Layout>
  </Fragment>
);

export default Home;
