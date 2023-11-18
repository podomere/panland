---
title: "Understand MacOS IP Settings"
subtitle: "Swim Lane?"
layout: research
ip_v4_address: "122.9.186.94"
date: 2023-11-18T17:22:46+00:00
draft: false
---

## The Functionality of Internet Addressing

When using the Internet, you are assigned a unique Public IPv4 address, such as ```122.9.186.94```, or an IPv6 address, like ```2000:e634:48e2:66a5:513f:baab:1ec5:cb33```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining or sharing these addresses, as well as MAC addresses like ```a0:9e:4b:4f:eb:67```, can be a challenging task, especially for individuals who are not tech-savvy. Moreover, this method does not provide any historical data, particularly during previous occurrences of issues.
## Navigating the World Wide Web

To access a website, such as https://emmerich.org, your computer first contacts a DNS server to convert the domain name (emmerich) combined with the Top Level Domain (org) into an IP address, like ```30.159.232.195```. When making web requests, your computer and browser also include information about their type, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```.
## Understanding the Significance of Default Gateways

The default gateway is typically an address that is automatically configured through DHCP. This gateway, such as ```192.0.0.16``` (commonly ending in .1 or .254 based on scope size), is responsible for routing all of your computer's traffic. Detailed instructions for checking default gateways for ```IPv6``` can be found in our in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and the process can also be performed on Mac or Linux systems.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.16    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:412c:cdb9:8e6b:9b04%en0  UGcg   en0
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
domain_name_server (ip_mult): {118.118.2.17, 221.96.17.134}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a0:9e:4b:4f:eb:67
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 37:a7:85:cf:b7:e3
}</pre>




## Solutions for Resolving Connectivity Issues

When it comes to transferring data to your router, you may encounter issues at the physical and data layer, whether you are using a wired or wireless (Wi-Fi) medium.
### Steps for Troubleshooting on Apple macOS / OSX
Regardless of whether you are using OSX or macOS version ```10.12.8```, ```11.4.4```, or ```12.0.9```, there are various tools available for troubleshooting. However, the manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes crucial, particularly for teams that are engaged in remote work and Work From Anywhere (WFA).
#### Useful Built-in Tools
On OSX/macOS, a useful tool for troubleshooting is ```sudo wdutil info```, which provides a dump of current wireless related settings to the command line interface. It can also be configured to generate specific logs for troubleshooting purposes. Moreover, the ```sysdiagnose``` tool offers a more comprehensive range of logs (although much of it is only related to wireless settings like wdutil).

To run ```sysdiagnose``` in the background and generate logs at ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, use ```sudo /usr/bin/sysdiagnose``` and follow the privacy warning. Be cautious of the large file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
