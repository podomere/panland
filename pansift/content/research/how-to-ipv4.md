---
title: "How To Ipv4"
subtitle: "Buying Cycle"
layout: research
ip_v4_address: "54.30.202.251"
date: 2022-04-20T10:57:15+01:00
draft: true
---

# Internet Addressing
On the Internet you might have a Public IPv4 address like **54.30.202.251** or an IPv6 address like **cb58:159f:6941:1122:b39e:175e:c5d0:f36f**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **3f:73:36:4d:5f:9d**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://mertz.com you initially access a DNS server to translate the host portion (mertz) combined with the Top Level Domain com of the URL, to an IP address like **202.10.30.153**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **169.254.255.176** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
