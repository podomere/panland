---
title: "Fix Ipv4 Connectivity"
subtitle: "Swag"
layout: research
ip_v4_address: "45.156.99.91"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you may get a Public IPv4 address like **45.156.99.91** or an IPv6 address like **ef6:3c81:3b90:708e:e1b3:c4e7:dc11:eaa**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **74:45:98:d6:be:9a**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://corwin-greenfelder.net you initially access a DNS server to translate the host portion (corwin-greenfelder) of the URL to an IP address like **81.89.181.148**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **127.19.222.57** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
