---
title: "Fix Ipv4"
subtitle: "Branding"
layout: research
ip_v4_address: "244.145.62.185"
date: 2022-04-20T10:57:15+01:00
draft: true
---

# Internet Addressing
On the Internet you may get a Public IPv4 address like **244.145.62.185** or an IPv6 address like **1997:2b2c:8585:9b1:4e66:139b:d747:13f3**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **5a:ed:ec:42:c9:99**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://johnston.info you initially access a DNS server to translate the host portion (johnston) combined with the Top Level Domain info of the URL, to an IP address like **149.137.149.240**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **127.66.117.163** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
