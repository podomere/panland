---
title: "How To Troubleshoot Wifi No Access"
subtitle: "Best Practice?"
layout: research
ip_v4_address: "156.142.81.99"
date: 2023-11-18T20:54:21+00:00
draft: false
---

## Explanation of Internet Addressing

When using the Internet, we are assigned a Public IPv4 address (like `156.142.81.99`) or an IPv6 address (like `2000:a00:ee91:c17:7ef9:5ed4:6ba6:9cb5`). The process of communicating these addresses, or MAC addresses (like `25:52:dd:2e:83:f4`), can be complicated, especially for those who are not well-versed in technology. Additionally, this method does not provide any historical data.
## Process of Accessing the Internet

Accessing websites, such as `https://stamm-mosciski.co`, involves initially accessing a DNS server to translate the URL, consisting of the host portion (stamm-mosciski) and the Top Level Domain (co), into an IP address (like `22.102.35.174`). Furthermore, each web request sent from your computer and browser includes the type of browser being used, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Significance of Default Gateways

The default gateway, typically obtained through DHCP, is an automatically configured address (like `192.0.0.142`) where your computer sends all its traffic to be routed onwards. For `IPv6`, a more detailed guide can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, you can check the default gateway using the following method:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.142    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2a43:ed5d:5b8f:75e%en0  UGcg   en0
default   fe80::%utun0                   UGcIg  utun0
default   fe80::%utun1                   UGcIg  utun1
default   fe80::%utun2                   UGcIg  utun2
2000::/3  utun3                          USc    utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v6 address space.
<br>

## Debugging DHCP for both IPv4 and IPv6

To get a look at the low level DHCP configuration (Mac/Linux): 

```ipconfig getpacket en0```

<pre>
...
domain_name_server (ip_mult): {85.154.39.110, 147.163.69.230}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 25:52:dd:2e:83:f4
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e5:6d:3e:4a:db:0a
}</pre>




## Analyzing and Resolving Connectivity Issues

In the realm of physical and data layer connectivity, users may utilize either a wired or wireless (Wi-Fi) medium to transmit data to their router.
### Steps to Follow for Apple's macOS / OSX Platform
Irrespective of the version of OSX/macOS being used – be it 10.11.6, 11.6.3, or 12.2.1 – there exists a plethora of tools available for diagnosing connectivity issues. Regrettably, these manual interventions and scripts fail to provide a comprehensive set of interconnected values over a period. This is where the significance of automated remote troubleshooting comes into play, especially for teams advocating remote work and Work From Anywhere (WFA).
#### Pre-Installed Scripts for Troubleshooting
An immensely useful tool on OSX/macOS is the `sudo wdutil info`, which offers a detailed report of current wireless settings through the CLI. Furthermore, it can be configured to produce specific logs for troubleshooting purposes. Moreover, the `sysdiagnose` tool, although mainly offering point-in-time logs related to wireless like wdutil, provides a more extensive range of logs.

By executing `sudo nohup /usr/bin/sysdiagnose -u &`, the tool can be run in the background, while simultaneously writing logs to `/var/tmp/<blah>.tar.gz`. If there is a preference for an *interactive* (although minimal interaction) setup, running `sudo /usr/bin/sysdiagnose` will trigger a privacy warning. Not running it in the background should prompt Finder to open in the correct location, or users can manually navigate to `/var/tmp` using Finder or employ Cmd+Shift+G to guide Finder to the specified path. It is advisable to be mindful of the file sizes, which typically hover around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
