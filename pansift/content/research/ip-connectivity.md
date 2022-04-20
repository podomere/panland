---
title: "IP Connectivity"
subtitle: "Heavy Lifting?"
layout: research
ip_v4_address: "39.75.138.207"
date: 2022-04-20T13:22:15+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **39.75.138.207** or an IPv6 address like **fc90:d67a:26f2:b9ce:9e58:2ce1:4be0:af72**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **25:0f:90:21:ee:f6**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://bayer-beier.net you initially access a DNS server to translate the host portion (bayer-beier) combined with the Top Level Domain net of the URL, to an IP address like **105.204.31.46**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **10.210.237.216** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
