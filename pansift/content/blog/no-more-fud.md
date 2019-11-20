---
layout: post
date: '2019-11-20T13:53:40'
subtitle: Deterministic Security
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
image: /images/blog/redkeys.jpg
published: true
title: No More FUD
---

In 1974 Jerome H Saltzer and Michael D. Schroeder wrote about [**The Protection of Information in Computer Systems** ](http://web.mit.edu/Saltzer/www/publications/protection/) and to this day, not a lot has changed. 

You don't have to be Grace Hopper, Joanna Rutkowska, Dan Geer, Marcus Ranum, or Bruce Schneier to know one thing is certain, the nature of interconnected systems present an intrinsic risk due to interdependency. As Dan Geer points out, "risk is a factor of dependency". 

So it is that we, as defenders, attempt to facilitate decision making (and the best use of finite resources) to provide some semblance of defensiblity for our assets and services. Be it for actor, agent, or asset, we seek to quantify risk in the digital realm. Alas, as we strive to keep pace with change but how code and systems form transitive trusts quickly eludes our cognitive grasp. Without interconnectivity there is little to no utility, but when trying to maintain observability, we create ever more challenges. Rarely do we run less code or decrease attack surfaces.

So, in a modern post-breach world, we race towards a form of digitial omniscience (or what used to be coined **Total Information Awareness**) yet it is almost unfathomable that we can become security gods of the  panopticon without freezing time. Everything is subject to entropy, and even the clockmaker can only observe a subset of states across sliding windows of time. Complex systems require additionally complex methods of monitoring to infer or assert their known or integral states. So when it comes to security observabilty, our known unknowns and unknown unknowns, we are trying to infer a future state of sample spaces inhabited by sentient attackers bending the rules and boundaries of our state space. An image of Sisyphus riding a mythical asymptote comes to mind. 

When we realise:
 - there is no 'endgame' to enumerating badness... 
 - we inhabit a constantly expanding and diverging state space...
 - our engineers and open systems are not really anti-fragile in Internet time...
 - that we will never achieve whitelisting amidst the churn (even with zero-trust)...
 - and then embark and return from our Zen Oxherding journey... 
 - that there is a duality to be transcended while still embracing cognitive dissonances... 
 
... we begin to seek better strategies to defend and protect, all predicated on security observability, for detection and identification is the precursor to prudent action...

Perhaps we should be moving towards a different type of convergence with simpler sampling and state awareness. Simplicity trumps complexity. Whether sentient or not, attacker patterns begin from a zero or low privileged state, and seek to expand their access, observability, and privilege, to a state and place where they can persist and control more states.

If we can begin to deceive an attacker by inserting ourselves intentionally and willingly in to their trajectory, we can infiltrate their state space. Let's begin to deterministically detect, observe, and control them whilst on our playing field. Technically, we should have the upper hand!