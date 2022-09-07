import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from '../theme/ChakraTheme'
import React from 'react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='es'>
        <Head>
          <title>State Management Sandbox</title>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
