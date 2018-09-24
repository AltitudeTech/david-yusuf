import React, { Fragment } from "react";
import Layout from "../components/Layout";
import AboutHero from "../components/Home/AboutHero";
import FullwidthSection from "../components/Home/FullwidthSection";
import ContactForm from "../components/ContactForm";
// import BlankSection from "../components/Home/BlankSection";

const experience = [
  {
    logo: '/static/images/about/hc-logo.svg',
    name: 'Humares Capital',
    url: 'Humares Capital',
    subText: 'President and CEO',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum`,
  },
  {
    logo: '/static/images/about/bm-logo.svg',
    name: 'Blue Mountain',
    url: 'Blue Mountain',
    subText: 'Managing Partner',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum`,
  },
]

const Home = () => (
  <Fragment>
    <Layout about="logo2">
      <AboutHero />
      {experience.map((exp, i)=> <FullwidthSection key={i} experience={exp}/>)}
      <ContactForm showHeader/>
      {/* <BlankSection /> */}
    </Layout>
  </Fragment>
);

export default Home;
