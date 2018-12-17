import React, { Fragment } from "react";
import {Container} from "reactstrap";
// import Link from "next/link";

// import Head from '../components/head'
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const contact = (<div className="bg-home page-header">
                    <Container>
                        <h2>DROP US A LINE</h2>
                    </Container>
                    <style jsx>{`
                        .bg-home {
                            background-image:url('/static/images/contact-background.png') ;
                            background-size: contain ;
                            height: 80vh;
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
                            color : black ;
                            text-transform: uppercase ;
                            text-align: left ;
                            font-weight : bold ;
                            margin-top : 350px ;
                            margin-bottom : 0 ;
                            font-size : 4em ;
                          }
                    `}
                    </style>
                  </div>) ;

const Contact = () => (
  <Fragment>
    <Layout header={contact}>
      <ContactForm />
    </Layout>
  </Fragment>
);

export default Contact;
