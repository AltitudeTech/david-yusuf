import { Fragment } from 'react'

export default () => {
  return <Fragment>
    <div className='post-item'>
      <div className='post-image'>

      </div>
      <div className="post-details">
        <div className='post-title'>Lorem ipsum dolor sit amet</div>
        <small className='text-muted'>Lorem ipsum - Jan 28, 2018</small>
      </div>
    </div>
    <style jsx>{`
      .post-image {
        height: 250px;
        background-color: gray;
        opacity: 1 !important;
        -webkit-transition: opacity .3s ease-out;
        -moz-transition: opacity .3s ease-out;
        -ms-transition: opacity .3s ease-out;
        -o-transition: opacity .3s ease-out;
        transition: opacity .3s ease-out;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
      }
      .post-image:hover {
        opacity: .5 !important;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
      }
      .post-item {
        height: 350px;
        background-color: white;
      }
      .post-title {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;
      }
      .post-details {
        padding-top: 10px;
      }
      .text-muted {
        color: rgba(26,26,26,.75);
      }
      a {
        text-decoration: none;
        -webkit-transition: 0.1s background-color linear, 0.1s color linear;
        -moz-transition: 0.1s background-color linear, 0.1s color linear;
        -o-transition: 0.1s background-color linear, 0.1s color linear;
        transition: 0.1s background-color linear, 0.1s color linear;
      }
      a:hover{
        // color:  !important;
        // background-color:  !important;
      }
    `}</style>
  </Fragment>
}
