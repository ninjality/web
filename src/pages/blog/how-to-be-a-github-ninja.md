---
title: "How To Be A GitHub Ninja"
excerpt: "Git is very important to our work here at Ninjality. All the code that is written is stored in repositories so that it can be backed up and shared amongst the team. In regards to open source, we think that it is very important to contribute by sharing code so that others can learn from it, use it for their own projects, and overall grow the community. GitHub is a code hosting platform for Git that incorporates social features, and we've posted some of our projects on it such as socialshares and devnews. We've realized that learning how to use GitHub isn't easy, but it's not impossible to become a GitHub Ninja thanks to the following tips."
author: "Sunny Singh"
categories: "Coding"
date: "2016-04-20T05:47:34.000-04:00"
path: "/blog/how-to-be-a-github-ninja"
---

Git is very important to our work here at Ninjality. All the code that is written is stored in repositories so that it can be backed up and shared amongst the team. In regards to open source, we think that it is very important to contribute by sharing code so that others can learn from it, use it for their own projects, and overall grow the community. [GitHub](https://github.com/) is a code hosting platform for Git that incorporates social features, and we've posted some of our projects on it such as [socialshares](https://github.com/socialshares/buttons) and [devnews](https://github.com/devnews/web). We've realized that learning how to use GitHub isn't easy, but it's not impossible to become a GitHub Ninja thanks to the following tips.

## Learn Git Terminology

The first thing that got us confused was all the terminology that came along with Git and GitHub. There are some basic ones that are fairly important to figure out from the start, and conveniently GitHub provides [a glossary of specific terms](https://help.github.com/articles/github-glossary/). When managing your own repositories, it is important to understand how these terms relate to a basic flow:

1. You "clone" your repository from GitHub to your own computer.
2. You change some code or files, and "commit" your changes to the local repository.
3. You "push" those commits up to the "master branch" of the repository on GitHub. Note that code can be separated with branches, and "master" is the primary one.
4. ...
5. Profit!

There are other things such as forking repositories, creating tags for versions, and so on which we'll explain in the later sections.

## Use a GUI App

Git is actually a command-line tool where you normally have to type commands like `git commit -m "my changes"`. However, this may seem daunting and even experienced users may prefer to use a GUI app. We personally like to use [SourceTree](https://www.sourcetreeapp.com/) because we work on repositories from both GitHub and [Bitbucket](https://bitbucket.org/). However, you may want to check out [GitHub Desktop](https://desktop.github.com/) for working exclusively with GitHub repositories.

A desktop app can really help in terms of creating new repositories and visualizing your work. GitHub has nice integration with their app because they allow you to clone repositories directly from their web interface. Note that you may still want to learn how Git works on the command-line to understand what happens under-the-hood of these desktop apps. There are also times when you may need to use the command-line to resolve issues such as merge conflicts.

## Commit Often

There is no standard way to define what a commit should be, because it differs between developers and companies. We believe in meaningful organization, so separating related changes together into a single commit is fine. However, make sure that you commit often enough so that you can easily undo a previous change. Since Git is a version control tool, it is best to use it that way and revision your changes when needed. In GitHub Desktop, you can easily "revert this commit" and figure out what caused a bug in your code.

## Ignore Compiled and Vendor Files

There are some things that you actually don't want to commit to your repository. Some files are pretty obvious, such as `.DS_Store`, or `.log` files. However, you should also ignore vendor package directories such as `node_modules` and `bower_components`. This is because anyone on your team, or your deployment script, can run `npm install` to get those dependencies into their clone of the project. The advantage of this is that you are not uploading a large number of files that you did not even create. Do note that GitHub imposes limits on [repository and upload size](https://help.github.com/articles/what-is-my-disk-quota/) so ignoring these files help keep your repository small. This also goes for if you're processing your CSS with Sass/Less/PostCSS, and your JavaScript with Browserify/Webpack/Babel. If you output these files into some sort of "build" folder, you can also ignore that entire build folder.

So how do you ignore these files? Git has what is called a `.gitignore` file that you place at the root of your repository. In it, you write which files and folders should be ignored. Each rule is written on its own line, and the `*` wildcard character is allowed. GitHub provides [a list of .gitignore templates](https://github.com/github/gitignore) depending on language or framework.

## Use Branches and Tags

Now, what happens when you want to organize those commits? Say, you're working on a new feature or version of your app? This is where branches and tags come in. Branches are nice when you want to have essentially two versions of your code without having to create a separate repository. The master branch is where your main code lives, but by creating a new branch (e.g. feature-coolstuff) you can start working on that new feature without messing with the master branch (you can easily switch between the branches in GitHub Desktop). This is also really useful when you want to help an open source project, because you can create a branch of a repository (e.g. my-bug-fix), commit changes to that branch, and then submit it as a pull request to that repository.

Tags are more useful for public projects, because they're normally used for creating versions. They are essentially placeholders in your code in which you're saying "code up to here is version 1". Package managers such as [npm](https://www.npmjs.com/) and [Bower](http://bower.io/) like to follow a naming convention for tags such as `v1.0.0` which is also known as [Semantic Versioning](http://semver.org/).

## Use Organizations

When creating an open source project on GitHub, you may decide to simply create a repository under your personal username account. However, if you have high ambitions for the project (which you should), you should probably [create an organization](https://github.com/blog/674-introducing-organizations) for your project. This basically means that instead of having your repository live under `joeschmo/project`, instead it will be `project/repo`. There are some significant benefits to this. First, it is good for simply categorizing repositories, especially if you may have a related repository to that project (e.g. documentation site). Second, it doesn't associate the project with only a single person even if you're still the only person working on it. Third, if you ever do want to transfer ownership or have a large number of people working on the project, you won't have to move/rename the repository.

## Contribute To Other Repositories

GitHub is a social place for developers to work on code. So, why not contribute and get your name on a project's commit history? Some projects even have a contributor list to show who helped with the project. It can be a really small change that you can do from GitHub's web interface, such as fixing a typo in the readme or documentation. Looking for places to contribute? Just visit any semi-popular repository and go to the issues tab. Some may even be labeled as "help-needed" which is great for those who are just getting started with open source.

## JUST DO IT!

Get into using GitHub and open source, it's a rewarding experience.