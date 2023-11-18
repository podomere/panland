---
title: "How Can I Check OSX Internet"
subtitle: "Plug And Chug?"
layout: research
ip_v4_address: "115.58.24.252"
date: 2023-11-18T18:22:37+00:00
draft: false
---

## Understanding IP Formats

When using the Internet, individuals may be assigned a Public IPv4 address such as ```115.58.24.252``` or an IPv6 address like ```2000:e606:ced9:27c:a928:ffe4:a944:ed75```. However, trying to relay or remember these addresses or MAC addresses like ```0b:83:0d:f6:23:e5``` can be complicated, especially for those not well-versed in technology. Unfortunately, this method also lacks historical data, making it difficult to track prior issues.
## How Web Addresses are Accessed

When attempting to access a website such as https://funk.info, the initial step involves contacting a DNS server to translate the host portion (funk) combined with the Top Level Domain (info) of the URL into an IP address, such as ```87.175.75.40```. Notably, all web requests from your computer and browser include information about its type, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Understanding the Role of Default Gateways

Ordinarily, your default gateway is an address automatically configured via DHCP. This default gateway, such as ```10.69.137.241```, serves as the central point where your computer directs all its traffic for further routing. While the process differs for ```IPv6```, you can check on Mac or Linux with a detailed guide available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.69.137.241    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4537:ebc7:62a2:2695%en0  UGcg   en0
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
domain_name_server (ip_mult): {147.146.115.238, 161.213.176.151}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 0b:83:0d:f6:23:e5
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 9a:f3:33:9f:9c:a7
}</pre>




## Solutions for Resolving Connectivity Issues
When it comes to transmitting data to your router at the physical and data layer, you may find yourself utilizing either a wired or wireless (Wi-Fi) medium.
### Troubleshooting Steps for Apple Operating Systems
Regardless of which version of OSX/macOS you are running - be it 10.15.6, 11.3.7, or 12.3.1, there are various tools available for troubleshooting. Unfortunately, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that have embraced remote work and the Work From Anywhere (WFA) model.
#### Utilizing Built-in Tools for Assistance
One incredibly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings in the CLI and can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool can be used to generate a wide array of logs, although much of it is only relevant to wireless settings at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute the command in the background and create logs in the ```/var/tmp/<blah>.tar.gz``` directory. If you prefer to run it interactively, you can use ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not executed in the background, it should open Finder in the appropriate location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are typically around 300MB, give or take.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
