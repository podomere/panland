---
title: "How To Test Common Wifi Router Issues"
subtitle: "Bandwidth-constrained?"
layout: research
ip_v4_address: "230.195.239.223"
date: 2023-11-18T21:16:09+00:00
draft: false
---

## Working Mechanism of Internet Addressing

When it comes to Internet, you may be assigned a Public IPv4 address such as ```230.195.239.223``` or an IPv6 address like ```2000:918f:1237:37d0:273:db24:82f8:3610```. You can verify this at [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not well-versed with technology, conveying these addresses can be error-prone and quickly becomes complex. Moreover, this method does not provide any historical data, especially when analyzing previous problems.
## Navigating the Internet
When accessing a website like https://harber-dooley.com, you first reach out to a DNS server to convert the host part (harber-dooley) in combination with the Top Level Domain (com) of the URL to an IP address, such as ```110.239.137.129```. Every web request from your computer and browser includes the type of request, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Significance of Default Gateways
The default gateway is typically an automatically configured address through DHCP. You receive a default gateway like ```192.0.0.196``` (although they usually end in .1 or .254 depending on the scope size), and this is where your computer sends all its traffic to be directed further. To check on Mac or Linux for ```IPv6```, there is a detailed guide available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but it can also be checked with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.196    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:af22:bdf2:91be:5f91%en0  UGcg   en0
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
domain_name_server (ip_mult): {156.230.50.117, 131.216.24.142}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr b9:d0:e7:1c:e5:95
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 29:79:d1:fa:d8:a5
}</pre>




## Troubleshooting Connectivity Issues in MacOS
In the realm of physical and data layer connectivity, users may encounter problems with wired or wireless (Wi-Fi) mediums when trying to transmit data to their router.
### Troubleshooting Methods for Apple MacOS / OSX
Regardless of the version of OSX/macOS being used, whether it's ```10.14.5```, ```11.2.9```, or ```12.2.7```, there are various tools available for troubleshooting connectivity issues. However, these manual actions and scripts do not provide a continuous set of correlated values over time. In such cases, automated remote troubleshooting becomes essential, especially for teams that rely on remote work and the Work From Anywhere (WFA) concept.
#### Helpful Built-in Scripts
A highly useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the command line interface (CLI) and can be configured to generate specific logs for troubleshooting purposes. Moreover, the ```sysdiagnose``` tool can be utilized to create a comprehensive range of logs, although much of it is only applicable at a specific moment in relation to wireless, similar to wdutil.

The command ```sudo nohup /usr/bin/sysdiagnose -u &``` can be used to run the sysdiagnose tool in the background, writing logs to ```/var/tmp/<blah>.tar.gz```. If an interactive approach is preferred, the command ```sudo /usr/bin/sysdiagnose``` can be executed, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, allowing users to navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. Users should be mindful of the file sizes, generally around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity><img src="https://i.ytimg.com/vi/AJ29knJ5Rsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity>Do You Have A Wired or Wireless Problem</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
