import Head from 'next/head'
import React from 'react'
import {CSSReset, ThemeProvider} from '@chakra-ui/core'

import '../icons'
import customTheme from '../customTheme'
import GlobalCSS from '../GlobalCSS'

export default function App({Component, pageProps}) {
  return (
    <ThemeProvider theme={customTheme}>
      <Head>
        <title>Coronavirus Nicaragua</title>
        <meta
          name="description"
          content="Estadísticas sobre el estado del Coronavirus (COVID-19) en Nicaragua."
        />
        <meta name="theme-color" content="#6875f5" />

        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:image" content="https://coronavirus-ni.com/og.png" />
        <meta property="og:locale" content="es" />
        <meta property="og:site_name" content="Coronavirus Nicaragua" />
        <meta property="og:title" content="Coronavirus Nicaragua" />
        <meta
          property="og:description"
          content="Estadísticas sobre el estado del Coronavirus (COVID-19) en Nicaragua."
        />

        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/images/apple-touch-icon.png"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>

      <CSSReset />
      <GlobalCSS />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
