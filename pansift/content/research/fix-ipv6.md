---
title: "Fix Ipv6"
subtitle: "Thought Leader"
layout: research
ip_v4_address: "233.5.140.3"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you might have a Public IPv4 address like **233.5.140.3** or an IPv6 address like **680a:31f6:80b2:d3ed:acc:6f63:4c8f:aa6c**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **07:08:e8:c9:72:9a**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://reichel.info you initially access a DNS server to translate the host portion (reichel) of the URL to an IP address like **26.152.205.44**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **127.18.15.112** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
