---
title: "How To Fix IP Connectivity"
subtitle: "Infographic?"
layout: research
ip_v4_address: "18.154.136.202"
date: 2022-04-20T13:22:15+01:00
draft: true
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like **18.154.136.202** or an IPv6 address like **c848:280e:a429:71a3:f7ea:188e:bfb2:1616**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **f2:a3:e7:ea:42:fd**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://rice.info you initially access a DNS server to translate the host portion (rice) combined with the Top Level Domain info of the URL, to an IP address like **47.78.5.253**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **10.51.209.37** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
