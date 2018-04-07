---
title: "Services That Help With DevOps"
excerpt: "DevOps, or developer operations, can be really hard to get right. This is especially true if you're trying to build everything up from scratch. At Ninjality, we use third-party services to help us out so that we can get to releasing projects faster. We apologize ahead of time if some of these services don't really fit into DevOps, we just use this term as a broad category."
author: "Sunny Singh"
categories: "Coding"
date: "2016-05-04T05:51:26.000-04:00"
path: "/blog/services-that-help-with-devops"
---

DevOps, or developer operations, can be really hard to get right. This is especially true if you're trying to build everything up from scratch. At Ninjality, we use third-party services to help us out so that we can get to releasing projects faster. We apologize ahead of time if some of these services don't really fit into DevOps, we just use this term as a broad category.

## Storing Code

We all need a place to store our source code, which essentially means Git repositories. Other services can then integrate into your repositories to decide when to run tests, deployments, etc.

### GitHub

*Price: Free. Offers pro plans.*

[GitHub](https://github.com/) is the most popular option for not only storing, but also sharing code. We have an entire article devoted to this topic titled [How To Be A GitHub Ninja](https://ninjality.com/blog/how-to-be-a-github-ninja). We keep our personal projects on GitHub such as [devnews](https://github.com/devnews) and [socialshares](https://github.com/socialshares/buttons). Our lead developer, Sunny, also keeps his [personal site open sourced](https://github.com/sunnysingh/web).

### Bitbucket

*Price: Free. Offers pro plans.*

For private projects, we prefer to use [Bitbucket](https://bitbucket.org/) thanks to its free option for private repositories. However, [GitLab](https://about.gitlab.com/) is an alternative that has been getting traction lately and we like the way that they're headed with the UI design and feature parity with GitHub.

## Hosting

These projects have to be accessed from somewhere so that users can, well, use them.

### DigitalOcean

*Price: $5/mo. and up.*

Hands down, [DigitalOcean](https://www.digitalocean.com/) is the best place to quickly get servers up (and keep them up) and running at affordable prices. We keep our projects such as [CodeBee](https://ninjality.com/codebee) hosted on DO droplets. Want to help us out? [Use our referral link](https://m.do.co/c/8ffaa9c63efa).

### Surge

*Price: Free. Offers pro plans.*

When you simply need to host a static site (i.e. HTML, CSS, JS, images), [Surge](https://surge.sh/) does a great job at this with their simple deployment tool. You can specify the build directory in your project, and setup a custom domain as well. Our already mentioned projects such as [devnews](https://devne.ws/), [socialshares](https://socialshar.es/), and [Sunny's personal site](https://sunnysingh.io/) are all hosted on Surge.

## Server Management

We decided to stop managing our servers manually because it can really take a long time and you never feel certain that you got everything secured. This is where server management software comes in.

### Laravel Forge

*Price: $10/mo. and up.*

We primarily use the Laravel stack for back-end development, so using [Laravel Forge](https://forge.laravel.com/) made the most sense to us. We talked about the [restructure of our server](https://ninjality.com/blog/server-restructure-nginx-hhvm) before and how simple it was to get our sites up with Ubuntu, nginx, HHVM, and MySQL. The great part about Forge is that it can host any type of project, including WordPress and Node.js.

There are of course alternatives such as [Heroku](https://www.heroku.com/). We haven't used them but it is extremely popular and have heard good things about them.

### New Relic

*Price: Free. Offers pro plans.*

It's important to keep track of servers such as CPU and memory usage. [New Relic](https://newrelic.com/) is great for this and allows us to receive alerts in our Slack channel whenever usage reaches a certain limit. We can then respond to attacks or bad code.

### Papertrail

*Price: Free. Offers pro plans.*

Continuing on from attacks and bad code, you probably want a way to see errors from a project in production. Since displaying these logs to users or having to search through files aren't good options, that's where [Papertrail](https://papertrailapp.com/) comes in. It gives you a place to view logs through a web app.

## Deployment

This is a tricky task and something that continue to improve. Thanks to these services, it makes things a lot easier.

### DeployBot

*Price: $15/mo. and up.*

We love [DeployBot](https://deploybot.com/) for deploying complex projects such as CodeBee. We especially like being able to build dependencies on their server before moving it to our DigitalOcean droplets. They also offer atomic deployments which means that nothing goes down during a deployment, it simply switches a symlink to the new code once it's up. DeployBot also integrates with GitHub and Bitbucket so that you can automatically deploy when the master branch is updated.

### Laravel Forge and/or Envoyer

*Price: $10/mo. and up for each.*

In keeping with the Laravel ecosystem, deployment tools are also provided in Forge. We use this for our most basic sites and it works fairly well. The great part about this is that it is included in the Laravel Forge service so no extra work is necessary. The source code is already hooked up so automatic deployments can be enabled in one click.

The accompanying service is called [Laravel Envoyer](https://envoyer.io/), which is specifically for deployments. It is similar to DeployBot in offering atomic deployments but can also check to see how your website is doing with health checks.

## Content Delivery

Content, either project or user generated needs to be easily managed and delivered fast.

### CloudFlare

*Price: Free. Offers pro plans.*

While it does cache your content and serve it from nodes that are closest to your users, [CloudFlare](https://www.cloudflare.com/) does a lot more than being a CDN (content delivery network). It can protect you from DDoS attacks, provide SSL, manage DNS, and give basic analytics. We keep all of our sites protected and running blazing fast under CloudFlare.

### Amazon S3

*Price: Free for first year. Offers usage-based pricing.*

We believe that a project's static assets as well as user uploads (e.g. profile avatars) should be hosted separate from the website. [Amazon S3](http://aws.amazon.com/s3/) is a good place for that because of its vast amount of integrations and affordable pricing. We are currently using it for CodeBee so that we can keep user avatars and covers in one place.

## Email Delivery

There are many aspects to successful email delivery, so we allow the experts to handle this as well.

### SparkPost

*Price: Free. Offers pro plans.*

We migrated from Mandrill when they announced their pricing changes, and have been just as happy (if not more) with [SparkPost](https://www.sparkpost.com/). We use them now for sending transactional emails on CodeBee, and Sunny wrote [a tutorial on the migration](https://codebee.io/posts/leng).

### MailChimp

*Price: Free. Offers pro plans.*

You can't mention email without [MailChimp](http://mailchimp.com/). They are the easiest way to get setup with sending out newsletters, which is a core aspect of any successful startup. Again, we use them on CodeBee to keep our users updated.

## What are yours?

We listed the ones that we use here at Ninjality. Do you have an awesome service that you think should be part of this list? Let us know in the comments or on our [Twitter](https://twitter.com/ninjalitydesign) and [Facebook](https://www.facebook.com/ninjalitydesign) channels.