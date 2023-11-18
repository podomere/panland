---
title: "Fix Mac No-access"
subtitle: "Streamline?"
layout: research
ip_v4_address: "117.40.234.205"
date: 2023-11-18T19:13:40+00:00
draft: false
---

## Understanding the Function of Internet Addresses

When connecting to the Internet, you are assigned either a Public IPv4 address, such as ```117.40.234.205```, or an IPv6 address, like ```32:96f:49a:8722:be62:e83e:7ad5:5563```. It is possible to verify these addresses using [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not technologically inclined, attempting to communicate these addresses, or even mentioning MAC addresses, like ```de:fc:c6:19:79:0b```, can be prone to errors and quickly become complex. Moreover, this information does not offer any historical data, especially from past issues.
## Navigating Through the World Wide Web

When attempting to access a web page, such as https://mayert.info, you must first connect to a DNS server to convert the host portion (mayert) combined with the Top Level Domain (info) of the URL into an IP address, like ```130.179.111.21```. Your computer and browser transmit their type with all web requests, for instance: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```.
## Understanding the Significance of Default Gateways

Typically, your default gateway is an address that is automatically configured through DHCP. It is similar to obtaining a default gateway, such as ```172.17.6.79``` (although they usually end in .1 or .254 based on the scope size), which serves as the destination for all of your computer's traffic before it is routed forward. For IPv6, a comprehensive guide is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can validate this on a Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.17.6.79    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2931:bcfd:fd2f:e191%en0  UGcg   en0
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
domain_name_server (ip_mult): {80.72.8.193, 26.110.79.22}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr de:fc:c6:19:79:0b
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e0:ae:39:83:f1:fb
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks

When it comes to transmitting data, you might be using either a wired or a wireless (Wi-Fi) medium, operating at the physical and data layer to send information to your router.
### Troubleshooting Tips for Apple's macOS / OSX

Regardless of the version of OSX/macOS you are using, whether it's ```10.13.9```, ```11.2.8```, or ```12.3.9```, there are various tools available for troubleshooting. However, manual actions and scripts fail to provide a series of interconnected values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Utilizing Pre-Installed Scripts for Assistance

A highly beneficial tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a detailed dump of current wireless settings to the CLI. This tool can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers more comprehensive logging capabilities, although much of it is related to wireless settings at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (although there isn't much interaction), you can use the command ```sudo /usr/bin/sysdiagnose```, which will trigger a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using the Finder with Cmd+Shift+G. However, be mindful of the file sizes, which can be approximately 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
