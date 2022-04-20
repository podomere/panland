---
title: "How To IP"
subtitle: "Infographic?"
layout: research
ip_v4_address: "142.6.225.122"
date: 2022-04-20T16:00:32+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **142.6.225.122** or an IPv6 address like **63be:5a5c:5113:e3f6:b81f:fe55:c8e0:3799**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **28:96:6b:41:6f:cc**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://schmitt.name you initially access a DNS server to translate the host portion (schmitt) combined with the Top Level Domain name of the URL, to an IP address like **110.40.88.104**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **192.0.0.147** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

# Apple macOS / OSX
No matter what version you are on, **10.15.3**, **11.5.6**, or **12.3.3**, there are a range of tools for troubleshooting but between manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especialy for teams that embrace remote work and Work From Anywhere (WFA).
