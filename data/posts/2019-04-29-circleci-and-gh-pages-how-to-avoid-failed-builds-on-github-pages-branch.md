---
layout: post
title: 'CircleCI: Avoiding failed builds on GitHub Pages branch'
date: 2019-04-29T08:49:36.610Z
tags:
  - CircleCI
  - GitHub Pages
  - gh-pages
  - CD
---
My latest project was to reimplement my personal webpage with GatsbyJS.  In the end, it was awesome (and deserves a proper post).  Just a quick summary of this project, it relies on NetlifyCMS to manage my page and posts.  All data is stored on GitHub as static files.  In the end, I decided to use CircleCI to implement Continuum Delivery - every time a change happens on the dev branch, it starts a job to build my webpage and push the compiled project to master branch.

After spending some time configuring CircleCI configuration file, everything was working nicely... expect when things go to the master branch - I started receiving alerts by email related to building failures...

![Email about failed build on master](/uploads/circleci-ghpages_email.png "Email about failed build on master")

At CircleCI dashboard, more alerts...

![Build failed at CircleCI dashboard](/uploads/circleci-ghpages_build-failed.png "Build failed at CircleCI dashboard")

After investigating the problem, I found out that its CircleCI configuration file wasn't correct.  I could filter which jobs are applied to each branch, which helped to avoid building unrelated branches. CircleCI configuration already skips master, then it fails because there no configuration to run :sadpanda:

I found that I could create a job that does nothing, them filter to be applied only to the master branch.  I didn't like this approach, looks hacky to use it.

After spending some time on CircleCI documentation, I couldn't find a good solution to ignore commits on the master branch.  So I decided to live with the errors and force me to come back to it.

One month later, I decided to give another try and found documentation about how to skip builds \[[ref]](https://circleci.com/docs/2.0/skip-build/).  In the end, it's pretty simple: just add "\[skip ci]" or "\[ci skip]" at the commit message and CircleCI skips that build.

I'm using gh-pages to commit and push generated website to master branch.  So I just configured to add "\[skip ci]" on the commit message.

Now it's a bit better, no more emails and a nice entry on CircleCI about skipping it.

![Skipped build on CircleCI dashboard](/uploads/circleci-ghpages_build-skipped.png "Skipped build on CircleCI dashboard")

Still, I think it should be more elegant to do it directly on CircleCI configuration file.
