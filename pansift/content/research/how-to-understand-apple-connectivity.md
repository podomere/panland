---
title: "How To Understand Apple Connectivity"
subtitle: "Swim Lane?"
layout: research
ip_v4_address: "117.119.64.67"
date: 2023-11-18T18:53:46+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a public IP address, which can either be in the IPv4 format like ```117.119.64.67```, or in the IPv6 format like ```2000:3670:50ff:2c1c:1fb2:c21b:5136:3eaf```. You can verify your assigned address at [https://test-ipv6.com/](https://test-ipv6.com/). However, it can be challenging for non-technical individuals to communicate or identify these addresses, including MAC addresses like ```84:72:b5:32:f1:30```. Furthermore, this method does not provide historical data on past issues.
## Navigating the World Wide Web
To reach a website such as https://prohaska.org, you initially connect to a DNS server to convert the host portion (prohaska) along with the Top Level Domain (org) of the URL into an IP address, such as ```219.43.175.96```. Your computer and browser also include specific type information with all web requests, for example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Significance of Default Gateways
The default gateway is typically an automatically assigned address through DHCP. This gateway, such as ```192.168.165.37``` (usually ending in .1 or .254), is where your computer forwards all its traffic to be routed to other destinations. For ```IPv6```, detailed information on troubleshooting connectivity can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and can be checked on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.165.37    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:a8de:3edf:96aa:7a13%en0  UGcg   en0
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
domain_name_server (ip_mult): {244.188.127.173, 6.161.172.14}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 84:72:b5:32:f1:30
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 4a:f2:0d:9b:0b:6e
}</pre>




## Dealing with Issues in Wired and Wireless Connections
Whether you are using a wired or wireless (Wi-Fi) medium at the physical and data layer to transmit data to your router, troubleshooting can be a crucial task.
### Troubleshooting Tips for Apple macOS / OSX Users
Irrespective of the version of OSX/macOS you are running, such as ```10.13.7```, ```11.1.4```, or ```12.2.9```, there exists a variety of tools to resolve issues. However, the existing manual interventions and scripts fail to provide a set of correlated values over time. This is where automated remote troubleshooting becomes particularly valuable, especially for teams that endorse remote work and Work From Anywhere (WFA).
#### Useful Built-in Tools for Troubleshooting
One notable tool on OSX/macOS is ```sudo wdutil info```, which produces a dump to the CLI of current wireless settings and can be configured to generate specific logs for troubleshooting. Moreover, the ```sysdiagnose``` tool offers a more comprehensive approach by generating a wide array of logs, although much of it is only pertinent to wireless settings like wdutil.

By running ```sudo nohup /usr/bin/sysdiagnose -u &```, the tool can be executed in the background and will write logs to ```/var/tmp/<blah>.tar.gz```. For interactive use, you can run<br>```sudo /usr/bin/sysdiagnose``` and a privacy warning will be displayed. Running it this way should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. However, be mindful of file sizes, which can be around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
