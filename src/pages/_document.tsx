/* eslint-disable @next/next/no-title-in-document-head */

import { Head, Html, Main, NextScript } from 'next/document';

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
        <link href="/static/favicon/favicon.svg" rel="icon" />
        <link href="/static/favicon/favicon-16.png" rel="icon" type="image/png" />
        <link href="/static/favicon/favicon-32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/static/favicon/favicon-48.png" rel="icon" sizes="48x48" type="image/png" />
        <link href="/static/favicon/favicon-62.png" rel="icon" sizes="62x62" type="image/png" />
        <link href="/static/favicon/favicon-192.png" rel="icon" sizes="192x192" type="image/png" />
        <link href="/static/favicon/favicon-200.png" rel="icon" sizes="200x200" type="image/png" />
        <link href="/static/favicon/favicon-256.png" rel="icon" sizes="256x256" type="image/png" />
        <link href="/static/favicon/favicon-192.png" rel="apple-touch-icon" />

        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-640x1136.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-750x1294.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-1242x2148.png"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-1125x2436.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-1536x2048.png"
          media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-1668x2224.png"
          media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
          rel="apple-touch-startup-image"
          href="images/splash/launch-2048x2732.png"
          media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />

        <title>Perfarm Experience</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
