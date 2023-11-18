---
title: "How Can I DiagnOSe OSX Connectivity"
subtitle: "Etc. Etc.?"
layout: research
ip_v4_address: "80.36.13.207"
date: 2023-11-18T18:18:23+00:00
draft: false
---

## Understanding Internet Addressing

When connecting to the Internet, you are assigned a Public IPv4 address such as ```80.36.13.207``` or an IPv6 address like ```2000:f331:e870:d485:7316:8071:7a91:178b```. These addresses can be verified using [https://test-ipv6.com/](https://test-ipv6.com/). However, for those not well-versed in technology, relaying and communicating these addresses, as well as MAC addresses such as ```a7:15:cd:7d:3c:b8```, can become prone to errors and complex. Furthermore, this does not provide historical data, especially when dealing with past issues.
## Navigating the Internet
Accessing a website, such as https://cremin.com, involves initially contacting a DNS server to convert the host portion (cremin) combined with the Top Level Domain (com) of the URL into an IP address like ```220.185.206.181```. Furthermore, your computer and browser include its type in all web requests, e.g. <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```.
## Understanding the Significance of Default Gateways
Your default gateway is typically an automatically assigned address through DHCP. Typically, you receive a default gateway like ```192.168.27.73``` (commonly ending in .1 or .254 depending on the scope), and this is where your computer sends all its traffic for further routing. For ```IPv6```, detailed information can be found in our article on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and it can be checked on Mac or Linux using the following method:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.27.73    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5b5f:b787:4bc0:e3c0%en0  UGcg   en0
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
domain_name_server (ip_mult): {17.186.241.114, 53.165.201.53}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a7:15:cd:7d:3c:b8
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 59:81:cb:14:94:ce
}</pre>




## Resolving Connection Issues for Wired and Wireless Networks

When it comes to transmitting data, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer to send data to your router.
### Troubleshooting Tips for Apple macOS / OSX
No matter which version of OSX/macOS you are operating - whether it's `10.11.5`, `11.4.9`, or `12.1.1` - there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts 
One incredibly useful tool on OSX/macOS is `sudo wdutil info`, which provides a dump of current wireless settings to the CLI, and can be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless at a specific point in time, just like wdutil.

To run `sysdiagnose` in the background and generate logs to `/var/tmp/<blah>.tar.gz`, you can use the command `sudo nohup /usr/bin/sysdiagnose -u &`. If you prefer to run it interactively, you can use `sudo /usr/bin/sysdiagnose`, but beware of the large file sizes of about 300MB. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` manually. Just be cautious of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
