---
title: "How To IP"
subtitle: "Bandwidth-constrained?"
layout: research
ip_v4_address: "143.254.117.15"
date: 2022-04-20T13:22:15+01:00
draft: true
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **143.254.117.15** or an IPv6 address like **b0a8:8ac8:3e1:afda:8dad:365b:d993:63ad**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **27:31:49:84:07:93**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://huel-klein.org you initially access a DNS server to translate the host portion (huel-klein) combined with the Top Level Domain org of the URL, to an IP address like **57.129.146.121**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **127.101.204.9** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
