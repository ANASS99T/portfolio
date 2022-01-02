import '../styles/globals.css'
// import { ThemeProvider } from 'theme-ui'
// import theme from '../theme'
// // import 'bootstrap/dist/css/bootstrap.css'
// // import 'bootstrap/dist/js/bootstrap.bundle.js'
// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   )
// }

// export default MyApp

import * as React from 'react';
import Script from 'next/script'

import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import myTheme from "./src/theme";
import createEmotionCache from './src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={myTheme}>
        <Script
          src="src/particles.js"
          strategy="afterInteractive"
        // onLoad={() => { console.log('Particles script loaded successfully'); }}
        />
        <Script
          src="src/js/app.js"
          strategy="afterInteractive"
        // onLoad={() => { console.log('app script loaded successfully'); }}
        />
        <Script
          src="src/js/lib/stats.js"
          strategy="afterInteractive"
          onLoad={() => {
            // console.log('Stats script loaded successfully');
          }}
        />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};