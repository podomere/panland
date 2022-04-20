---
title: "How To Fix IP"
subtitle: "Bucketize It?"
layout: research
ip_v4_address: "80.7.244.220"
date: 2022-04-20T16:00:32+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **80.7.244.220** or an IPv6 address like **492d:31ee:fee2:c529:8890:4ad3:cb1a:9812**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **db:e3:19:0f:c2:f5**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://wolf.name you initially access a DNS server to translate the host portion (wolf) combined with the Top Level Domain name of the URL, to an IP address like **192.137.42.54**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **192.0.0.91** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

# Apple macOS / OSX
No matter what version you are on, **10.13.9**, **11.3.5**, or **12.1.6**, there are a range of tools for troubleshooting but between manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especialy for teams that embrace remote work and Work From Anywhere (WFA).
