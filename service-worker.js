/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["F:/Project_all/hexoweb/hexo/public/404.html","174bda19c0335e7352ad60820203a6c0"],["F:/Project_all/hexoweb/hexo/public/about/index.html","eaa9d42543a90e43ca8d6f11c991ce52"],["F:/Project_all/hexoweb/hexo/public/archives/2020/05/index.html","92de94a0112c6217757c6ca2ed3710a3"],["F:/Project_all/hexoweb/hexo/public/archives/2020/05/page/2/index.html","9c020b70cec6bf930605af0e6f881ca3"],["F:/Project_all/hexoweb/hexo/public/archives/2020/06/index.html","08ea1a88b24d32ad40edb24eb758c7ed"],["F:/Project_all/hexoweb/hexo/public/archives/2020/index.html","d4390eff1192a08b4c5723f8de57e424"],["F:/Project_all/hexoweb/hexo/public/archives/2020/page/2/index.html","87981152f3f8b73e95bb8cd21430bfe3"],["F:/Project_all/hexoweb/hexo/public/archives/2020/page/3/index.html","e6af3d593dc495b49a2b38febea854ae"],["F:/Project_all/hexoweb/hexo/public/archives/index.html","ddaa23236a4e395d4e9fcbb126e67142"],["F:/Project_all/hexoweb/hexo/public/archives/page/2/index.html","ddaa23236a4e395d4e9fcbb126e67142"],["F:/Project_all/hexoweb/hexo/public/archives/page/3/index.html","ddaa23236a4e395d4e9fcbb126e67142"],["F:/Project_all/hexoweb/hexo/public/categories/index.html","b1856988e0921d22f482f53ce762517a"],["F:/Project_all/hexoweb/hexo/public/categories/linux/centos/index.html","45b31cd259fdf8bab9756501de574232"],["F:/Project_all/hexoweb/hexo/public/categories/linux/cmd/index.html","6500aa2d9f467e8fb6cd3a5b2e2faf7b"],["F:/Project_all/hexoweb/hexo/public/categories/linux/index.html","86acca332d6a18404f69efecf86e8291"],["F:/Project_all/hexoweb/hexo/public/categories/linux/opensuse/index.html","8d3d047c92f5d7352e07345f5f059016"],["F:/Project_all/hexoweb/hexo/public/categories/linux/page/2/index.html","2c074ee513ed4d77e352286c4295135f"],["F:/Project_all/hexoweb/hexo/public/categories/linux/software/index.html","be31c55bf4d1de75fcf614f52d5bae7d"],["F:/Project_all/hexoweb/hexo/public/categories/linux/system/index.html","6a12a57e1d2e3d49ea31705cad3f27f4"],["F:/Project_all/hexoweb/hexo/public/categories/linux/ubuntu/index.html","fa1cfeaa4cd2b403426d3f04b8c40a4f"],["F:/Project_all/hexoweb/hexo/public/categories/systools/index.html","6c479996e080438ce0beeb4d34706a4f"],["F:/Project_all/hexoweb/hexo/public/categories/systools/virtualbox/index.html","27331bca5747edbcaa15b39aeca24f8b"],["F:/Project_all/hexoweb/hexo/public/categories/windows/index.html","c1474528097c57c4078f072f877dd53e"],["F:/Project_all/hexoweb/hexo/public/categories/windows/tools/index.html","872f51e38b549d4cfeb08dd01faa03b1"],["F:/Project_all/hexoweb/hexo/public/css/APlayer.min.css","c1205ae9289b11ebe90e7a51d0608d80"],["F:/Project_all/hexoweb/hexo/public/css/all.min.css","7c1bd1986d0ea00ee338c8b62128a4ca"],["F:/Project_all/hexoweb/hexo/public/css/gitalk.css","f59c1b790faf53d94af0b24b21b7a040"],["F:/Project_all/hexoweb/hexo/public/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["F:/Project_all/hexoweb/hexo/public/css/solarized-light.css","54b45aefe94575204072fcffc0ed4f17"],["F:/Project_all/hexoweb/hexo/public/css/style.css","9f52a254bc49f94d19a21da493d2c374"],["F:/Project_all/hexoweb/hexo/public/css/vssue.min.css","dadea370187b324ee77b4a0994f4083d"],["F:/Project_all/hexoweb/hexo/public/css/waves.min.css","a61d010a0a59639a441da82e856b31bb"],["F:/Project_all/hexoweb/hexo/public/docstarted/index.html","8249638f9e13c1c4d328a2dc50543621"],["F:/Project_all/hexoweb/hexo/public/examples/index.html","c470c763cd6afe15571241045e7a19a8"],["F:/Project_all/hexoweb/hexo/public/fonts/Break Bold.ttf","583167d6bce4e6abcbc902d89f03a2b1"],["F:/Project_all/hexoweb/hexo/public/fonts/Break ExtraLight.ttf","5c99c7b20c3a1dc04c0cbd8510649d0f"],["F:/Project_all/hexoweb/hexo/public/fonts/Break Light.ttf","247176e9beb86b04f4b85b597de2bf8b"],["F:/Project_all/hexoweb/hexo/public/fonts/Break Regular.ttf","e478c822ea44bdbed1c14e7b05d20330"],["F:/Project_all/hexoweb/hexo/public/fonts/Break SemiBold.ttf","fb3c5b862af6ab5b54625290a5e05f7e"],["F:/Project_all/hexoweb/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["F:/Project_all/hexoweb/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["F:/Project_all/hexoweb/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["F:/Project_all/hexoweb/hexo/public/fonts/UbuntuMono-Regular.ttf","2fc142d6ca114f2b3706dbe6a48e891d"],["F:/Project_all/hexoweb/hexo/public/fonts/VarelaRound-Regular.ttf","6b01a2e85490ac128366c801680db00c"],["F:/Project_all/hexoweb/hexo/public/fonts/fa-brands-400.ttf","831eb40a2d76095849ba4aecd4340f19"],["F:/Project_all/hexoweb/hexo/public/fonts/fa-brands-400.woff","e1fe4c0e26c7e50cb46c7ec6fa49fe86"],["F:/Project_all/hexoweb/hexo/public/fonts/fa-solid-900.ttf","d80ca32233940ebadc5ae5372ccd67f9"],["F:/Project_all/hexoweb/hexo/public/fonts/fa-solid-900.woff","0f82efd36a2f53f2f6036b17cd15c8ac"],["F:/Project_all/hexoweb/hexo/public/friends/index.html","b0eb4edb62dc77c22a37ba956cc34361"],["F:/Project_all/hexoweb/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["F:/Project_all/hexoweb/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["F:/Project_all/hexoweb/hexo/public/img/baidu.svg","f71de79dd48490fea51381c21501f1b0"],["F:/Project_all/hexoweb/hexo/public/img/ico/qq.png","98c6f6917b1bd38ce0ab9e6f81783507"],["F:/Project_all/hexoweb/hexo/public/img/ico/qzone.png","7513f623a0b933ee1a52ac52b5ab6268"],["F:/Project_all/hexoweb/hexo/public/img/ico/wechat.png","c01718f56c4f482c88a5811ebe05ace8"],["F:/Project_all/hexoweb/hexo/public/img/ico/weibo.png","2af288384e8aee34e94adae792942d2c"],["F:/Project_all/hexoweb/hexo/public/img/logo/sy512.png","193a64e61e378a87c122acf60437fdcf"],["F:/Project_all/hexoweb/hexo/public/img/logo/syboot512.png","963363dadc81cb0ace4ae432ced8229e"],["F:/Project_all/hexoweb/hexo/public/img/logo/syboot512x512.png","0a4ccb4d2d8cdf669f7b80c6123e3aa2"],["F:/Project_all/hexoweb/hexo/public/img/logo/syboot_logo.png","ee38c24bdb6031df3d1e84c05f4f4482"],["F:/Project_all/hexoweb/hexo/public/img/qrcode/sy_wx.png","83fe7d1b1468e58445962b3beb210edb"],["F:/Project_all/hexoweb/hexo/public/img/qrcode/sy_zf.png","d758be6bff60893bf61add513d57a895"],["F:/Project_all/hexoweb/hexo/public/img/wallpaper/aradfghj-ixwFncpyi-65.jpg","b290ae2ded64409e509c39efd61a7bac"],["F:/Project_all/hexoweb/hexo/public/img/wallpaper/ertfghj-ixwFncpyi-121.jpg","565ade92ff3c45d7f6e2c13b9216c00f"],["F:/Project_all/hexoweb/hexo/public/img/wallpaper/iuhgr-ixwFncpyi-24487.jpg","6e970dc9d202205e469c1d9517f6ca96"],["F:/Project_all/hexoweb/hexo/public/img/wallpaper/rtghhgy-ixwFncpyi-3523.jpg","d3201c26415f01232c35818ce1132618"],["F:/Project_all/hexoweb/hexo/public/img/wallpaper/rtyuihj-ixwFncpyi-275.jpg","c4ed2f2f22eb1fae01f2a63f445502fc"],["F:/Project_all/hexoweb/hexo/public/img/wallpaper/uihjgv-ixwFncpyi-5432.jpg","26045243ef773faabd2958697c5777d3"],["F:/Project_all/hexoweb/hexo/public/img/wallpaper/wszoihji-xwFncpyi-dfghtr-784.jpg","cb8419083704cb641793f26c9c04d5bd"],["F:/Project_all/hexoweb/hexo/public/index.html","ebaca4b451b10277ecfca53752bf6577"],["F:/Project_all/hexoweb/hexo/public/js/MiniValine.min.js","16b8931afaccf6360a2e74948702d305"],["F:/Project_all/hexoweb/hexo/public/js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["F:/Project_all/hexoweb/hexo/public/js/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["F:/Project_all/hexoweb/hexo/public/js/clipboard.min.js","221393f48062472d1e72960fda7db7a3"],["F:/Project_all/hexoweb/hexo/public/js/comment_typing.js","fe94c8eaefb320f98f1a2cbf0a97622d"],["F:/Project_all/hexoweb/hexo/public/js/embed.dist.js","5c2e782f1f7e6aa27e072f05c3a9fa10"],["F:/Project_all/hexoweb/hexo/public/js/gitalk.min.js","a229fa3168113a7fcb3b3f8271014771"],["F:/Project_all/hexoweb/hexo/public/js/highlight.min.js","7a251d7a9ea5b3e160df20e39d9db150"],["F:/Project_all/hexoweb/hexo/public/js/instant_page.js","654072b61d955d20f754ef3cfafce2fb"],["F:/Project_all/hexoweb/hexo/public/js/jinrishici.js","ad967252850804614343ea17558688bc"],["F:/Project_all/hexoweb/hexo/public/js/jquery.backstretch.min.js","2f728496feb96f4b51732fe18d0ab56b"],["F:/Project_all/hexoweb/hexo/public/js/jquery.fancybox.min.js","003e7d1be42767dacd59bd516082e9e1"],["F:/Project_all/hexoweb/hexo/public/js/jquery.min.js","a6b6350ee94a3ea74595c065cbf58af0"],["F:/Project_all/hexoweb/hexo/public/js/scrollreveal.min.js","b80bb2839969109071cbabbdcfe0953d"],["F:/Project_all/hexoweb/hexo/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["F:/Project_all/hexoweb/hexo/public/js/valine.js","d150d99aa65cccd8d40d075925674122"],["F:/Project_all/hexoweb/hexo/public/js/vssue.github.min.js","2686285c431edb57a6798c8a485eb092"],["F:/Project_all/hexoweb/hexo/public/js/vue.runtime.min.js","dbeb843a7fb3c44653f72da6e559cb19"],["F:/Project_all/hexoweb/hexo/public/js/waves.min.js","e40b2459118b9fff5fc34373fb44ba48"],["F:/Project_all/hexoweb/hexo/public/page/2/index.html","db7ec6ac43872a3305a64ad0a285e476"],["F:/Project_all/hexoweb/hexo/public/page/3/index.html","50ecf2671bdf37ada02ce7e9270a1089"],["F:/Project_all/hexoweb/hexo/public/posts/linux/centos/71db4db0.html","aabe7e06d6fd5b2df70c235592c7acde"],["F:/Project_all/hexoweb/hexo/public/posts/linux/centos/8455ae15.html","83b855dc86de90aa031696ef74dfe119"],["F:/Project_all/hexoweb/hexo/public/posts/linux/centos/9ccaab53.html","60000dadd829a7b77224a6c3471c9c88"],["F:/Project_all/hexoweb/hexo/public/posts/linux/cmd/543e2685.html","8f1e10ec63f74a11545b9c336eb3ddbb"],["F:/Project_all/hexoweb/hexo/public/posts/linux/cmd/63e0d6b7.html","f53262d778b25e5a4bf8cc56b42a5906"],["F:/Project_all/hexoweb/hexo/public/posts/linux/cmd/71557959.html","07bf5a1eec0853620533555b33bd691a"],["F:/Project_all/hexoweb/hexo/public/posts/linux/cmd/c9e91e3c.html","15c30a133a6af7e4d1aa0f58514f9543"],["F:/Project_all/hexoweb/hexo/public/posts/linux/cmd/ec8241e0.html","9c17f0c6736b44f1be2e8711784d5fe0"],["F:/Project_all/hexoweb/hexo/public/posts/linux/opensuse/5485e43a.html","7178adebd3e2b2dfb6db502458545131"],["F:/Project_all/hexoweb/hexo/public/posts/linux/opensuse/91829fc4.html","f77b9fefed6c905ac2af72bc047e6ed5"],["F:/Project_all/hexoweb/hexo/public/posts/linux/opensuse/a3febc18.html","1e1fc7f4963e31efc82d235623a57661"],["F:/Project_all/hexoweb/hexo/public/posts/linux/software/7b4a9736.html","f57ed93e425617e57d082618f7493a8a"],["F:/Project_all/hexoweb/hexo/public/posts/linux/software/92293203.html","79d85387142be18785abdea877a74ac8"],["F:/Project_all/hexoweb/hexo/public/posts/linux/software/c4da7a0.html","3a883df349e55122cab3052627e06d62"],["F:/Project_all/hexoweb/hexo/public/posts/linux/software/e243c68c.html","65a90fa71b15a0795d7fec8ca232fa5c"],["F:/Project_all/hexoweb/hexo/public/posts/linux/software/e52e0295.html","4ba3c85a1c4827cfe219716a3c03874a"],["F:/Project_all/hexoweb/hexo/public/posts/linux/system/3f185f.html","807861354012b6676742a2efb8388456"],["F:/Project_all/hexoweb/hexo/public/posts/linux/ubuntu/205e4283.html","7aee2b9b0d62cec665239d7c056b35e1"],["F:/Project_all/hexoweb/hexo/public/posts/linux/ubuntu/234b4f4a.html","e4e8b9c66bfd11da623732110947181f"],["F:/Project_all/hexoweb/hexo/public/posts/systools/virtualbox/5d94ee4c.html","05d4b0842d294768f629369c570e0032"],["F:/Project_all/hexoweb/hexo/public/posts/windows/tools/65bd21fb.html","0a347296d604447c639491f190c7a5d3"],["F:/Project_all/hexoweb/hexo/public/tags/centos/index.html","1aac9401d532d3fb43518cec83970717"],["F:/Project_all/hexoweb/hexo/public/tags/cmd/index.html","92a3be4d20501661f347ba6978cb04a0"],["F:/Project_all/hexoweb/hexo/public/tags/index.html","62ef599508b08dc95b1825ddad248bcb"],["F:/Project_all/hexoweb/hexo/public/tags/linux/index.html","7021576974727fc4cc8d49906ddce763"],["F:/Project_all/hexoweb/hexo/public/tags/opensuse/index.html","9208d7c3fba23188b5221ad44fb45680"],["F:/Project_all/hexoweb/hexo/public/tags/software/index.html","6410cf5bd8368abd565302407fc8403a"],["F:/Project_all/hexoweb/hexo/public/tags/system/index.html","a59c83a8272a0c9386d159ea86ab0c7a"],["F:/Project_all/hexoweb/hexo/public/tags/ubuntu/index.html","f7938428016f1acf50f4245637f8e347"],["F:/Project_all/hexoweb/hexo/public/tags/virtualbox/index.html","9618d8f73dd7144932196b33b3c8f710"],["F:/Project_all/hexoweb/hexo/public/tags/windows/index.html","900c2ad4bef7f5704e0945c3d9e092d1"],["F:/Project_all/hexoweb/hexo/public/tags/yast2/index.html","bf0b2a5ac01c59611d5d88e3425da662"],["F:/Project_all/hexoweb/hexo/public/webfonts/fa-brands-400.ttf","831eb40a2d76095849ba4aecd4340f19"],["F:/Project_all/hexoweb/hexo/public/webfonts/fa-brands-400.woff","e1fe4c0e26c7e50cb46c7ec6fa49fe86"],["F:/Project_all/hexoweb/hexo/public/webfonts/fa-solid-900.ttf","d80ca32233940ebadc5ae5372ccd67f9"],["F:/Project_all/hexoweb/hexo/public/webfonts/fa-solid-900.woff","0f82efd36a2f53f2f6036b17cd15c8ac"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







