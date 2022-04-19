---
title: "Fix Ipv4"
subtitle: "Immersive Experience"
layout: research
ip_v4_address: "154.14.194.102"
date: 2022-04-19T21:18:20+01:00
draft: true
---

# Internet Addressing
On the Internet you may get a Public IPv4 address like **154.14.194.102** or an IPv6 address like **6eb8:6e7f:a7f2:ef5e:afe9:b2ce:a3bc:539e**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **e5:04:c8:e9:b1:fa**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://harber.name you initially access a DNS server to translate the host portion (harber) of the URL to an IP address like **136.44.54.58**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **169.254.243.238** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
