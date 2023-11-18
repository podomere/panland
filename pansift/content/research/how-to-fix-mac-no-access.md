---
title: "How To Fix Mac No-access"
subtitle: "Etc. Etc.?"
layout: research
ip_v4_address: "134.97.29.128"
date: 2023-11-18T19:22:28+00:00
draft: false
---

## Understanding Internet Protocol Addressing

The way the Internet assigns addresses may result in receiving a Public IPv4 address such as ```134.97.29.128``` or an IPv6 address like ```2000:ebef:bcc:fb17:4a1f:b7f3:1449:afd5```. Validation of this can be done through [https://test-ipv6.com/](https://test-ipv6.com/), however, for those without technical expertise, communicating these addresses or MAC addresses like ```68:54:bb:0c:37:95``` can be prone to errors and quickly become complex. Furthermore, it does not provide historical data.
## Navigating the World Wide Web
To access a website such as https://lakin.info, you initially contact a DNS server to convert the host portion (lakin) along with the Top Level Domain (info) of the URL into an IP address, such as ```157.83.154.100```. In all web requests, your computer and browser send its type, for example: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## The Significance of Default Gateways
Usually, your default gateway is an address configured automatically via DHCP. It usually ends in .1 or .254, depending on the scope size, such as ```192.168.140.191```. This is where your computer sends all its traffic to be routed onwards. For ```IPv6```, a comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is available, but you can verify on Mac or Linux using:

```shell
command
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.140.191    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:bcd3:2f02:9a19:f2da%en0  UGcg   en0
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
domain_name_server (ip_mult): {53.62.69.208, 73.228.6.63}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 68:54:bb:0c:37:95
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 78:c9:6a:78:e6:7e
}</pre>




## Fixing Network Connectivity Issues

When it comes to sending data to your router at the physical and data layer, you may encounter connectivity issues with wired or wireless (Wi-Fi) mediums.
### How to Troubleshoot Network Problems on Apple Devices

Regardless of which version of OSX/macOS you are using - whether it's ```10.11.6```, ```11.4.3```, or ```12.1.9``` - there are various troubleshooting tools available. However, the manual actions and scripts may not provide a comprehensive set of correlated values over time. This is where automated remote troubleshooting becomes essential, particularly for teams that are transitioning towards remote work and adopting a Work From Anywhere (WFA) approach.
#### Utilizing Built-in Scripts for Assistance

One extremely useful tool on OSX/macOS is ```sudo wdutil info```, which provides a command-line dump of current wireless settings and can be configured to generate specific troubleshooting logs. Moreover, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs, although much of it is only relevant to wireless networks, similar to wdutil.

To run the ```sysdiagnose``` tool in the background and generate logs at ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer running it interactively, you can utilize ```sudo /usr/bin/sysdiagnose``` with the necessary privacy warnings. Keep in mind that the file sizes can be around 300MB or slightly more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
