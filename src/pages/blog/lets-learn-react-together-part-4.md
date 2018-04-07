---
title: "Let's Learn React Together: Part 4 - Lifecycle Methods"
excerpt: "In the third part of this series, we learned about props and PropTypes in React. I now want to get into the last fundamental concept of React and that is lifecycle methods. We technically already have used one of these methods, getInitialState, but there are many others that you can use to build useful components."
author: "Sunny Singh"
categories: "Tutorials|Coding"
date: "2016-08-02T06:09:37.000-04:00"
path: "/blog/lets-learn-react-together-part-4"
---

In the [third part](https://ninjality.com/blog/lets-learn-react-together-part-3) of this series, we learned about props and PropTypes in React. I now want to get into the last fundamental concept of React and that is lifecycle methods. We technically already have used one of these methods, `getInitialState`, but there are many others that you can use to build useful components.

## Lifecycle of a React Component

Every component goes through a lifecycle when it gets rendered. This simply means that a component is initially mounted, potentially updated, and finally unmounted. This is easier to understand with a visual, so check out this awesome diagram by Eduardo Bouças:

<p data-height="551" data-theme-id="0" data-slug-hash="ONNJWE" data-default-tab="result" data-user="tgoyer" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/tgoyer/pen/ONNJWE/">React components lifecycle diagram</a> by Tim Goyer (<a href="http://codepen.io/tgoyer">@tgoyer</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

The useful aspect of this is being able to hook into any of these lifecycle methods, and provide extra functionality to the component. An extremely common method that is used is `componentDidMount`, which is called as soon as the component is rendered. A use case would be to display a loading indicator while fetching data from an Ajax request.

## The Code

Let's create a new component that does exactly this by fetching the user's IP address via the [ipinfo.io API](http://ipinfo.io/developers). First, if you're following along, make sure that you have the code from part 3 by cloning the [GitHub repository](https://github.com/ninjality/react-tutorial/tree/part-3). In the `src/components` folder, create an `IPAddress.js` file:

```javascript
var React = require('react');

var IPAddress = React.createClass({

    getInitialState: function () {
        return {
            ip: null
        };
    },

    componentDidMount: function () {
        // Fetch data and update state here...
    },

    render: function () {
        if (this.state.ip === null) {
            return (
            <div>Fetching IP address...</div>
            );
        }
        
        return (
            <div>Your IP Address is {this.state.ip}.</div>
        );
    }

});

module.exports = IPAddress;
```

It doesn't really do anything yet because the majority of the functionality will be in the `componentDidMount` method. Notice how initialState has an `ip` property where the user's IP address will be stored. In the render method, we're able to check if the IP is null to show a loading message. Otherwise, it will display the user's IP address.

We're ready to add code to the `componentDidMount` method. Let's add the following:

```javascript
componentDidMount: function () {
    var headers = new Headers();
    headers.append('Accept', 'application/json');

    fetch('http://ipinfo.io', {headers: headers})
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        this.setState({ip: json.ip});
    }.bind(this));
},
```

I am using the new [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) here for a simple Ajax request, but keep in mind that browser support is still spotty for Fetch so make sure to load a polyfill in a real world scenario. Anyway, all that this method is doing is fetching data from ipinfo.io and when it receives the data, `this.setState()` is used to store the IP address.

This component is now ready, so let's add it to to `src/components/App.js`:

```javascript
var React = require('react');
var Button = require('./Button');
var IPAddress = require('./IPAddress');

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

                {/* This fetches user's IP and displays it: */}
                <IPAddress />
            </div>
        )

    }

});

module.exports = App;
```

Now run `npm run enclave-serve` and open `http://localhost:8080/` in your browser. Your IP address should now be displayed after a few moments. Sweet, huh?

I only showed one new lifecycle methods here, but as you start to build bigger apps you will notice a need for other methods. For example, it may be useful to abort an Ajax request or to clear out data when a component is unmounted, so `componentWillUnmount` comes in handy there. The other methods are less often used but can be referred to in the [React docs](https://facebook.github.io/react/docs/component-specs.html).

## Closing

That's it for this tutorial, and is the second to last one in this series. As always, you can get the code used in this part [on GitHub](https://github.com/ninjality/react-tutorial/tree/part-4). In the next part, I will close things off with some suggestions on what you can learn next, and other libraries to take a look at within the React ecosystem.

[Go to Part 5 to find out what to learn next!](https://ninjality.com/blog/lets-learn-react-together-part-5)