---
title: "Ipv4 Connectivity"
subtitle: "Make It Actionable"
layout: research
ip_v4_address: "215.38.58.154"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **215.38.58.154** or an IPv6 address like **3a8:b52c:b963:66e9:bd8c:39d1:fc4:efc7**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **41:8e:9a:b7:bd:c7**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://considine.io you initially access a DNS server to translate the host portion (considine) of the URL to an IP address like **149.116.144.117**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **192.168.242.48** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
