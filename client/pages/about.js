import React, { Fragment } from "react";
import Layout from "../components/Layout";
import AboutHero from "../components/Home/AboutHero";
import AboutContent from "../components/AboutContent";
import FullwidthSection from "../components/Home/FullwidthSection";
import ContactForm from "../components/ContactForm";
// import BlankSection from "../components/Home/BlankSection";

const experience = [
  {
    logo: '/static/images/about/hc-logo.svg',
    name: 'Humares Capital',
    url: 'Humares Capital',
    subText: 'President and CEO',
    description: `is the leading Human Capital Development Company in Africa and Middle East,
    offering world class HR services to local and multinational corporations.
    We leverage latest HR technology, proven and excellent HR systems and brightest minds in global HR practices.
    We currently serve over 100 private sector firms and not-for-profit organizations,
    across 20 countries.`,
  },
  {
    logo: '/static/images/about/bm-logo.svg',
    name: 'Blue Mountain',
    url: 'Blue Mountain',
    subText: 'Managing Partner',
    description: `is the leading Executive Search consulting firm with stupendous ability to develop young leadership talents breaking into the C-suite.
    We undertake the most rigorous leadership assessment program on the market with up to 1000 leadership skills point to consider.
    Our leadership development program offers credible fast track opportunities for new and young leadership talents across multiple sectors of the economy.`,
  },
]

const Home = () => (
  <Fragment>
    <Layout about="logo2">
      <AboutHero />
      <AboutContent />
      {experience.map((exp, i)=> <FullwidthSection key={i} experience={exp}/>)}
      <ContactForm showHeader/>
      {/* <BlankSection /> */}
    </Layout>
  </Fragment>
);

export default Home;
