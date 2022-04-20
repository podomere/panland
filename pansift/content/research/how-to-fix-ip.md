---
title: "How To Fix IP"
subtitle: "Tee It Up?"
layout: research
ip_v4_address: "85.212.183.88"
date: 2022-04-20T13:22:15+01:00
draft: true
---

# Internet Addressing
On the Internet you might have a Public IPv4 address like **85.212.183.88** or an IPv6 address like **cf6a:c860:c555:cd08:7580:92e:14ce:97b3**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **be:df:16:c1:29:08**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://flatley-rempel.io you initially access a DNS server to translate the host portion (flatley-rempel) combined with the Top Level Domain io of the URL, to an IP address like **49.14.243.231**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **192.168.189.195** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
