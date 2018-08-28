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
          <link rel='stylesheet' type='text/css' href='/static/css/bootstrap.min.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          a {
            color: white !important;
            text-decoration: none !important;
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
