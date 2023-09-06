/* eslint-disable @next/next/no-title-in-document-head */

import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          // eslint-disable-next-line max-len
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />

        <meta content="Perfarm App" name="application-name" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
        <meta content="Perfarm App" name="apple-mobile-web-app-title" />
        <meta content="Gestão financeira e estratégica de fazendas." name="description" />
        <meta content="telephone=no" name="format-detection" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="#FDCC06" name="msapplication-TileColor" />
        <meta content="no" name="msapplication-tap-highlight" />
        <meta content="#43B874" name="theme-color" />

        <link href="/manifest.json" rel="manifest" />

        <meta content="website" property="og:type" />
        <meta content="Perfarm" property="og:title" />
        <meta content="Gestão financeira e estratégica de fazendas." property="og:description" />
        <meta content="Perfarm" property="og:site_name" />
        <meta content="https://www.perfarm.com/" property="og:url" />
        <meta content="https://www.perfarm.com/static/favicon/favicon-256.png" property="og:image" />

        <link color="#43b874" href="/static/favicon/favicon-mask.svg" rel="mask-icon" />
        <link href="/static/favicon/72xx72.png" rel="icon" sizes="72x72" type="image/png" />
        <link href="/static/favicon/96x96.png" rel="icon" sizes="96x96" type="image/png" />
        <link href="/static/favicon/120x120.png" rel="icon" sizes="120x120" type="image/png" />
        <link href="/static/favicon/128x128.png" rel="icon" sizes="128x128" type="image/png" />
        <link href="/static/favicon/144x144.png" rel="icon" sizes="144x144" type="image/png" />
        <link href="/static/favicon/152x152.png" rel="icon" sizes="152x152" type="image/png" />
        <link href="/static/favicon/180x180.png" rel="icon" sizes="180x180" type="image/png" />
        <link href="/static/favicon/192x192.png" rel="icon" sizes="192x192" type="image/png" />
        <link href="/static/favicon/384x384.png" rel="icon" sizes="384x384" type="image/png" />
        <link href="/static/favicon/512x512.png" rel="icon" sizes="512x512" type="image/png" />
        <link href="/static/favicon/512x512.png" rel="apple-touch-icon" />

        <link
          rel="apple-touch-startup-image"
          href="/static/splash/splash-640x1136.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/static/splash/splash-750x1294.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/static/splash/splash-1242x2148.png"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/static/splash/splash-1125x2436.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/static/splash/splash-1536x2048.png"
          media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/static/splash/splash-1668x2224.png"
          media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/static/splash/splash-2048x2732.png"
          media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />

        <title>Perfarm Experience</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          id="pwaEnableInstall"
          strategy="afterInteractive"
          type="text/javascript"
          src="/js/pwaEnableInstall.js"
        />
      </body>
    </Html>
  );
}
