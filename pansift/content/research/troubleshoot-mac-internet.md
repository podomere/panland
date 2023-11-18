---
title: "Troubleshoot Mac Internet"
subtitle: "Swim Lane?"
layout: research
ip_v4_address: "184.84.234.85"
date: 2023-11-18T19:15:43+00:00
draft: false
---

## The Fundamentals of Internet Addressing

In the world of the Internet, there are two types of IP addresses that you might come across. The first is a Public IPv4 address, which looks something like `184.84.234.85`, and the second is an IPv6 address, which appears as `2000:9df9:888:7973:f181:ffbd:2a2a:ba7b`. You can verify your address at [https://test-ipv6.com/](https://test-ipv6.com/). However, it can be quite challenging for individuals who are not tech-savvy to convey or even identify these addresses. This becomes even more complex when dealing with MAC addresses like `28:33:a7:6f:5f:35`. Furthermore, this method does not provide any historical data, particularly when faced with previous issues.
## Navigating Through the World Wide Web

Accessing a website, such as https://fisher.io, begins with reaching out to a DNS server to translate the host portion (fisher) combined with the Top Level Domain (io) of the URL into an IP address, such as `42.95.125.46`. Notably, your computer and web browser disclose their type with every web request, as shown by this example: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## Understanding the Significance of Default Gateways

Ordinarily, your default gateway is an address that is automatically configured via DHCP. For instance, you may receive a default gateway like `192.168.31.70` (although they typically end in .1 or .254 based on the scope size), which serves as the destination for all traffic from your computer to be routed. Details on troubleshooting `IPv6` connectivity are available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, you can perform checks on Mac or Linux using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.31.70    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:11e7:4f7a:8114:a165%en0  UGcg   en0
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
domain_name_server (ip_mult): {95.6.43.179, 108.195.66.13}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 28:33:a7:6f:5f:35
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 5a:43:b6:af:97:e7
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks
When it comes to transmitting data to your router, you might be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of the version of OSX/macOS you have - be it 10.13.7, 11.6.3, or 12.2.7, there are various tools available for resolving connectivity issues. However, these tools and manual actions do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that operate remotely and embrace the concept of Work From Anywhere (WFA).
#### Useful Built-in Scripts
One useful tool in OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the command line interface and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, albeit most of the information related to wireless is only relevant to a specific point in time, similar to wdutil.

To run the sysdiagnose tool in the background and generate logs, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```, which will write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it interactively, use the command ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning and open Finder in the correct location. Alternatively, you can navigate to the ```/var/tmp``` directory using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
