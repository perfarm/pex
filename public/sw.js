if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/51-7df8515beb295305.js",revision:"7df8515beb295305"},{url:"/_next/static/chunks/535-03baf8d623a6cbe7.js",revision:"03baf8d623a6cbe7"},{url:"/_next/static/chunks/664-7e38c18dd603f57f.js",revision:"7e38c18dd603f57f"},{url:"/_next/static/chunks/675-8a4846b0a2e2cf34.js",revision:"8a4846b0a2e2cf34"},{url:"/_next/static/chunks/685-fc883d1cf54537ce.js",revision:"fc883d1cf54537ce"},{url:"/_next/static/chunks/729-adffaaf21940f996.js",revision:"adffaaf21940f996"},{url:"/_next/static/chunks/75fc9c18-da7e853fcdcaa641.js",revision:"da7e853fcdcaa641"},{url:"/_next/static/chunks/908-48920a7624e52560.js",revision:"48920a7624e52560"},{url:"/_next/static/chunks/framework-73b8966a3c579ab0.js",revision:"73b8966a3c579ab0"},{url:"/_next/static/chunks/main-ab1bcdb49cecaa5f.js",revision:"ab1bcdb49cecaa5f"},{url:"/_next/static/chunks/pages/_app-e419b768e0387881.js",revision:"e419b768e0387881"},{url:"/_next/static/chunks/pages/_error-3f6d1c55bb8051ab.js",revision:"3f6d1c55bb8051ab"},{url:"/_next/static/chunks/pages/admin/release-b24020c203adc681.js",revision:"b24020c203adc681"},{url:"/_next/static/chunks/pages/download-457c94e5b62e6212.js",revision:"457c94e5b62e6212"},{url:"/_next/static/chunks/pages/download/step-by-step-c36b1d79a0a41cba.js",revision:"c36b1d79a0a41cba"},{url:"/_next/static/chunks/pages/download/step-by-step/1-92ae2e611b08f7a9.js",revision:"92ae2e611b08f7a9"},{url:"/_next/static/chunks/pages/download/step-by-step/2-2ed7ca9f61baeca1.js",revision:"2ed7ca9f61baeca1"},{url:"/_next/static/chunks/pages/download/step-by-step/3-ad8adc6a62b2f042.js",revision:"ad8adc6a62b2f042"},{url:"/_next/static/chunks/pages/download/step-by-step/4-5a567b0f71476596.js",revision:"5a567b0f71476596"},{url:"/_next/static/chunks/pages/farm-insights-458eea4dd87a0310.js",revision:"458eea4dd87a0310"},{url:"/_next/static/chunks/pages/index-5e18f622dfb6f8dc.js",revision:"5e18f622dfb6f8dc"},{url:"/_next/static/chunks/pages/perfarm-e005860907682781.js",revision:"e005860907682781"},{url:"/_next/static/chunks/pages/perfarm/finish-cca61b43a9164b85.js",revision:"cca61b43a9164b85"},{url:"/_next/static/chunks/pages/perfarm/machine-4b03784f80007e32.js",revision:"4b03784f80007e32"},{url:"/_next/static/chunks/pages/perfarm/machine/finish-000facc1aced040d.js",revision:"000facc1aced040d"},{url:"/_next/static/chunks/pages/perfarm/product-input-c767c5317bb8745b.js",revision:"c767c5317bb8745b"},{url:"/_next/static/chunks/pages/perfarm/product-input/finish-c1622924e4d088ec.js",revision:"c1622924e4d088ec"},{url:"/_next/static/chunks/pages/register-7159b17d736d25f9.js",revision:"7159b17d736d25f9"},{url:"/_next/static/chunks/pages/register/completed-566dbc158ebb0180.js",revision:"566dbc158ebb0180"},{url:"/_next/static/chunks/pages/register/production-8410994ec65b4b90.js",revision:"8410994ec65b4b90"},{url:"/_next/static/chunks/pages/register/profile-5e801ecda20ae175.js",revision:"5e801ecda20ae175"},{url:"/_next/static/chunks/pages/schedule-ebe1cb3045e804e5.js",revision:"ebe1cb3045e804e5"},{url:"/_next/static/chunks/pages/seedz-farm-07f6483feeaa5f36.js",revision:"07f6483feeaa5f36"},{url:"/_next/static/chunks/pages/seedz-farm/news-4b06cc5964685c5a.js",revision:"4b06cc5964685c5a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e8e154712e8150b4.js",revision:"e8e154712e8150b4"},{url:"/_next/static/css/7c81a0bfb121dfaf.css",revision:"7c81a0bfb121dfaf"},{url:"/_next/static/y7qxLab-6Rf0-4BLjm_rN/_buildManifest.js",revision:"81330eab300116ea3438ca4dbbe73fd6"},{url:"/_next/static/y7qxLab-6Rf0-4BLjm_rN/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/js/pwaEnableInstall.js",revision:"066a324429133970baa13698bbd2e0aa"},{url:"/manifest.json",revision:"f8ea6af2171165d2f109c03989fb96d9"},{url:"/static/favicon/120x120.png",revision:"d67e439ef0f4b1de1249419860ce7526"},{url:"/static/favicon/128x128.png",revision:"66e6e6741aa34afd867f84d59ea30b91"},{url:"/static/favicon/144x144.png",revision:"ba2b03897596bd5f8072535aa54c7031"},{url:"/static/favicon/152x152.png",revision:"5fbe15d978b4e666be6610069bfffab2"},{url:"/static/favicon/180x180.png",revision:"313be914316c2c5adbec36cebe16157f"},{url:"/static/favicon/192x192.png",revision:"6f77c9231af5a4a998f0a5b2b471f16a"},{url:"/static/favicon/384x384.png",revision:"a70528cdf805bf0f6713955f77b1c864"},{url:"/static/favicon/512x512.png",revision:"acf65fd38d4501f3e72d2347d914abdd"},{url:"/static/favicon/72x72.png",revision:"35c2bc33aa73fc47b654b0cf5135700a"},{url:"/static/favicon/96x96.png",revision:"ad1f53bf6602004834cf31c6d8214488"},{url:"/static/imgs/agricultor-colhendo.gif",revision:"c86556f7f34099e104796649f7429fea"},{url:"/static/imgs/download.png",revision:"5872abcbec60302af3ce8a9cdaf590c0"},{url:"/static/imgs/icons/soja.png",revision:"dbe9a9ef995012a2543a03c8120046c3"},{url:"/static/imgs/insights.png",revision:"4fc7b5b13ae49484c4fef8adb89d2adc"},{url:"/static/imgs/insumo.png",revision:"2d786386c0fc46e62898b3cd04685087"},{url:"/static/imgs/iphone-step-1.png",revision:"d47b4aefd4cbc7eecc12448d14f84bac"},{url:"/static/imgs/iphone-step-2.png",revision:"81cbb047b0e1126f0802d914bdaace98"},{url:"/static/imgs/iphone-step-3.png",revision:"0a5d9b9b0486b18c848bb23b7acbd9b8"},{url:"/static/imgs/iphone-step-4.png",revision:"556d915f4700f069493e207501970b05"},{url:"/static/imgs/machine.png",revision:"bede2e7c387a1ec1f72af7a53bf79310"},{url:"/static/imgs/machine.zip",revision:"f50b3f7a6f2124e3aa42158158c73885"},{url:"/static/imgs/perfarm-experience-line.svg",revision:"c1e58c64d3d99ea1eef4b982c1ad69b8"},{url:"/static/imgs/perfarm-experience.svg",revision:"815f748bc9a3320641c8669e10a31a6d"},{url:"/static/imgs/rafiki.png",revision:"6d3298dbb9737c256cce604fe0f7ef6c"},{url:"/static/imgs/realizacao-2-1.png",revision:"294ab058eaab00dc9c1bdcc592e83dd8"},{url:"/static/imgs/report.png",revision:"4bcdf3c9dcb8c9e41538c7fbe3d59fb7"},{url:"/static/splash/splash-1125x2436.png",revision:"1f966fe0beebe3665e52b74948c3ca5f"},{url:"/static/splash/splash-1242x2148.png",revision:"fc1cea8f1f3d00c7af1db9be5fd999f9"},{url:"/static/splash/splash-1536x2048.png",revision:"edfc45a313499090512214155696e59e"},{url:"/static/splash/splash-1668x2224.png",revision:"3d6cbaa32f45594828dfde88b81717b3"},{url:"/static/splash/splash-2048x2732.png",revision:"4436d3ec525567242aea3293314a904f"},{url:"/static/splash/splash-640x1136.png",revision:"66e202c47d83402f99ad9193308f6f45"},{url:"/static/splash/splash-750x1294.png",revision:"6f7c0cb6b9431af098260c32fff8940c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
