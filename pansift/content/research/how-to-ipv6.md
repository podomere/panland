---
title: "How To Ipv6"
subtitle: "Granular"
layout: research
ip_v4_address: "78.98.200.125"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **78.98.200.125** or an IPv6 address like **764f:91f5:75bb:3a47:bace:a94b:7e6d:47b2**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **c2:5d:0c:c0:6a:1e**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://ziemann-bergnaum.co you initially access a DNS server to translate the host portion (ziemann-bergnaum) of the URL to an IP address like **220.102.187.236**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **198.18.246.157** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
