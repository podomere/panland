---
title: "Ipv6"
subtitle: "Swag"
layout: research
ip_v4_address: "226.157.194.123"
date: 2022-04-20T10:57:15+01:00
draft: false
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **226.157.194.123** or an IPv6 address like **b13e:b56e:a7b4:ccc1:969e:e52d:de27:b7d9**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **16:fe:08:2c:36:ce**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://zulauf-davis.com you initially access a DNS server to translate the host portion (zulauf-davis) combined with the Top Level Domain com of the URL, to an IP address like **30.228.68.246**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **192.168.124.170** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 
