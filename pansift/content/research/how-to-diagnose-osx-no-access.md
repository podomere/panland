---
title: "How To DiagnOSe OSX No-access"
subtitle: "Best Practice?"
layout: research
ip_v4_address: "1.63.61.134"
date: 2023-11-18T18:10:06+00:00
draft: false
---

## Demystifying Internet Addressing

When using the Internet, you may be assigned a Public IPv4 address such as ```1.63.61.134``` or an IPv6 address like ```2000:2763:c381:c0f5:9985:7f5b:eda9:dc38```. Verification of this information can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses to non-technical individuals or even mentioning MAC addresses like ```8a:ed:e4:be:f9:3b``` can be challenging and prone to errors. This approach also lacks historical data, especially when dealing with previous issues.
## Navigating the World Wide Web
Accessing a webpage such as https://wilderman-steuber.info involves initially reaching a DNS server to convert the host part (wilderman-steuber) and the Top Level Domain (info) of the URL into an IP address like ```70.139.221.228```. Every web request from your computer and browser contains its type, for instance: 
```
Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36
```
## Understanding the Significance of Default Gateways
The default gateway is typically an automatically assigned address through DHCP. You are given a default gateway like ```172.26.187.90``` (normally ending in .1 or .254 based on the scope size), which is where your computer forwards all its traffic to be routed further. For ```IPv6```, a detailed explanation is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Verification on Mac or Linux can be done with:
```
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.26.187.90    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:a216:5a12:6c33:23b1%en0  UGcg   en0
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
domain_name_server (ip_mult): {16.187.37.166, 42.135.146.34}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 8a:ed:e4:be:f9:3b
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr d8:de:de:03:c7:37
}</pre>




## Resolve Issues with Wired and Wireless Connections
When dealing with the physical and data layer, you have the option to use either a wired or wireless (Wi-Fi) medium to transmit data to your router.
### Methods for Apple macOS / OSX Troubleshooting
Regardless of whether you are using OSX/macOS versions such as ```10.14.5```, ```11.4.4```, or ```12.3.5```, there are various troubleshooting tools available. However, manual actions and scripts do not provide a set of interconnected values over a specific period of time. This is where automated remote troubleshooting becomes essential, especially for teams that are transitioning towards remote work and Work From Anywhere (WFA) setups.
#### Utilizing Built-in Scripts for Assistance
A valuable tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a detailed report of the current wireless settings through the command line interface and can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers a more comprehensive approach to generating a wide range of logs, although most of the information is only relevant at a specific point in time, similar to the wdutil tool.

By running the command ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background, the tool will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (even though there is minimal interaction), you can execute the command<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can manually navigate to ```/var/tmp``` or use Finder along with Cmd+Shift+G to specify the path. However, be mindful of the file sizes, which can be around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
