---
title: "How To Support Common Wifi Internet Issues"
subtitle: "Data Points?"
layout: research
ip_v4_address: "229.197.87.52"
date: 2023-11-18T21:17:21+00:00
draft: false
---

## An Explanation of Internet Addressing

When using the Internet, you may receive a Public IPv4 address such as ```229.197.87.52``` or an IPv6 address like ```2000:eb78:438f:8391:8b1f:5597:7438:3b28```. Verification of this information can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those not well-versed in technology to convey these addresses, or even recognize MAC addresses like ```c8:ea:a0:a0:e5:bb```, mistakes are likely to occur and complexity arises. Furthermore, this method does not provide historical data, particularly for past issues.
## Navigating the World Wide Web

Accessing a website such as https://hickle.name initially requires contacting a DNS server to convert the host portion (hickle) combined with the Top Level Domain (name) of the URL into an IP address like ```151.203.234.175```. Whenever a web request is made, your computer and browser transmit their type, for example: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Understanding the Significance of Default Gateways

Typically, your default gateway is an address that is automatically configured via DHCP. This could be a default gateway like ```192.0.0.231``` (though they usually end in .1 or .254 depending on the scope size), and this is the destination where your computer redirects all of its traffic to be routed further. Although a deeper explanation on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is offered for ```IPv6```, you can confirm this on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.231    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c461:2982:592:b123%en0  UGcg   en0
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
domain_name_server (ip_mult): {202.176.58.138, 43.94.239.132}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c8:ea:a0:a0:e5:bb
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 9e:47:c4:9a:08:69
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks
When it comes to transferring data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
No matter which version of OSX/macOS you are currently using - whether it's 10.15.7, 11.6.6, or 12.1.6 - there are various tools available for troubleshooting. However, these manual actions and scripts fail to provide a set of correlated values over time. This is where automated remote troubleshooting proves to be particularly advantageous, especially for teams that are transitioning to remote work and embracing a Work From Anywhere (WFA) approach.
#### Helpful Built-in Scripts
On OSX/macOS, the ```sudo wdutil info``` tool is extremely beneficial as it provides a dump of the current wireless settings to the CLI, which can be configured to generate specific logs for troubleshooting. Moreover, the ```sysdiagnose``` tool, although primarily point-in-time in relation to wireless, can be used to generate a wide range of logs, making it a more comprehensive option.

To run ```sysdiagnose``` in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, running it interactively by using ```sudo /usr/bin/sysdiagnose``` will prompt a privacy warning, and the generated logs can be found in the correct location in Finder, in the ```/var/tmp``` directory, or accessed through Finder with Cmd+Shift+G. It's important to keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
