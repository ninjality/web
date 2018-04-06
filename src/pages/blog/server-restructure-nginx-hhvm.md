---
title: "A Speedy New Server: NGINX, HHVM, and more!"
excerpt: "An article discussing how we moved over to a new server infrastructure with Laravel Forge. We're now running faster with NGINX and HHVM."
author: "Kyle McDonald"
categories: "News"
date: "2015-04-29T00:00:00.000Z"
path: "/blog/server-restructure-nginx-hhvm"
---

We've been discussing a possible server restructure for a few weeks, and it's nice to finally be able to say that all Ninjality sites (internal and client projects), along with our personal sites, are now running on a new and really fast server. In this article, I want to explain the reasoning and process of this move.

## Why Restructure?

A good question to ask is why restructure at all? The old server ran our sites just fine, and we didn't run into any huge issues. However, it is always good to keep improving and our server infrastructure was not the best. It was a basic [LAMP](http://en.wikipedia.org/wiki/LAMP_%28software_bundle%29) stack: Linux (CentOS), Apache, MySQL, and PHP. We've worked with this stack for so long that there really was no reason to consider anything else.

The event that changed this thinking is when we began working on multiple projects that were built with the [Laravel PHP framework](http://laravel.com/). When developing locally, Laravel provides a Vagrant virtual machine called [Homestead](http://laravel.com/docs/5.0/homestead). This box has all the installations needed to run Laravel projects, and is a stack involving Ubuntu and NGINX. The cool part is that Homestead is not limited to just Laravel projects; it's trivial to get other sites running WordPress or just pure PHP to work. This made us realize that we weren't using Apache or CentOS for any legitimate reason, only because we were used it.

The other reason that came about was the opportunity to start fresh. The old server was our first instance on [DigitalOcean](https://www.digitalocean.com/), and included a bunch of failed project ideas, old client sites, unused packages, and broken configurations. Managing this server became a pain, and we thought it'd be really nice to just start things from scratch again.

## Hello, Laravel Forge

Considering that we were already using Laravel for building web apps and developing locally, we looked into [Laravel Forge](https://forge.laravel.com/). This is a service that integrates into popular cloud hosts including DigitalOcean, and instantly installs platforms for PHP development. Think of it as a Heroku for PHP/Laravel.

While Laravel Forge is not free, the added $10/mo. is worth the time and effort that the service will save us in managing the server. It already comes installed with NGINX, HHVM, MySQL, Redis, Composer, and a bunch of other stuff that we're either already using, or were unable to use because it was too complicated. Making WordPress work on NGINX was [a little tricky](https://sunnyis.me/blog/running-wordpress-on-laravel-forge), but we made it work. There is nothing that we really miss from Apache, and we can't say that we're big enough fans of .htaccess to miss that either (although nginx.conf isn't a huge improvement).

But, let's talk about [HHVM](http://hhvm.com/). The support for HHVM on Forge is meant to be experimental, but we encountered zero issues so far. It runs everything that regular PHP can, and it's so freaking fast. Scripts process a lot faster, and pages load almost instantly. Serious props need to be given to the folks over at Facebook. Combining NGINX and HHVM feels really good too, because both are speed boosts to the typical Apache and PHP stack.

Only complaint about Forge so far is that it doesn't have an option to automatically install [MariaDB](https://mariadb.org/) over MySQL. Maria is an "enhanced, drop-in replacement for MySQL" and it would be nice if we could gain some speed from that as well.

Overall, Laravel Forge is an amazingly awesome service. Even if we didn't use the Laravel framework, we would still use Forge just because it makes common server and PHP stuff so simple. It can install SSH keys, environment variables, cron jobs, daemons, and firewall rules. There's also integrations with monitoring services such as [New Relic](http://newrelic.com/). It also makes deployments really easy, which we'll get to... now.

## Git & Deployments

To be honest, we used Git on like, 2 projects. Some sites were still only editable through SFTP, and this was due to the complexity of setting up repositories and doing deployments. Switching to Laravel Forge meant that we'd have to setup each site with its own Git repo, and we decided to do that with [Bitbucket](https://bitbucket.org/). The simple decision to use Bitbucket over GitHub or a custom solution is because it provides free private repos and we are already using their other product, [SourceTree](http://sourcetreeapp.com/) (a Git client).

Once again, Forge makes the process of adding a repo to the server and deploying really easy. Just link up a Bitbucket account, install a repo for a site, and boom. Deployments are already setup for Laravel projects, but a quick change in the deploy script allows for any type of project. There is also an option to enable quick deploy, which automatically does a deployment when a `git push` is made.

We realized the advantages of Git early on, but being forced to use it on all of our projects now allows us to collaborate on any site and deploy code faster.

## Our Projects

So, what does this actually mean for our projects? First of all, the performance boost gives users a better and faster experience. Second, this server restructure is part of our motive to keep improving our workflow. An efficient and modern way to work on web projects makes us excited to design and code, and hopefully gets projects released sooner.

We hope you enjoyed reading this article. If you have any questions or suggestions, let us know!