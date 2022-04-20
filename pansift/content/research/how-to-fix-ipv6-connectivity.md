---
title: "How To Fix Ipv6 Connectivity"
subtitle: "Streamline"
layout: research
ip_v4_address: "94.127.78.115"
date: 2022-04-20T10:57:15+01:00
draft: true
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **94.127.78.115** or an IPv6 address like **635:b4d3:6f2:af23:6b71:949a:3ece:9349**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **4b:2b:80:bd:b3:8d**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://reichert.com you initially access a DNS server to translate the host portion (reichert) combined with the Top Level Domain com of the URL, to an IP address like **163.2.164.42**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **192.168.4.129** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
