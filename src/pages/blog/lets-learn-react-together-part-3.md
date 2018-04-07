---
title: "Let's Learn React Together: Part 3 - Props"
excerpt: "In the second part of this series, we got into writing actual React code. At this point, you are (hopefully) familiar with JSX, setting up an environment with Enclave, creating new components, and rendering your app. In this part, let's expand our knowledge of components with props."
author: "Sunny Singh"
categories: "Tutorials & Coding"
date: "2016-06-17T06:07:40.000-04:00"
path: "/blog/lets-learn-react-together-part-3"
---

In the [second part](https://ninjality.com/blog/lets-learn-react-together-part-2) of this series, we got into writing actual React code. At this point, you are (hopefully) familiar with JSX, setting up an environment with [Enclave](http://enclave.js.org/), creating new components, and rendering your app. In this part, let's expand our knowledge of components with props.

## Props & PropTypes

So far I've only discussed state since that is the primary way in which React components work. However, the other great thing about components is that they're shareable or reusable within your entire application. If you remember, we created a simple button component:

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

And then included it within the app:

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

But what if we want a slightly different button? Maybe we want to pass the initial and clicked values for the text, or change the way that it looks. Instead of creating an entirely new component, let's update this one to use props instead. First, if you haven't already, run `npm run enclave-serve` and open `localhost:8080` in your browser. If you a need a copy of the code from part 2, it is [available in this repo](https://github.com/ninjality/react-tutorial/tree/part-2). Within the `src/components/App.js` file, update the `<Button />`:

```javascript	
var React = require('react');
var Button = require('./Button');

var App = React.createClass({

	render: function () {

		return (
			<div>
				<h1>Hello!</h1>
				{/* Let's add some props to Button: */}
				<Button
					initialText="Tap Here"
					clickedText="Tapped!"
					style={{
						color: 'blue',
					}}
				/>
			</div>
		)

	}

});

module.exports = App;
```

I've introduced a few new concepts here:

1. First, you can see that there's a comment within the JSX. It looks a little weird because you can't simply do HTML comments like `<!-- -->`, but you notice that you can do JS comments by wrapping with curly braces. This is because anything in curly braces is treated as JS so we can use `/* */`.
2. Next, notice the "custom attributes" that were added to the Button component. In JSX, these are known as properties or props, and can be named anything you want. In this case, I've tried to make it clear that I'm passing in the initial text for the button, the text we want it changed to when clicked, and also some CSS styling to make the button blue.
3. Once again, JSX makes us do inline styles a little different where instead of passing a CSS string, we have to pass a JS object. You can check out the [React docs regarding inline styles](https://facebook.github.io/react/tips/inline-styles.html).

Now, the Button component needs to do something with these props. Similarly to state, you can access default props via `this.props` so let's update the `src/components/Button.js` file like so:

```javascript
var React = require('react');

var Button = React.createClass({

	getInitialState: function () {
		return {
			clicked: false
		};
	},

	handleClick: function () {
		this.setState({ clicked: true });
	},

	render: function () {
		return (
			<button onClick={this.handleClick} style={this.props.style}>
				{this.state.clicked ? this.props.clickedText : this.props.initialText}
			</button>
		);
	}

});

module.exports = Button;
```

A few big changes happened here. First, I changed `this.state.text` to `this.state.clicked`. Since the text is getting passed in via props, we don't want to manage what the actual text will be to display. Instead, the component should simply known when it was clicked to figure out which prop to display. There are other ways to do this of course, but keep in mind that if you're thinking about passing in the prop to the state, then you're falling into [anti-pattern territory](https://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html). Basically, use state as a "source of truth", and props as a way to change how the component renders.

So now you're probably wondering what happens when no props are passed to the Button component. If you try it, you'll see that there's no error, but instead an empty button. Is there a way to let other developers know (or simply reminding yourself) that this component requires a specific set of props? Sure! They are known as PropTypes. Above `getInitialState`, add this:

```javascript
propTypes: {
	initialText: React.PropTypes.string.isRequired,
	clickedText: React.PropTypes.string.isRequired,
	style: React.PropTypes.object
},
```

In this case, we are specifying that initialText and clickedText are required strings. Style is optional, but must be an object if it is provided. Now, when these set of validations don't match, you'll get a console error letting you know that you're missing a prop or did not provide the right type for it.

But what if initialText and clickedText should be optional, and we want to provide defaults? This is done with `getDefaultProps` like so:

```javascript
getDefaultProps: function() {
	return {
		initialText: 'Click Me!',
		clickedText: 'Clicked!',
		style: {
			color: '#fff',
			background: '#333'
		}
	};
},
```

So now, let's add another button to the App component but this time with no props passed to it:

```javascript
var React = require('react');
var Button = require('./Button');

var App = React.createClass({

	render: function () {

		return (
			<div>
				<h1>Hello!</h1>
				{/* Let's add some props to Button: */}
				<Button
					initialText="Tap Here"
					clickedText="Tapped!"
					style={{
						color: 'blue',
					}}
				/>

				{/* This is a default Button: */}
				<Button />
			</div>
		)

	}

});

module.exports = App;
```

Now you should see two different buttons, even though both are actually the same component. This is a simple yet powerful concept of components because it organizes the UI of a large app into a manageable pieces of code. We've now expanded our repetoire of components and in the next part I will explain the lifecycle methods of components. As always, the source code for this part is [available on GitHub](https://github.com/ninjality/react-tutorial/tree/part-3).

[Go to Part 4 to learn about lifecycle methods!](https://ninjality.com/blog/lets-learn-react-together-part-4)