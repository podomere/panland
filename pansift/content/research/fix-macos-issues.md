---
title: "Fix MacOS Issues"
subtitle: "Branding?"
layout: research
ip_v4_address: "255.47.76.7"
date: 2023-11-18T22:05:28+00:00
draft: false
---

--

## Understanding the Functionality of Internet Addressing

When using the Internet, you will be assigned a Public IPv4 address, such as ```29.124.117.32```, or an IPv6 address, such as ```2000:4c31:39b1:ed:808b:82f0:3e98:91e```. You can verify this using [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining or relaying these addresses, and even MAC addresses like ```6a:4a:2c:ca:49:37```, to those who are not tech-savvy can be prone to errors and become complex very quickly. Moreover, this does not provide any historical data (especially from past issues).

  ## The Process of Accessing the Internet and Name Resolution

To access a website such as https://keeling-thiel.net, you initially contact a DNS server to convert the host portion (keeling-thiel) along with the Top Level Domain (net) of the URL into an IP address, like ```9.99.159.122```. Your computer and browser also send information about the type of web requests with every request, for instance: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```.

  ## The Crucial Role of Default Gateways

Your default gateway is usually an automatically configured address through DHCP. You will receive a default gateway, such as ```172.29.183.128``` (although they generally end in .1 or .254 depending on the size of the scope), and this is where your computer sends all its traffic to be routed onwards. For ```IPv6```, detailed instructions can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify it on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.29.183.128    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:3533:9bc1:b710:a668%en0  UGcg   en0
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
domain_name_server (ip_mult): {54.139.42.190, 109.93.177.120}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 6a:4a:2c:ca:49:37
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr b9:3a:b1:24:93:71
}</pre>




## Resolving Issues with Wired or Wireless Connectivity
When it comes to transferring data to your router, you may utilize either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether you are running OSX/macOS versions like ```10.13.7```, ```11.5.8```, or ```12.0.9```, there are various troubleshooting tools available. However, these manual actions and scripts fail to provide a set of interconnected values over a period of time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that have embraced remote work and Work From Anywhere (WFA).

  #### Useful Built-in Commands and Scripts
  A highly beneficial tool for OSX/macOS is ```sudo wdutil info```, which allows you to access current wireless settings via the CLI and configure specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool can be employed to generate a wide range of logs, although much of it is only related to wireless settings just like wdutil.

  To run it in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an *interactive* (although minimal interaction) approach, you can run ```sudo /usr/bin/sysdiagnose``` and it will trigger a privacy warning. Running it in the background should open Finder in the appropriate location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Relevant Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
