---
title: "How To Fix IP"
subtitle: "Home Stretch?"
layout: research
ip_v4_address: "180.111.24.110"
date: 2022-04-22T16:32:20+01:00
draft: false
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like **180.111.24.110** or an IPv6 address like **6541:a242:9444:ee53:d1e0:a2ff:ce79:25c5**. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **6e:80:0f:99:36:5e**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://schiller.co you initially access a DNS server to translate the host portion (schiller) combined with the Top Level Domain co of the URL, to an IP address like **235.153.77.245**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **10.104.153.62** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

# Apple macOS / OSX
No matter what version you are on, **10.15.9**, **11.2.5**, or **12.1.8**, there are a range of tools for troubleshooting but between manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especialy for teams that embrace remote work and Work From Anywhere (WFA).

# Possible Helpful Videos

|Video | Title/Description |
| :---: | :---: |  
| [![](https://i.ytimg.com/vi/8GQaWCjS-vk/default.jpg)](https://www.youtube.com/watch?v=8GQaWCjS-vk) | WLAN Analysis Tricks | Peter Mackenzie | WLPC Phoenix 2020 |
| [![](https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg)](https://www.youtube.com/watch?v=1G4qihqHZJ0) | Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out |
| [![](https://i.ytimg.com/vi/jfwfe4DVfdw/default.jpg)](https://www.youtube.com/watch?v=jfwfe4DVfdw) | Cambium XV3-8 Wi-Fi 6 Access Point Review with Ferney Muñoz |
