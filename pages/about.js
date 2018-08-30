import React, { Fragment } from "react";
import Layout from "../components/Layout";
import AboutHero from "../components/Home/AboutHero";
import FullwidthSection from "../components/Home/FullwidthSection";


const Home = () => (
  <Fragment>
    <Layout about="logo2">
      <AboutHero />
      <FullwidthSection />
    </Layout>
  </Fragment>
);

export default Home;
