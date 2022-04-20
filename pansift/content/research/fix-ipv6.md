---
title: "Fix Ipv6"
subtitle: "Get A Pulse On"
layout: research
ip_v4_address: "129.185.104.251"
date: 2022-04-20T10:57:15+01:00
draft: true
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **129.185.104.251** or an IPv6 address like **9939:349a:b552:a29a:7c20:4464:edb2:ed33**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **c4:63:f4:e5:4f:e6**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://nader.io you initially access a DNS server to translate the host portion (nader) combined with the Top Level Domain io of the URL, to an IP address like **14.146.161.89**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **100.87.95.153** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
