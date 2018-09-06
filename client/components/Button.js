import { Fragment } from 'react'
import Link from 'next/link'

export default ({ text = '', dark = false, href}) => {
  let color = '#fff';
  let borderColor = '#fff';
  let backgroundColor = 'transparent';
  let hoverColor = '#1d1d1d';
  let hoverBackgroundColor = '#fff';
  if (dark) {
    color = '#1d1d1d';
    borderColor = '#1d1d1d';
    hoverColor = '#fff';
    hoverBackgroundColor = '#1d1d1d';
  }
  return <Fragment>
    <Link href={href}>
      <a>{text}</a>
    </Link>
    <style jsx>{`
      a {
        border-color: ${borderColor} !important;
        color: ${color} !important;
        background-color: ${backgroundColor} !important;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        -webkit-appearance: none;
        font-size: 15px;
        font-weight: 600;
        font-style: normal;
        text-transform: uppercase;
        letter-spacing: .1em;
        padding: 21px 34px;
        border-width: 2px;
        border-style: solid;
        -webkit-transition: 0.1s background-color linear, 0.1s color linear;
        -moz-transition: 0.1s background-color linear, 0.1s color linear;
        -o-transition: 0.1s background-color linear, 0.1s color linear;
        transition: 0.1s background-color linear, 0.1s color linear;
      }
      a:hover{
        color: ${hoverColor} !important;
        background-color: ${hoverBackgroundColor} !important;
      }
      a::after{
        content : " \u3009"  ;
        font-weight : bolder ;
        color : #DAA520 ;
      }
    `}</style>
  </Fragment>
}
