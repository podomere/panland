---
published: false
layout: post
title: Intentional Cyberinsecurity
date: '2020-01-01T10:53:40'
subtitle: Decoys and Tailored Tripwires
author: Donal
tags:
  - secdevops
  - intrusion_deception
  - zero_trust
  - beyond_corp
  - cyberinsecurity
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
  - mitre_att&ck
  - mitre_attack
  - secdevops
  - devops
  - risk_management
  - blue_team
  - defense
  - sec_o11y
  - security_observability
image: /images/blog/cyberinsecurity-v2.jpg
---

For many this may be their first foray in to deception technology though it has a rich history in many domains of conflict. When dealing with sentient attackers who operate in a territory you control, there is ample opportunity to deceive and misdirect them in to betraying their presence, intent, and specific location.

One of the oldest examples of deception technology is from military campaigns when employing mixes of misinformation, misdirection, and visual deception. Using lures or decoys to mislead your enemies or opponents have been documented back to Sun Tzu's 'The Art of War' but also more recently in World War II during Operation Bodyguard during the invasion of Normandy. More recently, one could even think of the Edward Snowden revelations about NSA tools such as Quantum Insert as a form of deception technology at scale where main-in-the-middle attacks were used to deceive a target's browser with spoofed TCP streams and content (though at a global scale, and in times of peace, one is hard pushed to call this a form of active defense rather than just unilateralism).

Indeed, today the concept is even more far reaching and poignant due to our information rich and networked society where organisations vye for mindshare and there's a fine line between advertising and pyschological warfare. We are all succeptible to certain forms of honeytrap where we may be manipulated in to thinking something is what we want it to be, and not what it actually is. In certain countries law enforcement use honeytraps or sting operations to try and lure or deceive a person or group in to demonstrating their true intent. In a policing context it's a tricky topic that walks the line between ethics and entrapment (depending upon aspects of coercion) but is par for the course in a theatre of war, espionage, or when digitally defending your home turf.

In this digital world one thing is guaranteed; code contains bugs, systems have weaknesses, and humans are fallible. Either individually or in combination, these vulnerabilities are what attackers seek to exploit when moving through attack phases. During reconaissance they will not pass up on utilising low hanging fruit such as misconfigurations and mislaid credentials as they need to escalate their privilieges across a network domain. By feigning internal weaknessed in your digital systems (rather than an external ones) it is possible to deceive an attacker in to divulging their presence and intent much earlier than the average of 206 days they spend on compromised systems. As they do further research, reconnaisance, and deeper penetration... they widen and worsen a breach. 

Whether it's cloud based systems or on-premises devices, an attacker must engage with their targets in some manner be it by reading, writing, or executing some data across a channel. For them to continue to map and move they also need to resolve hostnames. To assume roles, understand privileges, or leverage new vectors of attack they need to test the credentials they find. Each of these steps lend themselves to using deception technology to uncovering attackers sooner rather than later. By feigning weakness and leaving false logins, neutered API keys, and hostname lures in strategic locations, you can detect, direct, and even control the attackers next steps. Now they only need to trip up and fail once, not you! This effectively turns the tables on the attacker and raises their bar for remaining undetected. In this post-breach world compromise is inevitable but data, financial, and reputation loss is not.

By building deception technoology in to your infrastructure, systems, and code pipeline early on, you can empower your digital defense teams and scale your security obervability and incident response triggers at low cost and to great effect. Why not try some free [honeytoken](/) deploys on your CI/CD pipeline?
 
