---
title: "Using Turbolinks to speed up your site"
excerpt: "In a world of single-page apps (SPAs) that are rendered by the browser, it is hard to consider building any other way; you get a lot of benefits such as performance of almost instant-loading pages. However, there are still good use cases for building traditional server-rendered websites such as those powered by a CMS (content management system) like WordPress. We recently redesigned ninjality.com, and we chose to use October CMS to help with managing content such as this article. Choosing a CMS doesn't mean that you have to give up on the benefits of SPAs, so I want to show how we used the Turbolinks library to make our site feel like it was built in a modern JavaScript framework."
author: "Sunny Singh"
categories: "Tutorials & Coding"
date: "2017-04-24T18:15:00.000-04:00"
path: "/blog/turbolinks-site-speed"
---

![Cover image of sports car](./images/cover.jpg)

In a world of single-page apps (SPAs) that are rendered by the browser, it is hard to consider building any other way; you get a lot of benefits such as performance of almost instant-loading pages. However, there are still good use cases for building traditional server-rendered websites such as those powered by a CMS (content management system) like WordPress. We [recently redesigned ninjality.com](https://ninjality.com/blog/redesign-2017), and we chose to use October CMS to help with managing content such as this article. Choosing a CMS doesn't mean that you have to give up on the benefits of SPAs, so I want to show how we used the [Turbolinks library](https://github.com/turbolinks/turbolinks) to make our site feel like it was built in a modern JavaScript framework.

## Understanding PJAX

To help better understand what Turbolinks does, it is important to learn the concept of [PJAX](https://pjax.herokuapp.com/) which has actually been around for many years. PJAX stands for pushState + Ajax, and uses both those technologies to intercept link clicks so that JavaScript is able to update the URL and load content via Ajax. Initially, both Turbolinks and PJAX required backend integration so that the Ajax responses would only contain the page title and content. While this is still ideal for performance, Turbolinks as a JavaScript-only library simply works out of the box by manually parsing the title and content out of the full HTML. A fun fact if you're new to Turbolinks is that it used to exist as a Rails-only Ruby gem, and PJAX had a JS library that relied on jQuery. Now, Turbolinks is a standalone library that you can integrate into any website.

## Installing Turbolinks

You simply need to include the Turbolinks JS library into your page. [View the README](https://github.com/turbolinks/turbolinks#installation) for instructions, but let's assume that you're using some form of bundler with npm:

```javascript
npm install turbolinks --save
```

Now you need to import and initialize Turbolinks:

```javascript
var Turbolinks = require('turbolinks')

Turbolinks.start()
```

If your site is very simple, then you're already done. Most of the time you'll need some extra setup though.

## Integrating your website

If you already have some JavaScript running on your site, then you're most likely listening for a page load or domready event. In the case of Ninjality, we have code highlighting, smooth scroll, image zoom, share buttons, and many other libraries that would normally look something like this:

```javascript
document.addEventListener('DOMContentLoaded', function () {
  // initialize scripts....
})
```

However, now that pages can be loaded over Ajax, we need another event to know when those pages load, otherwise our scripts will only fire once (when the user manually visits the site for the first time). Thankfully Turbolinks provides such an event:

```javascript
document.addEventListener('turbolinks:load', function () {
  // initialize scripts....
})
```

As you can see, a simple change from `DOMContentLoaded` to `turbolinks:load` will fix your scripts. Well, most of them. Let's fix some common gotchyas in the next section.

## Some common gotchyas

You're most likely using Google Analytics, Disqus, social widgets, and other third-party tools that are loaded via inline `<script>` snippets. How do you transfer these over to the `turbolinks:load` event?

You'll need a dynamic script loader. The [load-script](https://github.com/eldargab/load-script) library is what we use on Ninjality. As usual, install it through npm:

```bash
npm install load-script --save
```

Now you can use Google Analytics again:

```javascript
var Turbolinks = require('turbolinks')
var loadScript = require('load-script')

Turbolinks.start()

document.addEventListener('turbolinks:load', function () {
  // initialize scripts...

  // Google Analytics
  if (typeof ga === 'undefined') {
    loadScript('https://www.google-analytics.com/analytics.js', function () {
      window.ga = window.ga || function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date
      ga('create', 'YOUR-TRACKER-ID', 'auto')
      ga('send', 'pageview')
    })
  } else {
    ga('send', 'pageview')
  }
})
```

Since we integrate Facebook Comments, the same had to be done here as well:

```javascript
if (typeof FB === 'undefined') {
  loadScript('https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=YOUR-FB-APP-ID')
} else {
  FB.XFBML.parse()
}
```

Unfortunately, we had to take an extra step to get Facebook Comments to work properly. This meant including the `data-turbolinks-permanent` attribute on `<div id="fb-root">`:

```html
<div id="fb-root" data-turbolinks-permanent></div>
```

Finally, the last gotchya you need to be careful of is when including scripts in the `<body>`. Make sure that you add the `data-turbolinks-eval="false"` attribute:

```html
<script src="bundle.js" data-turbolinks-eval="false"></script>
```

While Turbolinks claims to properly resolve inline scripts, we had issues with our JavaScript running multiple times during page navigations.

## Closing thoughts

For many content-based websites that need administrative features, a front end framework like React is overkill. October CMS allows us to have a simple setup with search engine optimization and an admin interface in mind. By integrating Turbolinks, we also were able to compromise between the benefits of a server-rendered website and a single-page app. Do keep in mind that Turbolinks is not a replacement for building an SPA, because you don't get other benefits like state management or quick UI development with Turbolinks. Leave a comment or [tweet @NinjalityDesign](https://twitter.com/NinjalityDesign) if this article helped you integrate Turbolinks into a project!