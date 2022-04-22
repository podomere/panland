---
title: "Fix IP"
subtitle: "Bucketize It?"
layout: research
ip_v4_address: "205.226.183.79"
date: 2022-04-22T16:32:20+01:00
draft: false
---

# Internet Addressing
On the Internet you may get a Public IPv4 address like **205.226.183.79** or an IPv6 address like **635f:91b1:4846:fadd:a49:46d1:df35:31e**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **b7:2e:f9:09:80:cc**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://corwin.info you initially access a DNS server to translate the host portion (corwin) combined with the Top Level Domain info of the URL, to an IP address like **78.217.150.200**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **127.249.220.202** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

# Apple macOS / OSX
No matter what version you are on, **10.11.7**, **11.1.5**, or **12.0.9**, there are a range of tools for troubleshooting but between manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especialy for teams that embrace remote work and Work From Anywhere (WFA).

# Possible Helpful Videos

|Video | Title/Description |
| :---: | :---: |  
| [![](https://i.ytimg.com/vi/8GQaWCjS-vk/default.jpg)](https://www.youtube.com/watch?v=8GQaWCjS-vk) | WLAN Analysis Tricks | Peter Mackenzie | WLPC Phoenix 2020 |
| [![](https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg)](https://www.youtube.com/watch?v=1G4qihqHZJ0) | Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out |
| [![](https://i.ytimg.com/vi/jfwfe4DVfdw/default.jpg)](https://www.youtube.com/watch?v=jfwfe4DVfdw) | Cambium XV3-8 Wi-Fi 6 Access Point Review with Ferney Muñoz |
