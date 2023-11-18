---
title: "How Can I DiagnOSe Apple Issues"
subtitle: "Swag?"
layout: research
ip_v4_address: "227.94.132.81"
date: 2023-11-18T18:56:07+00:00
draft: false
---

## Introduction to Internet Addressing

When using the Internet, individuals are assigned a Public IPv4 address or an IPv6 address, both of which can be checked using the website https://test-ipv6.com/. However, conveying or referencing these addresses, as well as MAC addresses, can be error-prone and complex, especially for those who are not technologically inclined. Moreover, this method does not provide any historical data, particularly related to past issues.
## Navigating the World Wide Web

In order to access a website such as https://marquardt-gibson.biz, users initially connect to a DNS server to convert the host portion (marquardt-gibson) along with the Top Level Domain (biz) of the URL into an IP address. When making web requests, the computer and browser also transmit their type, for example: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## Understanding the Significance of Default Gateways

By default, a gateway is automatically assigned via DHCP, typically ending in .1 or .254 depending on the size of the scope. This designated gateway is where all traffic from the computer is routed. For IPv6 settings, a detailed explanation is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and on Mac or Linux systems it can be checked using:

<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.16.50.212    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:eca4:2fdb:fee4:b0ee%en0  UGcg   en0
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
domain_name_server (ip_mult): {78.11.252.131, 17.86.207.199}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 31:4b:6b:3c:bf:4c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c6:6a:3b:f3:75:9d
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks

Whether you're using a wired or wireless (Wi-Fi) connection at the physical and data layer, it's important to ensure the smooth transmission of data to your router.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of your OSX or macOS version—be it 10.14.3, 11.6.9, or 12.1.3—there is a variety of troubleshooting tools available. However, these manual actions and scripts may not provide a consistent set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams engaged in remote work and Work From Anywhere (WFA) scenarios.
#### Using Built-in Scripts to Diagnose Issues
One valuable tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a detailed dump of current wireless settings and can also generate specific logs for troubleshooting purposes. For a more comprehensive approach, the ```sysdiagnose``` tool can be employed to generate a wide range of logs, although many are only relevant to a specific moment in time, similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and save the logs to ```/var/tmp/<blah>.tar.gz```, or to run it interactively, simply execute ```sudo /usr/bin/sysdiagnose```. However, keep in mind that the file sizes can be quite large, averaging around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
