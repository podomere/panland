---
title: "Ipv6 Connectivity"
subtitle: "Circle Back"
layout: research
ip_v4_address: "18.210.73.75"
date: 2022-04-20T10:57:15+01:00
draft: true
---

# Internet Addressing
On the Internet you might have a Public IPv4 address like **18.210.73.75** or an IPv6 address like **51d4:f306:fd85:5cf8:3616:7384:2513:58f6**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **b6:11:50:dc:ae:00**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://abshire.io you initially access a DNS server to translate the host portion (abshire) combined with the Top Level Domain io of the URL, to an IP address like **248.107.201.218**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **172.16.196.250** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
