---
title: "Slimming Down Your Toolset"
excerpt: "Tools are everywhere. We use a bunch of them here at Ninjality to get work done more efficiently for client and internal projects. However, tools can feel like a burden especially in the JavaScript community; it seems like there's a new tool, framework, or library being released every day. I've noticed that 2015 was the year of experimentation: figuring out whether to use Angular or React, Gulp or Webpack, Sass or PostCSS, Bower or npm, and the list goes on. Now, 2016 looks like the year of making a decision not only on which tool to use, but whether to use one at all. This is why I'm calling this article "Slimming Down Your Toolset.""
author: "Sunny Singh"
categories: "Coding"
date: "2016-04-27T05:49:31.000-04:00"
path: "/blog/slimming-down-your-toolset"
---

Tools are everywhere. We use a bunch of them here at Ninjality to get work done more efficiently for client and internal projects. However, tools can feel like a burden especially in the JavaScript community; it seems like there's a new tool, framework, or library being released every day. I've noticed that 2015 was the year of experimentation: figuring out whether to use Angular or React, Gulp or Webpack, Sass or PostCSS, Bower or npm, and the list goes on. Now, 2016 looks like the year of making a decision not only on which tool to use, but whether to use one at all. This is why I'm calling this article "Slimming Down Your Toolset."

## Making Decisions

First, there's the whole picking the right tool. While there isn't a one-size-fits-all, certain tools seem to have gotten more popularity over others and are deemed the "winners" when it comes to making a decision. React has won the JavaScript view library debate as seen by the wide adoption. Redux has won as the go-to state manager and Flux implementation. Sass and other pre-processors are slowly dying out in favor of PostCSS.

We still use Less, jQuery, Bower, and Gulp on projects, but I try to go with a more modern stack on new projects. So don't take this as a "wow, I need to refactor all of my apps now." Don't break what already works, but that doesn't mean that you should stagnate on new technologies.

This also doesn't mean that you should not take a look at Angular, Ember, or other alternatives. It's just nice that we're not arguing about which tool is best anymore in 2016 (or at least not as much). Pick what works best for you, and if are having a hard time then simply try what the community seems to prefer as a whole. The point is to spend time building web apps rather than figuring out which tool to use.

## Slimming Down

Next, let's get to the primary point of this article: stop using tools that you don't need. I'm talking about using alternatives that are already available in most cases.

### Bower

The first tool on the list is Bower, a package manager for the web. The idea is that you use the `bower install` command to install front-end dependencies such as Bootstrap, jQuery, etc. However, you are probably already using npm to manage dependencies for Node.js. Did you know that you can use npm the same way that you use Bower? Check out [this article](http://dontkry.com/posts/code/using-npm-on-the-client-side.html) on using npm on the client side. Boom, one less tool to worry about.

### Gulp or Grunt

Gulp, Grunt, or any task runner can be replaced by npm as well with a feature known as"npm run scripts." There is [a great article on Medium](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8) about how it works and how easy it is to transition your tasks over to regular JavaScript. That's two down, can we slim down further?

### jQuery

jQuery has been a godsend to JavaScript, I can't imagine building websites in the past without it. As much as I love jQuery though, it just simply isn't needed anymore; browsers have gotten better support for APIs and it's a better practice to use smaller modules (not only for organizational reasons, but for performance as well).

So how do you go about not needing jQuery? The site [youmightnotneedjquery.com](http://youmightnotneedjquery.com/) is a good resource on using native APIs such as `querySelectorAll()` and what the browser support is like. For Ajax, there is the `fetch()` API and helpers such as [SuperAgent](http://visionmedia.github.io/superagent/) and [axios](https://github.com/mzabriskie/axios). Okay, that's three tools out already. Let's see if we can do one more.

### Sass, Less, or Stylus

This is more opinionated, but CSS preprocessors can be cut as well and be replaced by [PostCSS](http://postcss.org/). You're probably already using Autoprefixer to automatically add vendor prefixes, and you may not realize that this is actually a PostCSS plugin that you're using. If all that you're using preprocessors for are variables, nesting, and imports, then take a look at [cssnext](http://cssnext.io/). It's a PostCSS plugin that includes upcoming features to CSS. This means that you can get most of the features you need and still write standard CSS. Anything that is missing can be added through plugins, but I personally stick to using as few as possible. If you got this far, congrats!

## Your Thoughts?

Any superfluous tools that I've missed? Or perhaps you disagree with something that I've said? Let me know in the comments, [on Twitter](https://twitter.com/NinjalityDesign), or [on Facebook](https://www.facebook.com/ninjalitydesign/).