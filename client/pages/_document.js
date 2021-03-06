import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta charSet="utf-8"/>
          <meta name="description" content=""/>
          <meta name="keywords" content=""/>

          <link rel='stylesheet' type='text/css' href='/static/css/bootstrap.min.css' />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
          <link
            rel='stylesheet'
            href='/_next/static/style.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          *{
            box-sizing : border-box ;
            font-family: 'Montserrat', sans-serif !important;
          }
          a {
            color: white !important;
            text-decoration: none !important;
            transition: color .15s ease-out;
          }
          a:hover {
            color: #DAA520 !important;
          }
          .menu-active {
            color: #DAA520 !important;
          }
          `}</style>
      </html>
    )
  }
}
