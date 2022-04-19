---
title: "How To Ipv6 Connectivity"
subtitle: "Two-way Street"
layout: research
ip_v4_address: "146.192.203.195"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you might have a Public IPv4 address like **146.192.203.195** or an IPv6 address like **93f6:61f9:4ab1:f97d:d3d9:2c4e:6e41:dca3**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **dd:83:88:a1:09:93**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://emmerich.info you initially access a DNS server to translate the host portion (emmerich) of the URL to an IP address like **82.86.92.228**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **127.202.96.166** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
