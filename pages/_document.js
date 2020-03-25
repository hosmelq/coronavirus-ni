import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import {dom} from '@fortawesome/fontawesome-svg-core'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <style>{dom.css()}</style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
