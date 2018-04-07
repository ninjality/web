---
title: "Let's Learn React Together: Part 1 - Concepts"
excerpt: "This article is the first part in a series of tutorials that I will be writing about ReactJS. I am in the process of learning React and I think it would be valuable for you to join me on this journey as I explain things from a lower point of view. In this part, I will focus on the concepts of React and show what writing this code would look like. In the next part I will get into setting up an actual project."
author: "Sunny Singh"
categories: "Tutorials & Coding"
date: "2016-03-08T05:32:34.000-05:00"
path: "/blog/lets-learn-react-together"
---

This article is the first part in a series of tutorials where I will be writing about [ReactJS](https://facebook.github.io/react/). I am in the process of learning React and I think it would be valuable for you to join me on this journey as I explain things from a lower point of view. In this part, I will focus on the concepts of React and show what writing this code would look like. In the next part I will get into setting up an actual project.

## Why React?

React, Facebook's JavaScript library for building UIs, is catching the front-end developer community by storm. There are a couple reasons that I think React is worth learning and using.

First, it is easy to understand how React works because from the start they talk about the virtual DOM. Under the hood, React will re-render the entire UI but will not make any changes to the actual HTML (the DOM). Instead, it will render a virtual version of it and then compare the changes with the actual DOM to decide what to actually change on the page. This as you might guess is good for performance, but also makes you think about the state of your UI, and let React worry about keeping that up to date on the page. This might be new for you if you're coming from jQuery, and familiar if you're coming from Angular. Nonetheless, understanding this concept makes it easier to understand the what/why/how of React.

Second, learning React is mainly learning JavaScript. You have to memorize a couple of methods, but the rest is just using pure JavaScript methods such as `Array.map` for looping over items. This is also one of the benefits of how React forces you to write your HTML in JavaScript, rather than adding a templating language to HTML.

Third and last, React is able to render server-side. This I believe is a huge benefit over other frameworks (e.g. Angular, Ember, Vue). It is a heated topic for debate, but at the end of the day you shouldn't have to give up SEO when creating a single page app with a JavaScript framework. There are also other benefits such as performance and being able to write components a single time and render them anywhere.

## Components

The UI that you build out in React is made up of components. You can think of these components as building blocks, and are synonymous for modules or widgets. The best way to understand this concept is by looking at other websites or even your own, and seeing how you would break it up. Look at the Facebook website and you will notice a "search box" component, "nav bar" component, "news feed" component, "status box" component, and so on. Within these components you might also have other sub components such as a "news feed item".

The reasoning behind components is simply for organizational purposes. By separating code, you make it easier on yourself and others to manage or reuse pieces of UI.

## State

State is the other important concept that you should understand. I imagine most of you (like myself) are coming from using DOM manipulation libraries such as jQuery to make your UIs interactive. Let's take a simple example of a button:

```html
<button id="MyButton">Click Me!</button>
```

Now let's make it where the user can click on the button to change the text to "Clicked!":

```javascript
$('#MyButton').on('click', function () {
	$(this).text('Clicked!');
});
```

You can see how jQuery is heavily focused on the DOM, meaning that you are referencing the specific element and then manually changing its text on click. With React, you can't simply reference elements like that. Instead, you build out components that describe all the states that they could be in. Here's the same example written in React:

```javascript
var MyButton = React.createClass({
	getInitialState: function () {
		return {
			text: 'Click Me!'
		};
	},
	handleClick: function () {
		this.setState({ text: 'Clicked!' });
	},
	render: function () {
		return (
			<button onClick={this.handleClick}>{this.state.text}</button>
		);
	}
});
```

The much larger amount of code may seem off-putting, but it makes complex UIs a lot more manageable. Don't worry about understanding every piece of this code either. The important lesson from this is that we're defining our "MyButton" component, specifying all the different states (initial and clicked states), and then rendering the button. 

Also you might have noticed that we write our HTML in JavaScript. While this seems "dirty", it makes sense to keep the functionality together with the markup. This also allows us to utilize the full power of JavaScript to render out our components however we want.

## Closing

That's it for this part of the series. Hopefully you understand why React is gaining traction and the basic concepts of components and state.

[Go to Part 2 to start coding!](https://ninjality.com/blog/lets-learn-react-together-part-2)