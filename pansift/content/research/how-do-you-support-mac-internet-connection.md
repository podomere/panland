---
title: "How Do You Support Mac Internet Connection"
subtitle: "Customer Journey?"
layout: research
ip_v4_address: "160.74.114.77"
date: 2023-11-18T19:44:56+00:00
draft: false
---

## Understanding the Function of Internet Addressing

When using the Internet, you are assigned either a Public IPv4 address, such as ```160.74.114.77```, or an IPv6 address like ```2000:a5b8:4d7b:b18:fba2:d487:e3c8:a70```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining these addresses or referencing MAC addresses like ```c3:ef:8b:e0:ca:c8``` to those who are not familiar with technology can be prone to errors and becomes complex rather quickly. Moreover, this method does not provide historical data, particularly when past issues arise.
## Navigating Through the Internet

In order to reach a website such as https://bauch.net, your first step is to connect to a DNS server to translate the domain name (bauch) in combination with the Top Level Domain (net) of the URL into an IP address, such as ```124.75.62.223```. Your computer and browser include their types with all web requests, such as <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```.
## Significance of Default Gateways

Your default gateway is typically automatically configured through DHCP and is assigned an address such as ```10.50.224.207``` (although they commonly end in .1 or .254 based on the scope size). This is the location where your computer routes all of its traffic for further transmission. To explore further on ```IPv6```, you can refer to our in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or check on Mac or Linux utilizing the following command:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.50.224.207    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c4a9:31ec:a1aa:fd15%en0  UGcg   en0
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
domain_name_server (ip_mult): {172.80.64.188, 77.161.104.9}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c3:ef:8b:e0:ca:c8
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr bb:81:d2:f4:00:87
}</pre>




## Resolve Issues with Wired and Wireless Connections

When it comes to transmitting data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Actions to Take on Apple macOS / OSX Systems
Regardless of whether you are using OSX or macOS versions such as ```10.12.3```, ```11.5.7```, or ```12.3.5```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over a period of time. This is where automated remote troubleshooting becomes valuable, especially for teams that are engaged in remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
On OSX/macOS, the ```sudo wdutil info``` tool is quite helpful as it provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. In addition, the more comprehensive ```sysdiagnose``` tool can be used to generate a wide range of logs, although many are only relevant to wireless at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will create logs in ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (although there is not much interaction), you can execute```sudo /usr/bin/sysdiagnose``` with a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. However, be aware of file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
