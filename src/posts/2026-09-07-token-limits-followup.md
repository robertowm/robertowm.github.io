---
title: 'Token Limits Revisited: Subagents Are Winning, My New Tools Are Not'
date: 2026-09-07
layout: post.njk
tags:
  - Claude Code
  - AI
  - Codegraph
  - Context Mode
---

A few months ago, I wrote about [surviving AI token limits](/posts/2026-06-08-managing-token-limits/) and promised a follow-up on [context-mode](https://github.com/mksgl/context-mode) and [codegraph](https://github.com/colbymchenry/codegraph). Here it is - and the results are mixed, to say the least.

The good news first: my parallelism is back and better than before. Depending on what I'm working on, I can consistently run several agents in parallel again. I've also been preferring to spawn subagents for smaller, self-contained tasks, and that's working really well - it keeps the main context lean and the token usage predictable.

Now the not-so-good news. In the end, neither of the new tools delivered what I was hoping for.

- **Context-mode:** Claude Code used to call it quite often in the beginning. Now it pretty much ignores it. No crashes, no errors - just silence. It's hard to fix what the agent simply decides not to use.
- **Codegraph:** This one still shows promise for cross-repo work, but agents keep falling back to plain filesystem reads instead of using the graph. My current struggle is keeping the index in sync and getting Claude Code to consistently reach for it.

So, am I still hitting my daily limits? Less than before, but that's mostly thanks to the subagent workflow rather than the new tools. I might be being too harsh - both projects are young, and the ideas behind them are solid. I'm just having trouble getting them in the right shape for now.

I'll keep tinkering with both and report back if I find a setup that sticks.
