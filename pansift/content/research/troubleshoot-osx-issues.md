---
title: "Troubleshoot OSX Issues"
subtitle: "Granular?"
layout: research
ip_v4_address: "50.49.125.241"
date: 2023-11-18T18:00:45+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you will be assigned a Public IPv4 or IPv6 address, such as ```50.49.125.241``` or ```2000:b7d9:dbd:5d75:4628:5fd8:5950:60ee```. You can verify your address at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not tech-savvy, communicating these addresses or even MAC addresses like ```25:6a:26:81:d1:6f``` can be prone to errors and quickly become complex. Furthermore, this method does not provide any historical data, especially for past issues.
## Navigating the Web

Accessing a webpage like https://cruickshank-funk.name begins with contacting a DNS server to translate the host portion (cruickshank-funk) and the Top Level Domain (name) of the URL into an IP address, such as ```101.135.40.18```. Your computer and browser include its type with all web requests, for example:<br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways

The default gateway is typically an automatically configured address through DHCP. It usually ends in .1 or .254, depending on the scope size, such as ```10.146.55.76```, and is where your computer sends all its traffic to be routed onwards. For ```IPv6```, you can refer to the detailed guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or check on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.146.55.76    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c7e1:b47e:4d8c:20ad%en0  UGcg   en0
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
domain_name_server (ip_mult): {6.146.199.132, 61.244.91.133}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 25:6a:26:81:d1:6f
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 4b:a5:a2:73:10:5f
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks

When it comes to transmitting data to your router, the choice between a wired or wireless (Wi-Fi) medium at the physical and data layer can lead to various troubleshooting challenges.
### Helpful Tips for Apple macOS / OSX Users
Regardless of whether you are running OSX/macOS versions such as ```10.15.1```, ```11.6.6```, or ```12.0.1```, there are several troubleshooting tools available. Unfortunately, these manual actions and scripts do not provide a detailed set of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that have embraced remote work and Work From Anywhere (WFA) setups.
#### Effective Built-in Utilities
An incredibly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a comprehensive display of current wireless settings in the Command Line Interface (CLI), and can be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool offers a more comprehensive approach by generating a wide range of logs, although much of it is only relevant to wireless connections, similar to wdutil.

To run it in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, you can run it interactively with the command ```sudo /usr/bin/sysdiagnose```, which will provide a privacy warning. When not run in the background, it should open Finder in the correct location, and if not, you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. Just keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
