---
title: "How Can I Test Apple Internet"
subtitle: "Sprint To The Finish Line?"
layout: research
ip_v4_address: "82.144.163.170"
date: 2023-11-18T18:58:58+00:00
draft: false
---

## Understanding the Function of Internet Addressing

When using the Internet, it's common to have a Public IPv4 address, such as ```82.144.163.170``` or an IPv6 address, like ```2000:33cd:db4e:cecc:c91c:33e:12d3:f669```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to convey these addresses to individuals unfamiliar with technology, or discussing MAC addresses like ```70:22:21:6c:3b:20```, can be prone to errors and can become complex. Furthermore, this method does not provide any historical data, especially relating to previous issues.
## Navigating the World Wide Web
When accessing a website, such as https://renner-rowe.org, your computer initially contacts a DNS server to translate the host portion (renner-rowe) in combination with the Top Level Domain (org) of the URL into an IP address, such as ```248.115.248.151```. Your computer and browser send their type with all web requests, for example <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## The Significance of Default Gateways
Your default gateway is typically an automatically configured address via DHCP, such as ```192.168.16.229``` (although addresses usually end in .1 or .254, depending on the scope size). This is where your computer forwards all of its traffic to be routed onwards. For ```IPv6```, there is an in-depth explanation available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can check on Mac or Linux using the following command: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.16.229    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8ebb:3ba9:bb66:3e18%en0  UGcg   en0
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
domain_name_server (ip_mult): {198.179.93.147, 30.186.49.130}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 70:22:21:6c:3b:20
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f5:1a:4e:7a:b9:cf
}</pre>




## Fixing Connectivity Issues for Wired or Wireless Networks
When it comes to transmitting data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Troubleshooting on Apple macOS / OSX
Regardless of whether you are using OSX/macOS version ```10.12.8```, ```11.1.6```, or ```12.2.4```, there are various tools available for troubleshooting. However, the manual actions and scripts may not provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that practice remote work and Work From Anywhere (WFA).
#### Helpful Built-in Scripts
On OSX/macOS, the ```sudo wdutil info``` tool is quite useful as it provides a dump of current wireless settings to the CLI, and can also be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool can generate a wide range of logs, although many are related to wireless settings and are not in real time like wdutil.

To run ```sysdiagnose``` in the background and generate logs in the ```/var/tmp/<blah>.tar.gz``` location, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use the command ```sudo /usr/bin/sysdiagnose``` with a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Be mindful of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
