---
title: "Fix IP"
subtitle: "Sprint To The Finish Line?"
layout: research
ip_v4_address: "107.204.142.223"
date: 2022-04-22T17:13:36+01:00
draft: false
---

# Internet Addressing
On the Internet you might have a Public IPv4 address like **107.204.142.223** or an IPv6 address like **c598:82db:34a7:80e6:5778:c3ca:1f75:71a2**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **7f:41:98:27:7c:29**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://stehr-feil.com you initially access a DNS server to translate the host portion (stehr-feil) combined with the Top Level Domain com of the URL, to an IP address like **32.126.116.229**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **169.254.198.130** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

# Apple macOS / OSX
No matter what version you are on, **10.13.8**, **11.0.2**, or **12.1.9**, there are a range of tools for troubleshooting but between manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especialy for teams that embrace remote work and Work From Anywhere (WFA).

# Possible Helpful Videos

|Video | Title/Description |
| :---: | :---: |  
| [![](https://i.ytimg.com/vi/8GQaWCjS-vk/default.jpg)](https://www.youtube.com/watch?v=8GQaWCjS-vk) | WLAN Analysis Tricks | Peter Mackenzie | WLPC Phoenix 2020 |
| [![](https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg)](https://www.youtube.com/watch?v=1G4qihqHZJ0) | Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out |
| [![](https://i.ytimg.com/vi/jfwfe4DVfdw/default.jpg)](https://www.youtube.com/watch?v=jfwfe4DVfdw) | Cambium XV3-8 Wi-Fi 6 Access Point Review with Ferney Muñoz |
