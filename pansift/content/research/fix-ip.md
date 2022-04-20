---
title: "Fix IP"
subtitle: "Expansion Play?"
layout: research
ip_v4_address: "26.193.205.237"
date: 2022-04-20T13:22:15+01:00
draft: true
---

# Internet Addressing
On the Internet you may get a Public IPv4 address like **26.193.205.237** or an IPv6 address like **be0c:49b2:a715:9491:b49e:9bd8:2741:da**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **7a:fe:09:11:42:64**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://oberbrunner.org you initially access a DNS server to translate the host portion (oberbrunner) combined with the Top Level Domain org of the URL, to an IP address like **154.222.75.190**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **169.254.232.209** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
