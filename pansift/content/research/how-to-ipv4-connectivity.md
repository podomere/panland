---
title: "How To Ipv4 Connectivity"
subtitle: "Customer Journey"
layout: research
ip_v4_address: "214.82.44.125"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **214.82.44.125** or an IPv6 address like **7680:97df:f59e:77da:2650:be1c:3492:208d**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **0b:c5:c6:c0:85:f7**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://grady.co you initially access a DNS server to translate the host portion (grady) of the URL to an IP address like **182.241.205.242**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **100.98.110.167** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 