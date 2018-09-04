import { Fragment } from 'react'
import Button from './Button'

export default ({showHome = false}) => <div className="post-error">
  <h3>ERROR</h3>
  <div>I'm sorry but it looks like we cannot load the blog at this time.</div>
  { showHome && <Fragment>
    <br/>
    <br/>
    <Button text={'Go Home'} dark/>
  </Fragment> }
  <style jsx>{`
    .post-error {
      text-align: center;
      // width: 100%;
      ${showHome ? 'min-height: 180px;' : ''}
      // margin: 100px auto;
      // background-color: black;
      // background-color: #DAA520;

      // border-radius: 100%;
      // -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
      // animation: sk-scaleout 1.0s infinite ease-in-out;
    }

    // @-webkit-keyframes sk-scaleout {
    //   0% { -webkit-transform: scale(0) }
    //   100% {
    //     -webkit-transform: scale(1.0);
    //     opacity: 0;
    //   }
    // }
    //
    // @keyframes sk-scaleout {
    //   0% {
    //     -webkit-transform: scale(0);
    //     transform: scale(0);
    //   } 100% {
    //     -webkit-transform: scale(1.0);
    //     transform: scale(1.0);
    //     opacity: 0;
    //   }
    }
  `}</style>
</div>
