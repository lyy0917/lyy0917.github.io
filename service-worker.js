/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "841fe551f5e820b3121c9c9be923dd5c"
  },
  {
    "url": "accumulate/index.html",
    "revision": "ea8fe0953f129de98172412f9ed614a2"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f4c2d0e69b3d241d3f4b31849acd68ac"
  },
  {
    "url": "assets/css/0.styles.c9120bc4.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.33d9b4c1.js",
    "revision": "372c517143124a5f014ccf8d0d5218ee"
  },
  {
    "url": "assets/js/3.3ddf135a.js",
    "revision": "560f16c31900d9fbb279867920cffba9"
  },
  {
    "url": "assets/js/4.17d2f8c3.js",
    "revision": "3ccbc01544549cfe1ca0f9697cdee015"
  },
  {
    "url": "assets/js/5.e51f23fa.js",
    "revision": "f923cbcf6a2e4e7d20c47f7b9b11549e"
  },
  {
    "url": "assets/js/6.8746b9f3.js",
    "revision": "b8eeb3506341c123a2b7b882a30ca252"
  },
  {
    "url": "assets/js/7.df1feeb6.js",
    "revision": "fae184f692e1f094381aa751441506cd"
  },
  {
    "url": "assets/js/8.9826a9ea.js",
    "revision": "61568b6432785bce582f2999c3107f33"
  },
  {
    "url": "assets/js/app.6380d70f.js",
    "revision": "b9cc335b44380f829387e328eb70892d"
  },
  {
    "url": "guide.html",
    "revision": "cc04ca44f40930b74626ed63c8f27e3b"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "392a7bbae3cbae12c66b66314c36e7b5"
  },
  {
    "url": "index.html",
    "revision": "b1542902ab97664d8a9334540ee8d3b2"
  },
  {
    "url": "others/index.html",
    "revision": "89e79f9e28017716852c3fc10085717d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
