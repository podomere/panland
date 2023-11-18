---
title: "How To Test Apple Internet"
subtitle: "Branding?"
layout: research
ip_v4_address: "104.179.84.168"
date: 2023-11-18T18:49:58+00:00
draft: false
---

## Understanding Internet Address Allocation

When connecting to the Internet, users are assigned either a Public IPv4 address, such as ```104.179.84.168```, or an IPv6 address, such as ```2000:561a:fbb1:651e:7c2b:19b3:b672:adc7```. Verifying this information is possible through [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, and even MAC addresses like ```d0:c4:d5:45:9b:93```, to non-technical individuals can be prone to error and quickly become complex. Moreover, this does not provide any historical data, particularly regarding past issues.
## Navigating the World Wide Web

When attempting to reach a website, like https://mohr.org, the user initially contacts a DNS server to translate the host portion (mohr) combined with the Top Level Domain (org) of the URL into an IP address, such as ```77.115.170.247```. Furthermore, the user's computer and browser communicate its type with each web request; for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Significance of Default Gateways

Typically, the default gateway is an address automatically configured through DHCP. An example of such a default gateway address would be ```192.168.214.232```, although they typically end in .1 or .254 depending on the scope size. This is the point where the user's computer directs all its traffic to be routed onward. For those interested in a detailed examination of ```IPv6```, they can refer to our in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, Mac or Linux users can verify this information by: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.214.232    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5c3a:11e7:2171:e75c%en0  UGcg   en0
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
domain_name_server (ip_mult): {165.225.205.115, 75.215.85.52}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr d0:c4:d5:45:9b:93
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 06:91:3a:f1:ff:aa
}</pre>




## Troubleshooting and Resolving Connectivity Issues
When it comes to transporting data to your router, you might be utilizing either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Strategies for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you're using - whether it's 10.14.3, 11.3.6, or 12.0.2 - there are various troubleshooting tools at your disposal. However, these manual methods and scripts do not provide a set of correlated values over time. This is where remote troubleshooting automation comes into play, particularly for teams that are embracing remote work and the Work From Anywhere (WFA) trend.
#### Useful Built-in Utilities
One extremely useful tool for OSX/macOS users is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs, although many of these are only relevant at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (despite minimal interaction), you can use<br>```sudo /usr/bin/sysdiagnose```, which will trigger a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to access the path. However, be mindful of the file sizes, which are generally around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
