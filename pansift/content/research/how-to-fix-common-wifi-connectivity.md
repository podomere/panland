---
title: "How To Fix Common Wifi Connectivity"
subtitle: "Buying Cycle?"
layout: research
ip_v4_address: "154.82.181.107"
date: 2023-11-18T21:13:34+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When using the Internet, it is common to receive a Public IPv4 address such as ```154.82.181.107``` or an IPv6 address like ```2000:28f6:3c21:ad43:6086:b458:2a0d:5f67```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, sharing these addresses with individuals who are not tech-savvy or even mentioning MAC addresses like ```77:3d:ea:a9:c7:45``` can lead to errors and can become complex quickly. Moreover, this method does not provide any historical data, particularly regarding past issues.
## Navigating the World Wide Web

When attempting to access a website such as https://ratke.biz, the first step involves reaching out to a DNS server to convert the host part (ratke) along with the Top Level Domain (biz) of the URL into an IP address, for example, ```116.223.191.128```. Your computer and browser include information about their type with each web request, such as ```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```.
## Significance of Default Gateways

Typically, your default gateway is an address that is automatically configured through DHCP. This default gateway, like ```192.168.73.64``` (although they generally end in .1 or .254 based on the scope size), is where your computer forwards all its traffic to be further routed. For ```IPv6```, detailed information on this topic can be found [here](/blog/how-to-fix-ipv6-connectivity/). You can also perform this check on Mac or Linux by using the following command:

### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.73.64    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:e928:d3c8:eead:eaa5%en0  UGcg   en0
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
domain_name_server (ip_mult): {115.191.71.253, 190.110.220.170}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 77:3d:ea:a9:c7:45
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 84:e4:02:cb:ee:e5
}</pre>




## Fixing Connectivity Issues for Wired or Wireless Networks
When it comes to transmitting data to your router, you might be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting for Apple macOS / OSX Users
Irrespective of whether you are running OSX/macOS versions such as 10.13.7, 11.3.2, or 12.2.2, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over a period of time. This is where automated remote troubleshooting becomes invaluable, especially for teams that are inclined towards remote work and Work From Anywhere (WFA) environments.
#### Leveraging Built-in Scripts for Assistance
One extremely useful tool on OSX/macOS is the `sudo wdutil info` command, which offers a dump of current wireless settings to the CLI, and can also be configured to generate specific logs for troubleshooting purposes. Moreover, the `sysdiagnose` tool can be used to generate a multitude of logs, although most of the data relates specifically to wireless and is only relevant at a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will generate logs in `/var/tmp/<blah>.tar.gz`. If you prefer to run it *interactively*, you can use the `sudo /usr/bin/sysdiagnose` command, which will prompt a privacy warning. If not running in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. However, be mindful of the file sizes, which range from about 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
