---
title: "How Do You Support OSX Issues"
subtitle: "Swag?"
layout: research
ip_v4_address: "0.32.2.126"
date: 2023-11-18T18:33:12+00:00
draft: false
---

## Understanding the Functioning of Internet Addresses

When using the Internet, you are assigned a Public IPv4 address, such as ```0.32.2.126```, or an IPv6 address, like ```2000:bab6:1ad3:6a87:ce00:44de:3756:3828```. The validity of these addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to communicate these addresses, or even mentioning MAC addresses like ```3d:51:6b:9b:c4:58```, can be prone to errors and can become complex rapidly. Moreover, this does not provide any historical data, particularly during previous instances of issues.
## Navigating the Internet
When trying to access a website, such as https://beer.info, you first connect to a DNS server in order to translate the host portion (beer) combined with the Top Level Domain (info) of the URL into an IP address, like ```251.196.1.73```. Each web request from your computer and browser includes its type, for example, <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```.
## Significance of Default Gateways
The default gateway is typically an automatically configured address via DHCP. You are provided with a default gateway, such as ```172.25.115.98``` (usually ending in .1 or .254 depending on the scope), where your computer forwards all its traffic to be routed further. For ```IPv6```, we have an in-depth examination in our blog post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify it on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.25.115.98    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   ce18:3264:1:2f1:a264:819a:5bf3:debd%en0  UGcg   en0
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
domain_name_server (ip_mult): {90.247.139.9, 135.47.135.194}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 3d:51:6b:9b:c4:58
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f2:6f:ff:ab:b7:05
}</pre>




## Resolve Issues with Wired and Wireless Connectivity
When attempting to transmit data to your router, you may use either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Options for Apple macOS / OSX
Regardless of your version of OSX/macOS, whether it's ```10.12.3```, ```11.4.2```, or ```12.2.5```, there are various tools available for resolving issues. However, manual actions and scripts alone do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes particularly useful, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
One useful tool on OSX/macOS is the ```sudo wdutil info```, which provides a dump of the current wireless settings to the CLI, and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although many of them are only relevant to the wireless network at a specific point in time, similar to wdutil.

```sudo nohup /usr/bin/sysdiagnose -u &``` will run the tool in the background and write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively*, you can use<br>```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, the tool should open Finder in the correct location, or you can navigate to ```/var/tmp```, or use Finder with Cmd+Shift+G to navigate to the path. Keep in mind that the file sizes are approximately 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
