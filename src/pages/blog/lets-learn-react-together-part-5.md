---
title: "Let's Learn React Together: Part 5 - Future Learning"
excerpt: "In the fourth part of this series, we learned about the last fundamental concept that is known as lifecycle methods. I want to close things off by discussing various other concepts and tools that are useful in advancing our knowledge in the React ecosystem."
author: "Sunny Singh"
categories: "Tutorials & Coding"
date: "2016-08-05T06:11:01.000-04:00"
path: "/blog/lets-learn-react-together-part-5"
---

In the [fourth part](https://ninjality.com/blog/lets-learn-react-together-part-4) of this series, we learned about the last fundamental concept that is known as lifecycle methods. I want to close things off by discussing various other concepts and tools that are useful in advancing our knowledge in the React ecosystem.

## JavaScript (ES2015/ES6)

As we saw, React is mainly JavaScript. There are some things to learn/remember such as JSX, state, and method names, but the rest is just going to be utilizing the power of JavaScript. In particular, I've been slowly learning [ES2015](https://babeljs.io/docs/learn-es2015/) which is the next standard version that browsers are adopting. It provides a lot of nice new features that make coding so much faster, such as destructuring, for of loops, maps, and promises. I highly recommend you start transitioning over to writing ES2015 code, but wherever it makes sense to do.

## Build Tools

I kept build tools such as [Webpack](http://webpack.github.io/) out of the scope of this tutorial series to simplify things and keep the learning focused on React. You still don't have to worry about build tools thanks to the [create-react-app](https://github.com/facebookincubator/create-react-app) CLI tool and boilerplates, but keep in mind that learning Webpack reaps huge benefits such as being able to customize and add in anything that you want to your build process.

## Flux Libraries

We learned how to fetch and display data in a React component, but since React is focused on just the view/UI layer, this can get messy really fast. For large applications, you'll want a Flux-inspired library such as [Redux](http://redux.js.org/). All that Redux does is create a central store where data will be added and manipulated, and I highly recommend Wes Bos' video series [Learn Redux](https://learnredux.com/).

## URL Routing

In a real web app, you'll probably want multiple pages and URLs. This is where [React Router](https://github.com/reactjs/react-router) comes in to allow mapping certain URLs to components. This allows you to create a typical SPA (single page app) where the app never needs to reload.

## Server-side Rendering

One big appeal that React has on me is its ability to be rendered on the server-side. The two big benefits to this are SEO (search engine optimization) and performance. You can do this [from scratch](https://facebook.github.io/react/docs/environments.html), but there are a few nice tools such as [React Server](https://react-server.io/) and [MERN](http://mern.io/) that already handle this out of the box.

## Keep on learning!

That's it for this tutorial series, but use the suggestions from this article to continue your learning of React. We would love to know if this helped you in some way so leave a comment or [tweet us](https://twitter.com/ninjalitydesign). Also let us know what other topics you'd love to see in the future!