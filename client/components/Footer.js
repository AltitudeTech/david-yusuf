import Link from 'next/link'
import { Container } from "reactstrap";
import SvgLoader from 'bv-react-svgloader'
import FooterYear from './FooterYear'

import links from '../routes'

const socialLinks = [
  {img: '/static/images/social/linked-in.svg', link: 'https://linkedin.com/'},
  {img: '/static/images/social/google-plus.svg', link: 'https://google-plus.com/'},
  {img: '/static/images/social/twitter.svg', link: 'https://twitter.com/'},
  {img: '/static/images/social/youtube.svg', link: 'https://youtube.com/'}
]
const bottomLinks = [
  {text: 'Terms of Service', href: '/terms-of-service'},
  {text: 'Privacy Policy', href: '/privacy-policy'},
]
export default () => {
  return <footer className='Footer'>
    <Container>
      <nav>
        <div className="Footer-nav-group">
          {links.map(({ key, href, label}) => (
            <Link href={href} key={key}>
              <a className="nav-item Footer-nav-item">{label}</a>
            </Link>
          ))}
        </div>
      </nav>
      <nav>
        <div className="Footer-nav-group">
          {socialLinks.map(({img, link}, i) => (
            <a href={link} key={i} className="social-item" target="_blank" rel='noreferrer noopener'>
              <SvgLoader src={img}/>
            </a>
          ))}
        </div>
      </nav>
      <p><FooterYear /> David Yusuf. All rights reserved. </p>
      <nav>
        {bottomLinks.map(({text, href}, i) => (
          <Link href={href} key={i}>
            <a className="nav-item">{text}</a>
          </Link>
        ))}
      </nav>
    </Container>
    <style jsx>{`
      nav{
        text-align: center;
        font-weight: 400;
        font-style: normal;
        font-size: 13px;
        letter-spacing: .15em;
        line-height: 1em;
        text-transform: uppercase;
        margin: 30px 0px
      }
      .Footer-nav-group {
        display: inline;
      }
      .nav-item {
        padding: .5em 1.2em;
        display: inline-block;
      }
      .social-item {
        padding: .5em 0.6em;
        display: inline-block;
      }
      .Footer-nav-item {
        color: #fff;
        text-decoration: none;
        -webkit-transition: color .15s ease-out;
        -moz-transition: color .15s ease-out;
        -ms-transition: color .15s ease-out;
        -o-transition: color .15s ease-out;
        transition: color .15s ease-out;
      }
      .Footer-nav-item:hover {
        color: rgba(255,255,255,.5);
      }
      .Footer {
        height: 60vh;
        padding: 60px 0px 60px;
        text-align: center;
        width: 100%;
        margin: 0;
        // border: 0;
        display: flex;
        // padding: 0;
        // overflow: hidden;
        // position: relative;
        align-items: center;
        color: #fff;
        background-color: #101010;
      }
      `}</style>
  </footer>
};
