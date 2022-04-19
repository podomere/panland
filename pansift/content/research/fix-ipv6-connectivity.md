---
title: "Fix Ipv6 Connectivity"
subtitle: "Bandwidth-constrained"
layout: research
ip_v4_address: "6.154.174.94"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **6.154.174.94** or an IPv6 address like **5985:dc1d:1c4c:d3d5:e3a7:9495:468c:cbd3**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **ae:54:c5:ed:73:87**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://ernser-bins.com you initially access a DNS server to translate the host portion (ernser-bins) of the URL to an IP address like **243.212.37.52**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **100.102.227.171** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
