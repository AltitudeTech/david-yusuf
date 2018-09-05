import { Fragment } from 'react'
import Link from 'next/link'
import moment from 'moment'

export default props => {
  const { post : { title, publishedDate, categories, image, content, slug }, detailed = false } = props;
  return <Fragment>
    <div className='post-item'>
      <div className='post-image'></div>
      <div className="post-details">
        { detailed ?
          <Fragment>
            <small className='text-muted'>
              {moment(publishedDate).format('MMM Do YYYY')}
            </small>
            <div className='post-title'>{title}</div>
            <div className='post-brief' dangerouslySetInnerHTML={{__html: content.brief}}></div>
            {/* <br /> */}
            <Link href={`/blog/post`} as={`/blog/${slug}`}>
              <a className='read-more'>Read More</a>
            </Link>
          </Fragment> :
          <Fragment>
            <div className='post-title'>{title}</div>
            <small className='text-muted'>
              {categories.length > 1 && `${categories[0].name} - `}
              {moment(publishedDate).format('MMM Do YYYY')}
            </small>
          </Fragment>
        }
        {/* <small className='text-muted'>Lorem ipsum - Jan 28, 2018</small> */}
      </div>
    </div>
    <style jsx>{`
      .post-image {
        height: 250px;
        ${image ? `background-image: url('${image.url}');` : ''}
        background-size: cover;
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
        min-height: 350px;
        background-color: ${detailed ? 'transparent' : 'white' };
        margin-bottom: 30px;
      }
      .post-title {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;
        ${detailed ?
          'padding: 10px 0px;'
          :
          'padding: 0px 1px 0px;'
        }
      }
      .post-brief {
        margin-bottom: 10px;
        font-size: 14px;
      }
      .post-details {
        ${detailed ? 'text-align: left;' : '' }
        padding-top: 10px;
      }
      .text-muted {
        color: rgba(26,26,26,.75);
      }
      .read-more {
        color: #000 !important;
        // background-color: #daa520;
        padding: 8px 0px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
      }
      .read-more:hover{
        color: #daa520 !important;
      }
      .read-more::after{
        content : " \u3009"  ;
        font-weight : bolder ;
        color : #DAA520 ;
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
