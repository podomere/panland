---
title: "How Do You Check Mac Internet Connection"
subtitle: "Value Add?"
layout: research
ip_v4_address: "170.244.135.51"
date: 2023-11-18T19:43:49+00:00
draft: false
---

## Understanding Internet Addressing

The addressing system of the Internet involves having a Public IPv4 address such as ```170.244.135.51``` or an IPv6 address such as ```2000:e9ff:eb5b:ad2a:ce2d:779f:6:1c58```. These can be checked using [https://test-ipv6.com/](https://test-ipv6.com/). Communicating these addresses to non-technical individuals or referring to MAC addresses like ```74:c9:47:2f:a1:ba``` can become complex and prone to errors. Also, it lacks historical data, especially for past issues.
## Navigating the World Wide Web
Accessing a website like https://hilpert.biz involves initially accessing a DNS server to convert the host portion (hilpert) combined with the Top Level Domain (biz) of the URL to an IP address such as ```73.180.234.251```. Every web request sent by your computer and browser includes its type, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Significance of Default Gateways
The default gateway is typically an address automatically configured via DHCP. It is usually in the form of ```192.168.68.188``` (although they typically end in .1 or .254 depending on the scope size) and serves as the routing point for all outgoing computer traffic. For ```IPv6```, more detailed information can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), while on Mac or Linux systems, it can be verified with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.68.188    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:30ab:fc4e:9125:fab0%en0  UGcg   en0
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
domain_name_server (ip_mult): {94.22.216.202, 233.89.147.233}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 74:c9:47:2f:a1:ba
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 2d:ae:15:21:f0:8d
}</pre>




## Fixing Issues with Wired and Wireless Connection
When it comes to transmitting data to your router, you might be using a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Tips for Troubleshooting on Apple macOS / OSX
Regardless of whether you are running OSX/macOS versions like ```10.13.3```, ```11.3.4```, or ```12.1.7```, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a set of interconnected values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that are transitioning to remote work and embracing the Work From Anywhere (WFA) model.
#### Useful Built-in Scripts
One useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the command line interface and can also be configured to generate specific logs for troubleshooting. In addition, the ```sysdiagnose``` tool can be used to produce a wide range of logs, although much of it is only relevant to wireless settings at a specific point in time, similar to wdutil.

To run it in the background and generate logs in ```/var/tmp/<blah>.tar.gz``` you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use ```sudo /usr/bin/sysdiagnose``` but be prepared for file sizes of approximately 300MB. You can find the logs in the correct location in Finder, navigate to ```/var/tmp```, or use Cmd+Shift+G to point Finder to the path. Be mindful of the file sizes, which can vary around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
