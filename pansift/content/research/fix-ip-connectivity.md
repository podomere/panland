---
title: "Fix IP Connectivity"
subtitle: "Branding?"
layout: research
ip_v4_address: "250.63.100.139"
date: 2022-04-20T13:22:15+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **250.63.100.139** or an IPv6 address like **83bb:fb53:ae26:d70c:9cc6:86e0:e939:927c**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **f4:59:32:53:14:b8**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://lebsack.co you initially access a DNS server to translate the host portion (lebsack) combined with the Top Level Domain co of the URL, to an IP address like **41.79.142.179**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **198.18.147.63** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
