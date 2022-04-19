---
title: "Ipv4"
subtitle: "Deep Dive"
layout: research
ip_v4_address: "191.231.242.218"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **191.231.242.218** or an IPv6 address like **d063:5c2a:20a:d9fc:2b53:f528:f753:732d**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **54:93:26:0b:6d:10**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://altenwerth-mills.info you initially access a DNS server to translate the host portion (altenwerth-mills) of the URL to an IP address like **90.169.20.176**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **192.0.0.232** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
