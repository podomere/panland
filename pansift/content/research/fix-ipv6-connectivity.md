---
title: "Fix Ipv6 Connectivity"
subtitle: "Growth Unit"
layout: research
ip_v4_address: "84.200.235.205"
date: 2022-04-20T10:57:15+01:00
draft: true
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **84.200.235.205** or an IPv6 address like **d218:9b7c:a867:e124:9216:f3c1:8c58:a0ca**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **93:4c:ae:63:9b:70**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://rutherford.info you initially access a DNS server to translate the host portion (rutherford) combined with the Top Level Domain info of the URL, to an IP address like **213.64.187.216**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **172.30.169.250** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
