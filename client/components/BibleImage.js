import React, { Fragment } from "react";
import SvgLoader from 'bv-react-svgloader'

export default () => (
  <Fragment>
    <SvgLoader src={'/static/images/bible.svg'} className="bible-image"/>
    <style jsx global>{`
      .bible-image {
        width: 70px;
        height: 70px;
        -webkit-animation: action 1s infinite  alternate;
        animation: action 1s infinite  alternate;
      }
      @-webkit-keyframes action {
        0% { transform: translateY(0); }
        100% { transform: translateY(-10px); }
      }
      @keyframes action {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
      }
    `}</style>
  </Fragment>
)
