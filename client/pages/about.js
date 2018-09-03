import React, { Fragment } from "react";
import Layout from "../components/Layout";
import AboutHero from "../components/Home/AboutHero";
import FullwidthSection from "../components/Home/FullwidthSection";
import BlankSection from "../components/Home/BlankSection";


const Home = () => (
  <Fragment>
    <Layout about="logo2">
      <AboutHero />
      <FullwidthSection />
      <FullwidthSection />
      <FullwidthSection />
      <BlankSection />
    </Layout>
  </Fragment>
);

export default Home;
