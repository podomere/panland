---
title: "How Do You Support Apple No-access"
subtitle: "Swag?"
layout: research
ip_v4_address: "238.110.21.27"
date: 2023-11-18T19:10:59+00:00
draft: false
---

## Understanding Internet Addressing Processes

When using the Internet, you are assigned a Public IPv4 address, such as ```238.110.21.27```, or an IPv6 address like ```2000:63cb:7ca:1ff2:34fd:ba81:2740:93e9```. You can verify your address by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, including MAC addresses like ```ab:3d:db:aa:69:2c```, can be challenging for those who are not tech-savvy and can become complicated quickly. Furthermore, this method does not provide any historical data, especially regarding previous issues.
## Navigating the World Wide Web

When attempting to access a web page, such as https://kohler.net, the initial step involves reaching out to a DNS server to translate the host portion (kohler) and the Top Level Domain (net) of the URL into an IP address, such as ```95.222.184.78```. Your computer and browser always communicate their type with each web request, for example:
```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Understanding the Significance of Default Gateways

By default, your gateway is assigned an automatically configured address through DHCP, such as ```172.18.6.10```. In most cases, these addresses end in .1 or .254, depending on the scope size. This is the location where your computer sends all of its traffic to be routed onwards. For ```IPv6```, a detailed guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is available, and you can check on Mac or Linux using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.18.6.10    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c8e2:90d:192d:919e%en0  UGcg   en0
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
domain_name_server (ip_mult): {140.48.247.246, 100.174.243.194}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ab:3d:db:aa:69:2c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 04:65:42:fb:3f:ef
}</pre>




## Fixing Connectivity Issues for Wired or Wireless Networks

When it comes to sending data at the physical and data layer, you have the option to use either a wired or wireless (Wi-Fi) medium to transmit the data to your router.
### Troubleshooting Methods for Apple macOS / OSX
No matter which version of OSX/macOS you are currently using, whether it's 10.11.9, 11.5.7, or 12.1.8, there are various troubleshooting tools available. Unfortunately, the manual actions and scripts may not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that have embraced remote work and Work From Anywhere (WFA) practices.
#### Utilizing Built-in Scripts to Aid in Troubleshooting
One extremely useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump to the CLI of current wireless related settings. This can also be configured to generate specific logs for troubleshooting purposes. Additionally, the more comprehensive ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of the information is only relevant to wireless at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will produce logs in ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (although there is not much interaction), you can use the command<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder or use Cmd+Shift+G to point Finder to the path. Be cautious of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
