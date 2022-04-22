---
title: "Fix IP"
subtitle: "Heavy Lifting?"
layout: research
ip_v4_address: "56.141.165.192"
date: 2022-04-20T16:00:32+01:00
draft: false
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **56.141.165.192** or an IPv6 address like **9529:d7f9:36a8:cead:ee8b:cf05:cc3f:29ed**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **88:19:8f:3a:48:4d**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://bauch.io you initially access a DNS server to translate the host portion (bauch) combined with the Top Level Domain io of the URL, to an IP address like **64.243.231.170**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **169.254.15.82** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

# Apple macOS / OSX
No matter what version you are on, **10.15.4**, **11.5.3**, or **12.3.7**, there are a range of tools for troubleshooting but between manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especialy for teams that embrace remote work and Work From Anywhere (WFA).
