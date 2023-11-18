---
title: "How To Fix MacOS Internet Connection"
subtitle: "Swim Lane?"
layout: research
ip_v4_address: "33.86.190.103"
date: 2023-11-18T17:23:52+00:00
draft: false
---

## How the Functioning of Internet Addressing Takes Place

When accessing the Internet, you might have a Public IPv4 address such as ```33.86.190.103``` or an IPv6 address like ```2000:360b:b05a:b439:5bdc:fe50:2dc6:3877```. This can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technically inclined, communicating these addresses or even citing MAC addresses such as ```59:62:f8:c3:56:ff``` can be prone to errors and become complex very quickly. Moreover, this does not provide any historical data, especially pertaining to past problems.
## How to Reach Websites
In order to access a web page, such as https://torphy.name, the first step is to access a DNS server to translate the host portion (torphy) in combination with the Top Level Domain (name) of the URL to an IP address such as ```189.41.203.114```. When making web requests, your computer and browser actually send out their type, for example: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## The Significance of Default Gateways
Typically, your default gateway is an address that is automatically configured via DHCP. You are assigned a default gateway like ```10.196.157.147``` (although they usually end in .1 or .254 depending on the scope size), and this is where your computer directs all its traffic to be routed onwards. For ```IPv6```, a detailed explanation can be found in the post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify this on Mac or Linux using the following commands:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.196.157.147    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:71df:35aa:8de6:a1ad%en0  UGcg   en0
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
domain_name_server (ip_mult): {160.84.255.116, 196.219.168.6}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 59:62:f8:c3:56:ff
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 23:f9:3c:04:9f:c7
}</pre>




## Resolving Issues with Wired and Wireless Connections

When it comes to transmitting data to your router, you have the option of using either a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Troubleshooting on Apple macOS / OSX

No matter which version of OSX/macOS you are currently using, whether it's ```10.13.8```, ```11.1.1```, or ```12.3.6```, there are a variety of troubleshooting tools available. However, these tools may not provide a comprehensive set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams embracing remote work and the Work From Anywhere (WFA) concept.
#### Utilizing Pre-installed Scripts for Assistance

One of the tools available on OSX/macOS is the ```sudo wdutil info``` command, which provides a detailed output of current wireless settings in the CLI and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs, although many of these logs are only relevant at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs at ```/var/tmp/<blah>.tar.gz```. For an interactive option (although minimal interaction is required), you can run ```sudo /usr/bin/sysdiagnose``` which will prompt a privacy warning. If not run in the background, it should open Finder in the appropriate location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to directly access the path. Keep in mind that the file sizes are around 300MB, more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
