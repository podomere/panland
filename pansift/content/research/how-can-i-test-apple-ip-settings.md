---
title: "How Can I Test Apple IP Settings"
subtitle: "Streamline?"
layout: research
ip_v4_address: "66.7.42.45"
date: 2023-11-18T18:59:21+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, it is common to have a Public IPv4 address such as ```66.7.42.45``` or an IPv6 address like ```2000:3869:a91e:2ebc:28e2:d9da:7fa1:e698```. You can verify this information using [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to non-technical individuals or even mentioning MAC addresses like ```c3:4a:dc:74:c4:7e``` can be prone to errors and quickly become complex. Furthermore, this method does not provide any historical data, particularly with past issues.
## Navigating the Internet

When accessing a website such as https://olson.info, your initial step is to communicate with a DNS server to convert the host portion (olson) and the Top Level Domain (info) of the URL into an IP address, such as ```243.36.120.244```. In all web requests, your computer and browser also transmit their type, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways

The default gateway is typically an address configured automatically via DHCP. It provides a default gateway like ```192.168.208.37``` (although they often end in .1 or .254 based on the scope size), and it is where your computer forwards all its traffic for routing. For ```IPv6```, detailed instructions are available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can check on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.208.37    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1b72:51ef:6c22:ce45%en0  UGcg   en0
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
domain_name_server (ip_mult): {104.43.67.253, 164.71.93.181}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c3:4a:dc:74:c4:7e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ff:e9:6d:95:fa:b3
}</pre>




## Resolve Issues with Wired and Wireless Networks
When dealing with data transmission at the physical and data layer, it is common to use either a wired or wireless (Wi-Fi) medium to send data to your router.
### Troubleshooting Guide for Apple macOS / OSX
Regardless of the version of your OSX/macOS – be it 10.15.3, 11.3.9, or 12.1.9 – there are various tools available for resolving issues. However, these manual actions and scripts do not provide a series of correlated values over time, which is where automated remote troubleshooting becomes valuable, especially for remote work and Work From Anywhere (WFA) teams.
#### Useful Built-in Scripts
One particularly useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it is point-in-time data, similar to wdutil.

To run the `sysdiagnose` tool in the background and write logs to `/var/tmp/<blah>.tar.gz`, use the command `sudo nohup /usr/bin/sysdiagnose -u &`. If you want to run it interactively, use `sudo /usr/bin/sysdiagnose`, but be aware of the large file sizes, typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
