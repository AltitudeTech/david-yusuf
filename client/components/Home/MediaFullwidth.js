import { Container, Row, Col } from "reactstrap";
import {
  FacebookShareButton,
  FacebookIcon,
  // GooglePlusShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

import Section from "../Section";

import expertise from '../../../expertise';
// client\static\images\share.svg

const PAGE_LINK = "http://david-yusuf.com/expertise";
export default () => (
  <Section>
    <div className="hero">
      <Container>
        {expertise.map((item, i)=>(
          <Row key={i}>
            <Col md={12}>
              <h2>{item.title}</h2>
            </Col>
            <Col md={4}>
              <div className="post-item">
                <img src={item.image}  width="350px" height="200px"/>
              </div>
            </Col>
            <Col md={8}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              {/* <a href="#"><img width="15px" src='/static/images/share.svg'/></a> */}
              {/* <a href="#">Share <img width="15px" src='/static/images/share.svg'/></a> */}
              <div className="e-share">
                <FacebookShareButton
                  url={PAGE_LINK}
                  quote={item.title}
                >
                  <FacebookIcon
                    size={32}
                  />
                </FacebookShareButton>
                <LinkedinShareButton
                  url={PAGE_LINK}
                  title={item.title}
                >
                  <LinkedinIcon
                    size={32}
                  />
                </LinkedinShareButton>
                <TwitterShareButton
                  url={PAGE_LINK}
                  title={item.title}
                >
                  <TwitterIcon
                    size={32}
                  />
                </TwitterShareButton>
                <WhatsappShareButton
                  url={PAGE_LINK}
                  title={item.title}
                >
                  <WhatsappIcon
                    size={32}
                  />
                </WhatsappShareButton>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
    <style jsx>{`
      .e-share {
        display: flex;
        float: right;
      }
      :global(.SocialMediaShareButton):focus{
        outline: none;
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .post-item img {
        border: 1px solid #cacaca;
      }
      .post-item {
        height: 250px;
        background-color: white;
      }
      a {
        color: #000 !important;
        background-color: #daa520;
        padding: 8px 15px;
        display: "block";
        bottom: 0;
        float: right;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
      }
    `}</style>
  </Section>
);
