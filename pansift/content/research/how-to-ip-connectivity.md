---
title: "How To IP Connectivity"
subtitle: "Had To 'punt' On That?"
layout: research
ip_v4_address: "179.59.47.127"
date: 2022-04-20T13:22:15+01:00
draft: true
---

# Internet Addressing
On the Internet you might have a Public IPv4 address like **179.59.47.127** or an IPv6 address like **4bae:aee:f76d:e68a:9db4:a33d:8713:5868**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **f6:9c:04:77:0e:60**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://flatley.co you initially access a DNS server to translate the host portion (flatley) combined with the Top Level Domain co of the URL, to an IP address like **120.177.133.163**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **172.18.116.50** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
