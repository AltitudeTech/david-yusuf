import React, { Fragment } from "react";
import {Container} from "reactstrap";
// import Link from "next/link";



// import Head from '../components/head'
import Layout from "../components/Layout";
import HeroSection from "../components/Home/HeroSection";
import HireMeSection from "../components/Home/HireMeSection";
import BlogSection from "../components/Home/BlogSection";
import BlankSection from "../components/Home/BlankSection";

const contact = (<div className="bg-home page-header">
                    <Container>
                        <h2>Contact</h2>
                    </Container>
                    <style jsx>{`
                        .bg-home {
                            background-image:url('/static/images/contactbg.jpg') ;
                            background-size: contain ;
                            height: 75vh;
                            width: 100%;
                          }
                        .page-header {
                            margin: 0;
                            border: 0;
                            display: flex;
                            padding: 0;
                            overflow: hidden;
                            position: relative;
                            // max-height: 1000px;
                            align-items: center;
                            background-size: cover;
                            background-position: center center;
                          }
                          h2{
                            color : #fff ;
                            text-transform: uppercase ;
                            text-align: right ;
                            margin-top : 250px ;
                            margin-bottom : 0 ;
                            font-size : 4em ;
                          }
                    `}
                    </style>
                  </div>) ;

const Contact = () => (
  <Fragment>
    <Layout header={contact}>
      <HeroSection />
      <HireMeSection />
      <BlogSection />
      <BlankSection />
    </Layout>
  </Fragment>
);

export default Contact;
