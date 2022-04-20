---
title: "Ipv4 Connectivity"
subtitle: "Granular"
layout: research
ip_v4_address: "208.141.106.234"
date: 2022-04-20T10:57:15+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **208.141.106.234** or an IPv6 address like **fb55:f0c:3835:7cf0:3dcd:88e9:efda:fad4**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **69:91:1d:f3:12:4a**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://stark.org you initially access a DNS server to translate the host portion (stark) combined with the Top Level Domain org of the URL, to an IP address like **126.94.174.144**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **192.168.126.209** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
