---
title: "IP Connectivity"
subtitle: "Button Up The Loose Ends?"
layout: research
ip_v4_address: "7.39.174.155"
date: 2022-04-22T17:13:36+01:00
draft: false
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **7.39.174.155** or an IPv6 address like **b3db:fcfb:b213:adfd:e466:4b42:97a2:c102**. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **41:25:ad:7e:3d:13**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://deckow-okuneva.org you initially access a DNS server to translate the host portion (deckow-okuneva) combined with the Top Level Domain org of the URL, to an IP address like **41.162.10.219**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **100.113.219.80** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

# Apple macOS / OSX
No matter what version you are on, **10.14.2**, **11.2.3**, or **12.0.1**, there are a range of tools for troubleshooting but between manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especialy for teams that embrace remote work and Work From Anywhere (WFA).

# Possible Helpful Videos

|Video | Title/Description |
| :---: | :---: |  
| [![](https://i.ytimg.com/vi/8GQaWCjS-vk/default.jpg)](https://www.youtube.com/watch?v=8GQaWCjS-vk) | WLAN Analysis Tricks | Peter Mackenzie | WLPC Phoenix 2020 |
| [![](https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg)](https://www.youtube.com/watch?v=1G4qihqHZJ0) | Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out |
| [![](https://i.ytimg.com/vi/jfwfe4DVfdw/default.jpg)](https://www.youtube.com/watch?v=jfwfe4DVfdw) | Cambium XV3-8 Wi-Fi 6 Access Point Review with Ferney Muñoz |
