---
title: "How To Fix Wifi Internet Issues"
subtitle: "Two-way Street?"
layout: research
ip_v4_address: "38.191.147.98"
date: 2023-11-18T20:52:36+00:00
draft: false
---

## Explanation of Internet Addressing

When using the Internet, individuals receive either a Public IPv4 address, such as `38.191.147.98` or an IPv6 address, for example `2000:2877:1b8b:1409:fe42:867a:ec7b:8122`. A simple way to confirm this information is by visiting [https://test-ipv6.com/](https://test-ipv6.com/). Communicating these addresses, or even MAC addresses like `d6:fd:38:70:10:02`, can be challenging, especially for those who are not technologically savvy. Moreover, this method does not provide any historical data, particularly when past issues arise.
## Process of Accessing the Web

Accessing a website like https://goyette-beahan.org involves initially connecting to a DNS server to convert the host portion (goyette-beahan) along with the Top Level Domain (org) of the URL into an IP address, such as `226.149.252.87`. In every web request, one's computer and browser include information about their type, for instance:
```<br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## Understanding the Significance of Default Gateways

Typically, the default gateway is an address that is automatically configured through DHCP, such as `172.17.101.35` (commonly ending in .1 or .254 based on the scope size). This is the location where all the traffic from a computer is sent to be routed onwards. More information about `IPv6` can be found in our in-depth analysis at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, the status of the default gateway can be verified using:
```<br>```sipcalc```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.17.101.35    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5c49:2a6d:99e4:eb22%en0  UGcg   en0
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
domain_name_server (ip_mult): {62.64.76.12, 40.141.190.155}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr d6:fd:38:70:10:02
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 8c:5b:cb:ad:6d:e1
}</pre>




## Troubleshooting Connectivity Issues
Whether you are using a wired or wireless (Wi-Fi) connection, the physical and data layer are crucial in transmitting data to your router.
### Resolving Connectivity Problems on Apple Devices
Regardless of whether you are using OSX, macOS ```10.13.6```, ```11.6.8```, or ```12.0.9```, there are various troubleshooting tools available. However, these manual methods and scripts do not provide a comprehensive set of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that have embraced remote work and Work From Anywhere (WFA) culture.
#### Accessing Built-in Diagnostic Scripts
On OSX/macOS, the ```sudo wdutil info``` command can provide a dump to the CLI of current wireless settings and can also be set up to generate specific logs for troubleshooting. In addition, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs, although many are only relevant to wireless settings at a specific point in time, similar to the wdutil tool.

To run the ```sysdiagnose``` tool in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, use the command ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, the logs should open in Finder in the correct location, or you can navigate to ```/var/tmp``` using the Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
