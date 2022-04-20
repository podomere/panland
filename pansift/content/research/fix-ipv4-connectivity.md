---
title: "Fix Ipv4 Connectivity"
subtitle: "Snackable Content"
layout: research
ip_v4_address: "67.126.34.27"
date: 2022-04-20T10:57:15+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **67.126.34.27** or an IPv6 address like **dd8c:84a5:bfc8:f000:3a39:d785:286e:78e4**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **e1:44:a2:a9:63:01**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://funk-jaskolski.org you initially access a DNS server to translate the host portion (funk-jaskolski) combined with the Top Level Domain org of the URL, to an IP address like **179.69.204.41**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **100.119.16.97** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
