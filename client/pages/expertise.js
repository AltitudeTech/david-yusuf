import React, { Fragment } from "react";
import {Container} from "reactstrap";
import Layout from "../components/Layout";
import BlankSection from "../components/Home/BlankSection";
import MediaFullwidth from "../components/Home/MediaFullwidth";
import ContactForm from "../components/ContactForm";

const expertise = (<div className="bg-home page-header">
                        <Container>
                            <h2>Expertise</h2>
                        </Container>
                    <style jsx>{`
                        .bg-home {
                            background-image:url('/static/images/home-background.svg') ;
                            height: 85vh;
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
                            background-color: black;
                            background-size: cover;
                            background-position: center center;
                          }
                          h2{
                            color : #fff ;
                            text-transform: uppercase ;
                            margin-top : 250px ;
                            font-weight : bold ;
                            margin-bottom : 0 ;
                            font-size : 4em ;
                          }
                    `}
                    </style>
                    </div>) ;

const Expertise = () => (
  <Fragment>
    <Layout header={expertise}>
      <MediaFullwidth />
      <ContactForm showHeader/>
      {/* <BlankSection /> */}
    </Layout>
  </Fragment>
);

export default Expertise;
