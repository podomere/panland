---
title: "How Do You DiagnOSe MacOS Internet"
subtitle: "Immersive Experience?"
layout: research
ip_v4_address: "179.123.86.49"
date: 2023-11-18T17:50:01+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When using the Internet, you are assigned a Public IPv4 address such as ```179.123.86.49``` or an IPv6 address like ```2000:6aa0:9a29:45d2:62c:5a44:cee:398b```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not familiar with technical details, conveying or even noting MAC addresses like ```1d:34:bb:80:f9:2a``` can be prone to errors and can become complex quickly. Moreover, it does not provide any historical data, especially during previous incidents.
## Navigating through the Internet

When attempting to access a website such as https://vonrueden.org, the first step is to connect with a DNS server in order to convert the host portion (vonrueden) along with the Top Level Domain (org) of the URL into an IP address like ```180.191.43.174```. In fact, every web request sent by your computer and browser includes its type, for example: 
```html
Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36
```
## Significance of Default Gateways

The default gateway is generally an address that is automatically configured through DHCP. It is a default gateway like ```172.24.22.29``` (though they typically end in .1 or .254 depending on the scope size), and it is where your computer sends all of its traffic to be routed onwards. For ```IPv6```, we have an in-depth exploration available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but it can be checked on Mac or Linux with:
```html
<br>
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.24.22.29    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:bb51:52dd:84fc:b37b%en0  UGcg   en0
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
domain_name_server (ip_mult): {232.69.63.70, 190.219.239.116}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 1d:34:bb:80:f9:2a
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 1b:af:b1:7b:be:5d
}</pre>




## Resolving Connection Issues for Wired and Wireless Networks

When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Effective Solutions for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you are currently running, whether it's ```10.13.7```, ```11.6.2```, or ```12.1.9```, there are various troubleshooting tools available. However, these tools do not provide a set of interconnected values over time, which is where automated remote troubleshooting becomes invaluable, particularly for teams working remotely and embracing a Work From Anywhere (WFA) setup.
#### Useful Built-in Tools for Troubleshooting
One particularly useful tool for OSX/macOS users is ```sudo wdutil info```, which provides a comprehensive dump of the current wireless settings in the CLI and can be configured to generate specific troubleshooting logs. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide range of logs (though many are related to wireless settings and are point-in-time like wdutil).

To run ```sysdiagnose``` in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, if you prefer to run it interactively, you can use the command ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, the tool should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. It's important to note that the file sizes can be around 300MB or slightly larger.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
