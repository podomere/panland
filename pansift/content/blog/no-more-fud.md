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

You don't have to be Grace Hopper, Joanna Rutkowska, Dan Geer, Marcus Ranum, or Bruce Schneier to know one thing is certain, the nature of interconnected systems present an intrinsic risk (due to their interdependency). As Dan Geer points out, "risk is a factor of dependency". 

So it is that we as digital defenders attempt to facilitate decision making and provide some semblance of defensiblity (while constrained by finite time and resources). Be it for actors, agents, or assets, we seek to quantify risk in a mostly digital realm. Alas, as we strive to keep pace with change, the fabric of our code, systems, and their transitive trusts quickly elude our cognitive grasp. Interconnectivity provides utility, but when aspiring for observability, we create ourselves ever more challenges. Rarely do we run less code or decrease attack surfaces.

So it is in a modern post-breach world as we covet a form of digitial omniscience (or what used to be coined **Total Information Awareness**) but how can we become the security gods of such a panopticon without freezing time. Entropy eventually wins and even a clockmaker may only observe a subset of all states from within a sliding window of time. Complex systems thus require additionally complex methods of monitoring to infer and assert known integral states. So when it comes to *security observabilty* the known unknowns and unknown unknowns exceed current state spaces in to future states spaces inhabited by sentient attackers. When these attackers can bend both the rules and boundaries, there is naught left but a naked Sisyphus riding a mythical asymptote towards an unknown limit.

When we realise:
 - there is no **endgame** to enumerating badness... 
 - we inhabit a constantly expanding and diverging state space...
 - our engineers and open systems are not anti-fragile in Internet time...
 - that we will never **complete whitelisting** amidst churn (even with zero-trust)...
 - we are on a Zen Oxherding journey... 
 - there is a duality to be transcended while still embracing cognitive dissonances... 
 
... we then begin to seek simpler and earlier strategies for defense, tactics and techniques predicated on security observability (as detection is a precursor to action..).

We should be converging towards simpler sampling and state awareness that easily scales as complexity rises. Attacker patterns begin from a no or low privileged state, and then seek to expand access and privilege to a state and place where there is persistance and controlability. If we can begin to deceive an attacker by inserting ourselves intentionally and willingly in to their path we can infiltrate **their** state space. We should be able to deterministically detect, observe, and control them whilst operating on our playing field. Technically, we should have the upper hand... read Part 2 to see how...
