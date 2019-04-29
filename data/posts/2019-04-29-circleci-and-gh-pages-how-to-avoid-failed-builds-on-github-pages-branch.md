---
layout: post
title: CircleCI and gh-pages - how to avoid failed builds on GitHub Pages branch
date: 2019-04-29T08:49:36.610Z
tags:
  - CircleCI
  - GitHub Pages
  - gh-pages
  - CD
---
One of the things I started using ....

![Email about failed build on master](/uploads/circleci-ghpages_email.png "Email about failed build on master")

Then at CircleCI dashboard ...

![Build failed at CircleCI dashboard](/uploads/circleci-ghpages_build-failed.png "Build failed at CircleCI dashboard")

What to do?

CircleCI configuration already skips master, then it fails because there no configuration to run :sadface:

After spending sometime on CircleCI documentation, I couldn't find a good solution to ignore commits on master branch.

After a month, I decided to give another try and found a documentation about how to skip builds [\[ref]](https://circleci.com/docs/2.0/skip-build/).  In the end, it's pretty simple: just add "\[skip ci]" or "\[ci skip]" at the commit message and CircleCI skips that build.

I'm using gh-pages to commit and push generated website to master branch.  So I just configured to add "\[skip ci]" on the commit message.

Now it's a bit better, no more emails and a nice entry on CircleCI about skipping it.

![Skipped build on CircleCI dashboard](/uploads/circleci-ghpages_build-skipped.png "Skipped build on CircleCI dashboard")

Still, I think it should be more elegant to do it directly on CircleCI configuration file.
