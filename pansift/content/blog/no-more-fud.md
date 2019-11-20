---
layout: post
date: '2019-11-20T13:53:40'
subtitle: Deterministic Security Spaces
author: Donal
tags:
  - infosec
  - detection
  - breach detection
  - incident response
  - first principles
  - deception
  - honeytokens
  - honeypots
  - honeynets
  - OWASP
  - secdevops
  - devops
  - nre
  - sre
  - resiliency engineering
  - reliability engineering
  - risk management
  - blue team
  - defense
  - sec_o11y
  - security observability
image: /images/blog/redkeys.jpg
published: true
title: No More FUD
---

In 1974 Jerome H Saltzer and Michael D. Schroeder wrote about [**The Protection of Information in Computer Systems** ](http://web.mit.edu/Saltzer/www/publications/protection/) and to this day, not a lot has changed. 

You don't have to be Grace Hopper, Joanna Rutkowska, Dan Geer, Marcus Ranum, or Bruce Schneier to know one thing is certain, the nature of interconnected systems presents an intrinsic risk (due to their interdependency). As Dan Geer points out, "risk is a factor of dependency". 

So it is that we as digital defenders, attempt to facilitate decision making and provide some semblance of defensibility (whilst constrained by finite time and limited resources). Be it for actors, agents, or assets, we seek to quantify risk in the digital realm. Alas, as we strive to keep pace with change, the fabric of our code, systems, and their transitive trusts quickly grow to elude our cognitive grasp. Interconnectivity indeed provides utility, but when aspiring to achieve observability, we end up creating ourselves more challenges. Rarely do we end up running less code or decreasing attack surfaces, instead achieving only the opposite.

So, in a modern and post-breach world, we covet a form of digitial omniscience (or what used to be coined **Total Information Awareness**) but we can not become the security gods of such a panopticon without freezing time. Entropy eventually wins out and even a clockmaker can only observe a small subset of all states from within a small and sliding window of time. Complex systems thus require additionally complex methods of monitoring and observation to infer and assert their *known* integral states. So when it comes to *security observability*, *known unknowns* and *unknown unknowns* exceed the current state spaces and leak in to future state spaces inhabited by sentient attackers who novelly bend the rules. When these attackers can cheat the rules and intended boundaries, there is naught left but a Sisyphean character riding a mythical asymptote towards an unknown limit.

When we realise:

- [x] there is no **endgame** with enumerating badness
- [x] we inhabit a constantly expanding and divergent state space
- [x] our engineers and open-systems are not anti-fragile in Internet time increments
- [x] that we will never **complete the whitelisting** amidst churn (even with zero-trust)
- [x] we are on a [Zen Oxherding](https://tricycle.org/magazine/ten-oxherding-pictures/) journey
- [x] there is a duality to be transcended (while still embracing the cognitive dissonances) 

... we then begin to seek simpler and even earlier strategies for defense with tactics and techniques predicated on **security observability** (sec_o11y for detection as a precursor to action..).

We should be converging towards simpler sampling leading to greater state awareness (that also easily scales as complexity inevitably rises). Attack patterns begin from a **no or low** privileged state, and then agents seek to expand access and privileges to a new state and/or place where they can achieve persistance and controlability. If we can begin to deceive an attacker by inserting ourselves both intentionally and willingly in to their path, we can infiltrate **their state space**. We should be able to **deterministically detect, observe, and control** them whilst operating on our own playing field. Technically, we should have the upper hand... next, more on [**honeytokening**](/howitworks)..
