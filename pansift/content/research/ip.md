---
title: "IP"
subtitle: "Best Practice?"
layout: research
ip_v4_address: "199.80.48.249"
date: 2022-04-20T16:00:32+01:00
draft: false
---

# Internet Addressing
On the Internet you may get a Public IPv4 address like **199.80.48.249** or an IPv6 address like **6b6e:c722:5562:cd08:7db1:45cc:e4f4:fd16**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **b0:59:c7:01:b4:c2**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://wolff-oreilly.io you initially access a DNS server to translate the host portion (wolff-oreilly) combined with the Top Level Domain io of the URL, to an IP address like **61.107.76.0**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **172.17.46.247** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

# Apple macOS / OSX
No matter what version you are on, **10.14.5**, **11.0.1**, or **12.3.3**, there are a range of tools for troubleshooting but between manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especialy for teams that embrace remote work and Work From Anywhere (WFA).
