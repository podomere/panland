---
title: "How To Fix IP Connectivity"
subtitle: "Ideate?"
layout: research
ip_v4_address: "103.64.213.136"
date: 2022-04-20T16:00:32+01:00
draft: false
---

# Internet Addressing
On the Internet you may get a Public IPv4 address like **103.64.213.136** or an IPv6 address like **5016:2743:3587:7eb2:1283:3665:a52d:cf14**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **5d:c8:4c:a2:7a:4b**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://dach.org you initially access a DNS server to translate the host portion (dach) combined with the Top Level Domain org of the URL, to an IP address like **137.213.236.178**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **10.108.193.182** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

# Apple macOS / OSX
No matter what version you are on, **10.13.1**, **11.4.8**, or **12.1.8**, there are a range of tools for troubleshooting but between manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especialy for teams that embrace remote work and Work From Anywhere (WFA).
