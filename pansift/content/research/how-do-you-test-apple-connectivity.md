---
title: "How Do You Test Apple Connectivity"
subtitle: "Data Points?"
layout: research
ip_v4_address: "225.252.57.81"
date: 2023-11-18T19:07:30+00:00
draft: false
---

## Demystifying Internet Addressing

When using the Internet, you will be assigned a Public IPv4 address, such as ```225.252.57.81```, or an IPv6 address, such as ```2000:6f31:3791:39e9:3fc0:1f86:3390:93ee```. You can verify your assigned address at [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining these addresses, or even MAC addresses like ```14:ae:23:42:72:f8```, to individuals who are not familiar with technical jargon can lead to errors and confusion. Furthermore, this method does not provide any historical data, especially regarding past issues.
## Navigating the World Wide Web

When attempting to access a website, such as https://greenholt.name, you first contact a DNS server to translate the host portion (greenholt) and the Top Level Domain (name) of the URL into an IP address, such as ```67.167.248.10```. Your computer and browser convey their type with each web request, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding the Role of Default Gateways

Your default gateway is typically an address that is automatically configured through DHCP. This address, such as ```10.255.219.98``` (although they usually end in .1 or .254 based on the size of the scope), is where your computer directs all of its traffic to be routed elsewhere. For ```IPv6```, you can find detailed instructions on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or check on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.255.219.98    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:6ca:10dd:ed4f:9565%en0  UGcg   en0
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
domain_name_server (ip_mult): {28.28.229.101, 66.149.191.83}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 14:ae:23:42:72:f8
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 24:c5:89:cf:53:06
}</pre>




## Dealing with Wired and Wireless Connectivity Issues

When it comes to sending data to your router, you might be using either a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS version ```10.14.8```, ```11.2.7```, or ```12.3.9```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that are remote and embrace the Work From Anywhere (WFA) concept.
#### Useful Built-in Scripts
One useful tool for OSX/macOS users is ```sudo wdutil info```, which provides a dump of current wireless settings to the command line interface. This tool can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a variety of logs, although much of it relates to wireless and is only point-in-time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute the tool in the background and write logs to ```/var/tmp/<blah>.tar.gz```. Alternatively, running it *interactively* by executing ```sudo /usr/bin/sysdiagnose``` will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or users can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. It is important to note that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
