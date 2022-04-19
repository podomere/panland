---
title: "How To Ipv4"
subtitle: "Heads Down"
layout: research
ip_v4_address: "34.185.168.254"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **34.185.168.254** or an IPv6 address like **aef1:d1d:c295:eaac:c81e:c0a3:a76e:3b5d**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **4b:42:5d:d2:c6:e0**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://feest.com you initially access a DNS server to translate the host portion (feest) of the URL to an IP address like **166.101.200.75**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **192.168.143.154** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
