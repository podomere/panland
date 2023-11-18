---
title: "Fix MacOS No-access"
subtitle: "Streamline?"
layout: research
ip_v4_address: "64.198.216.47"
date: 2023-11-18T17:10:00+00:00
draft: false
---

## A Guide to Internet Addressing

When using the Internet, you may be assigned a Public IPv4 address such as ```64.198.216.47```, or an IPv6 address like ```2000:ed73:d4ed:9458:f2cf:7b3b:123a:da52```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, trying to communicate these addresses, or even dealing with MAC addresses like ```f4:71:a0:c0:32:b2```, can be error-prone and complicated for those who are not technically inclined. Moreover, this does not provide any historical data.
## Navigating the Web

To access a webpage like https://rau.org, you first connect to a DNS server to translate the host portion (rau) combined with the Top Level Domain (org) of the URL into an IP address such as ```250.254.169.168```. Your computer and browser send their type with all web requests, for example: 
`Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko`
## Understanding Default Gateways

Your default gateway is typically an address that is automatically configured via DHCP. For example, you may have a default gateway like ```172.31.247.196``` (although they typically end in .1 or .254 depending on the scope size), and this is where your computer sends all its traffic to be routed onwards. For ```IPv6```, detailed information can be found in the article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can check on Mac or Linux using the following command:
```sh
ip -6 route show
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.31.247.196    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:ca3f:c517:f4bc:ecb%en0  UGcg   en0
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
domain_name_server (ip_mult): {186.243.100.48, 142.180.150.165}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr f4:71:a0:c0:32:b2
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 2d:da:92:8e:91:76
}</pre>




## Diagnosing and Resolving Connectivity Issues

When transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Addressing Problems on Apple macOS / OSX Systems
No matter the version of OSX/macOS you're using - whether it's ```10.12.1```, ```11.4.1```, or ```12.3.7``` - there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that are embracing remote work and the Work From Anywhere (WFA) concept.
#### Utilizing Useful Built-in Scripts
A very useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI, and can also be configured to generate specific logs for troubleshooting purposes. In addition, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although many are only relevant to wireless at a specific point in time, similar to wdutil.

To run it in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use ```sudo /usr/bin/sysdiagnose```, but be aware of the large file sizes, typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
