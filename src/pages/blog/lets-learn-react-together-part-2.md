---
title: "Let's Learn React Together: Part 2 - Code"
excerpt: "In the first part of this tutorial series, I explained why you would want to use React and the concepts of components and state. If you are unfamiliar with these concepts, I highly recommend for you to read that article. In this second part, I want to get into the fun stuff—writing code."
author: "Sunny Singh"
categories: "Tutorials & Coding"
date: "2016-03-27T05:42:28.000-04:00"
path: "/blog/lets-learn-react-together-part-2"
---

In the [first part](https://ninjality.com/blog/lets-learn-react-together) of this tutorial series, I explained why you would want to use React and the concepts of components and state. If you are unfamiliar with these concepts, I highly recommend for you to read that article. In this second part, I want to get into the fun stuff—writing code.

## Intro to JSX

Writing React code without any build tools is actually really annoying, since you'd have to construct your markup like this:
	
```javascript
React.createElement('div', {className: 'container'}, 'This is hard...');
```

Thankfully, React introduces a language extension called JSX which makes writing your markup a lot easier. The above example turns into this:

```html
<div className="container">Much better!</div>
```

The advantage is that you get the full power of JavaScript while still being able to write your markup as you would normally. Keep in mind that certain keywords are reserved, so this means writing `className` instead of `class`. This does mean that you will need to have a compiler that can take JSX and turn it into regular JS code (the `React.createElement` stuff). Build tools are not the focus of this tutorial, mainly because you can set this up in [Gulp](http://gulpjs.com/), [Grunt](http://gruntjs.com/), or [Webpack](http://webpack.github.io/). Thankfully, a tool exists that has very minimal setup so that we can get straight into coding.

## Environment Setup

Okay, let's get started. As I said, we need something to compile our React code. For this, you need to make sure that you have [Node.js](https://nodejs.org/) installed so please do that if you haven't already. I'm going to use the command line to set things up, so let's create a new project folder:

```bash
mkdir react-tutorial && cd react-tutorial
```

This will create a folder called `react-tutorial` and open it. Now let's initialize it so that we can install Node packages:

```bash
npm init
```

Press enter for all the questions.

Now, let's install [Enclave](https://github.com/eanplatter/enclave) which includes [Webpack](http://webpack.github.io/) and [Babel](https://babeljs.io/). It includes a lot of fancy features but for the sake of simplicity we will use it as a simple JSX compiler. To install it run the following:

```bash
npm install enclave -save
```

Note: At the time of this writing, [create-react-app](https://github.com/facebookincubator/create-react-app) did not exist and thus Enclave was used. This series will continue to use Enclave, but its only purpose is to compile our project so feel free to use create-react-app if you wish.

This may take a while, but once it finishes you will be taken through a list of questions. Enter the following for the questions:

1. `src/index.js`
2. Press enter.
3. Press enter.
4. `src/index.html`
5. `true`

Open up the project folder in your favorite editor and make sure that your `enclave.js` file looks like the following:

```javascript
exports.entry = "src/index.js"
exports.output = "dist"
exports.port = 8080
exports.index = "src/index.html"
exports.live = true
```

We can now start the server by running `npm run enclave-serve`. You will also have to open `http://localhost:8080/` in your browser. You will see an error because we haven't written any code yet, so let's fix that.

## Writing Your First Component

If you ever get stuck, feel free to reference the accompanying [repository on GitHub](https://github.com/ninjality/react-tutorial/tree/part-2). The code for this part is in the "part-2" branch. I highly suggest for you to use the repository as a reference and try to write all of the code yourself. This makes learning a lot easier, trust me.

First, create a `src` folder and within it create an `index.html` file. Put the following in that file:

```html
<!doctype html>
<html>

<head>

	<title>React Tutorial</title>

</head>

<body>

	<div id="root"></div>

</body>
</html>
```

This is just a very basic boilerplate that includes a "root div" for attaching our React application to.

Now, in the same `src` folder create an `index.js` file. Put the following:

```javascript
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(<App />, document.getElementById('root'));
```

Let's slow down a bit here since a couple things are going on here. First, we are importing the React and React DOM libraries. These are being pulled in from the `node_modules` folder which were installed by Enclave. If you are unfamiliar with the `require()` syntax, it basically let's you include JS files without having to add a `<script>` tag to your markup. Next, we are importing an App component, which we will create in a moment. Finally, we need to render this component to the DOM which in this case is the `<div id="root"></div>` element that we added earlier to our `index.html` file.

If you grasped all of that, let's move on to creating an actual component. Create a new folder in the `src` directory called `components`. This is a good practice for separating out your various components. Within this folder, create an `App.js` file and put the following:

```javascript
var React = require('react');

var App = React.createClass({

	render: function () {

		return (
			<div>
				Hello!
			</div>
		)

	}

});

module.exports = App;
```

The first line should be familiar now, this imports the React library. Next, we are calling `React.createClass()` to create a new component. The `module.exports = App` line simply exports this component so that we can `require()` it in `index.js`.

The good stuff is within the render method. This is simply a function that returns some HTML (more specifically, JSX). There are a few things to keep in mind: you want to always keep the parentheses and have some outer element for your markup. This means that if you have a bunch of elements, wrap them within some generic `<div>`.

To fix the error that you got in the browser, go back to the command line and run `npm run enclave-serve` again and refresh your browser. This time you should see a "Hello!". This is where you can freely experiment with the render method by putting in different types of markup. The browser will automatically reload whenever you save your component.

## Including Other Components

You may be really excited at this point, or you might be wanting something more; after all, in a full project you would have multiple components working with each other. Let's fix that by creating another component. Remember the button that I showed in [part 1](https://ninjality.com/blog/lets-learn-react-together)? Let's create that by adding a new file called `Button` in the `src/components` folder and putting the following:

```javascript
var React = require('react');

var Button = React.createClass({

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

module.exports = Button;
```

This is fairly similar to the App component, but we've added some extra functionality to it. This simply renders a button that says "Click Me!", and when you click it, it says "Clicked!". Let's go through each method:


- `getInitialState` sets up the default object of data. In this case, the button's text which says "Click Me!".
- `handleClick` allows us to handle what happens when the button will be clicked. You can use `this.setState()` to update that initial state object.
- `render` obviously renders the button, but notice how `onClick` is added to call the `handleClick` method. There are many other attributes such as `onSubmit` that you may be familiar with already from HTML. Also notice how we reference other JavaScript code within our markup via the curly braces. In this case, we can output the text by writing `{this.state.text}`.

Now that our Button component is ready, let's add it to the App component. Go back to `App.js` and update it with the following:

```javascript
var React = require('react');
var Button = require('./Button');

var App = React.createClass({

	render: function () {

		return (
			<div>
				<h1>Hello!</h1>
				<Button />
			</div>
		)

	}

});

module.exports = App;
```

At the top, simply import the button with the `require()` statement. Then, we can use it like a custom HTML element by simply writing `<Button />`. Keep in mind that the trailing backslash is necessary, since this is JSX.

## Closing

That is all for this part since I don't want to include too much. I hope that you're feeling really comfortable at this point and are understanding React better. If not, feel free to let me know in the comments or on [our Twitter](https://twitter.com/ninjalitydesign).

[Go to Part 3 to learn about props!](https://ninjality.com/blog/lets-learn-react-together-part-3)