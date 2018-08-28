import { Fragment } from 'react'
import { Container } from 'reactstrap'
import Navbar from './Navbar'
import Footer from './Footer'
// import SvgLoader from 'bv-react-svgloader'

export default props => (
  <Fragment>
    <div className="header-wrapper">
      <div className="navbar-wrapper">
        <Container>
          <Navbar/>
        </Container>
      </div>
      <div className='bg-home page-header'>

      </div>
    </div>
    {/* <SvgLoader src='/static/images/home-background.svg'/> */}
    {props.children}
    <Footer />
    <style jsx>{`
      .header-wrapper {
        position: relative;
      }
      .navbar-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10;
      }
      .bg-home {
        background-image: url(/static/images/home-background.svg);
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
    `}</style>
  </Fragment>
)
