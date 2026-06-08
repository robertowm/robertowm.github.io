---
title: 'Surviving AI Token Limits: RTK, Caveman, now testing Context Mode and Codegraph'
date: 2026-06-08
layout: post.njk
tags:
  - Claude Code
  - Gemini
  - AI
  - Qwen
---

My latest daily struggle was reaching my limits on Claude Code way too fast. To help solve this problem, I started using [RTK](https://www.rtk-ai.app/) and [Caveman](https://github.com/JuliusBrussee/caveman) a bit over a month ago.

In the end, it was awesome! These tools helped a lot in reducing my token usage and keeping a healthy workstream - allowing me to run between 2 and 3 agents in parallel, depending on the model used. Caveman's commit and review features work amazingly well - they are way less verbose and spot on when it comes to cutting the noise while preserving the intent.

RTK usually works quite well too, though sometimes it crashes, which is odd. It might be something specific to my local environment (OpenSUSE Tumbleweed), but acceptable - agent just falls back to non RTK cmds, then back to RTK later on and works fine. Overall, Claude Code uses it well too, but sometimes I have to explicitly tell it to use it. It's a bit annoying, but fine.

After spending some time with that setup, I was recently introduced to two new tools: [context-mode](https://github.com/mksglu/context-mode) and [codegraph](https://github.com/colbymchenry/codegraph). I installed both, and at least for Codegraph, it's clear that it has a positive impact on cross-repo work - something I'm working more actively on in my current projects.

After investigating the impact of these new additions, I still can't say for sure if they are contributing to my daily limits being reached. I've found myself hitting those limits more constantly again, and I'm back to running only 1 to 2 agents in parallel.

More on those new additions in the coming weeks. For personal purposes, I already use Gemini, and I'm expanding my usage on local models - something I used heavily in the past before I started paying for Gemini. Right now, I'm testing Qwen models - specifically Qwen 3.6 35B A3B (though it's quite slow on my current hardware) and Qwen 2.5 for FIM on LazyVim. I'll keep this brief, as it deserves a proper post in the future.
