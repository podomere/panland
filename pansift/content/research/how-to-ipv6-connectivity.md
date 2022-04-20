---
title: "How To Ipv6 Connectivity"
subtitle: "Swag"
layout: research
ip_v4_address: "201.180.93.124"
date: 2022-04-20T10:57:15+01:00
draft: true
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **201.180.93.124** or an IPv6 address like **63a5:3bfa:18e9:6f1:1fa7:3841:ff30:c8a9**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **c1:c5:4f:74:4f:b3**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://schultz.info you initially access a DNS server to translate the host portion (schultz) combined with the Top Level Domain info of the URL, to an IP address like **91.240.71.111**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **192.0.0.212** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
