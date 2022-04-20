---
title: "IP Connectivity"
subtitle: "Expansion Play?"
layout: research
ip_v4_address: "229.224.113.203"
date: 2022-04-20T16:00:32+01:00
draft: true
---

# Internet Addressing
On the Internet you might have a Public IPv4 address like **229.224.113.203** or an IPv6 address like **586e:2893:d19d:1ec8:5bd7:7572:a0e9:b899**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **c1:31:53:1a:c4:e7**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://spinka.net you initially access a DNS server to translate the host portion (spinka) combined with the Top Level Domain net of the URL, to an IP address like **249.137.39.177**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **127.152.78.208** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

# Apple macOS / OSX
No matter what version you are on, **10.13.3**, **11.0.7**, or **12.3.3**, there are a range of tools for troubleshooting but between manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especialy for teams that embrace remote work and Work From Anywhere (WFA).
