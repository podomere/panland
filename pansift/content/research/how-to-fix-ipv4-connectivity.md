---
title: "How To Fix Ipv4 Connectivity"
subtitle: "Impact Map"
layout: research
ip_v4_address: "48.145.171.45"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **48.145.171.45** or an IPv6 address like **cf73:5244:da02:53a:356c:2cd:a8e6:1d6**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **e9:40:3f:38:53:c1**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://kiehn.io you initially access a DNS server to translate the host portion (kiehn) of the URL to an IP address like **139.33.200.84**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **127.130.202.8** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
