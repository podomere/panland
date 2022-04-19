---
title: "Ipv6 Connectivity"
subtitle: "Swim Lane"
layout: research
ip_v4_address: "101.215.153.58"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **101.215.153.58** or an IPv6 address like **ca96:6303:ee6:ee7f:8330:7ad3:246d:f07b**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **59:d8:76:3f:1d:63**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://howell-beatty.io you initially access a DNS server to translate the host portion (howell-beatty) of the URL to an IP address like **83.111.227.205**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **192.0.0.174** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
