---
layout: post
date: '2019-11-20T13:53:40'
subtitle: Deterministic Security Spaces.
author: Donal
tags:
  - infosec
  - active_defense
  - asymmetric_defense
  - detection
  - breach_detection
  - incident_response
  - first_principles
  - deception
  - deception_tech
  - honeytokens
  - honeypots
  - honeynets
  - OWASP
  - mitre_att&ck
  - mitre_attack
  - secdevops
  - devops
  - nre
  - sre
  - resiliency_engineering
  - reliability_engineering
  - risk_management
  - blue_team
  - defense
  - sec_o11y
  - security_observability
image: /images/blog/redkeys.jpg
published: true
title: No More FUD
---

In 1974 Jerome H Saltzer and Michael D. Schroeder wrote about [**The Protection of Information in Computer Systems** ](http://web.mit.edu/Saltzer/www/publications/protection/) and to this day, not a lot has changed. 

You don't have to be Grace Hopper, Joanna Rutkowska, Dan Geer, Marcus Ranum, or Bruce Schneier to know one thing is certain, the nature of interconnected systems presents an intrinsic risk (due to their interdependency). As Dan Geer points out, "risk is a factor of dependency". 

So it is that we, as digital defenders, seek to quantify risk in the digital realm. We attempt to facilitate decision making and provide some semblance of defensibility for actors, agents, and assets. We battle to provide this protection whilst constrained by finite time and limited resources. Alas, as we strive to keep pace with change, the fabrics of our code and systems form new transitive trusts which quickly grow to exceed our cognitive grasp. Interconnectivity provides utility, but in trying to achieve observability, we create more challenges and increased footprints. Rarely do we run less code or decrease attack surfaces, quite the opposite in fact.

So, in a post-breach world, we covet a form of digitial omniscience (or what used to be coined [**Total Information Awareness**](https://en.wikipedia.org/wiki/Total_Information_Awareness)). Unfortuntely we can not become the security gods of such a panopticon without freezing time. Entropy eventually wins out. From within a small and sliding window of time, even a clockmaker can only observe a subset of all states. Complex systems require additionally complex methods of monitoring and observation to infer and assert their *known* integral states and dependencies. So when it comes to *security observability*, *known unknowns* and *unknown unknowns* actually exceed the current state space and leak forwards in to future state space, one inhabited by sentient attackers who novelly bend the rules. We are left like a Sisyphean character riding a mythical asymptote towards an unknown limit.

If we realise that:

- [x] there is no **endgame** when enumerating badness
- [x] we inhabit a constantly expanding and divergent set of state spaces
- [x] our engineers and open-systems are not anti-fragile in Internet time increments
- [x] we will never **complete the whitelisting** amidst churn (even with zero-trust)
- [x] we are on a [Zen Oxherding](https://tricycle.org/magazine/ten-oxherding-pictures/) journey
- [x] there is a duality to be transcended (while still embracing cognitive dissonances) 

... we then begin to seek simpler, earlier, and more deterministic strategies for defense. Ones with tactics and techniques predicated on definitive **security observability(sec_o11y)** as detection is a precursor to action. We should be converging towards simpler sampling and triggers that lead to earlier and better state awareness (which easily scale as complexity inevitably rises). 

Attack patterns begin from a **non or low** privileged state, agents then seek to expand access and privileges to a new state (or place), where they can achieve persistance and aspects of controlability. If we can begin to deceive attackers by inserting ourselves intentionally in to their paths, we can infiltrate **their state spaces**. We should be able to **deterministically detect, observe, and control** them whilst operating on our own home turf. Technically, we should have the upper hand... especially with simple tripwires such as [**honeytokens**](/howitworks).
