---
title: "How Do You DiagnOSe Mac IP Settings"
subtitle: "Streamline?"
layout: research
ip_v4_address: "66.244.81.241"
date: 2023-11-18T19:40:22+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address such as ```66.244.81.241``` or an IPv6 address like ```2000:1583:d607:7678:8e26:51f1:a27b:7911```. You can verify this at [https://test-ipv6.com/](https://test-ipv6.com/). Communicating these addresses to non-tech-savvy individuals, or even mentioning MAC addresses like ```18:b0:f6:4d:b1:48```, can be prone to errors and rapidly becomes complex. Furthermore, this method does not provide any historical data, especially from previous issues.
## Navigating the World Wide Web

Accessing a webpage such as https://grady-harris.net involves contacting a DNS server to convert the host portion (grady-harris) combined with the Top Level Domain (net) of the URL to an IP address like ```225.37.137.129```. Additionally, your computer and browser send their types with all web requests e.g. <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```.
## The Significance of Default Gateways

By default, your gateway is automatically configured through DHCP and usually takes the form of an address like ```10.92.182.43``` (with the final digits typically being .1 or .254 depending on the scope size). This is where your computer directs all its traffic to be routed onwards. To explore more about ```IPv6```, refer to our in-depth discussion on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). You can also verify this on Mac or Linux with: <br>.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.92.182.43    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:11c:37f0:ea28:eb1d%en0  UGcg   en0
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
domain_name_server (ip_mult): {143.164.178.208, 156.125.126.255}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 18:b0:f6:4d:b1:48
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 15:28:af:38:ce:da
}</pre>




## Resolve Issues with Wired or Wireless Connectivity
When it comes to transmitting data at the physical and data layer, you might be using a wired or wireless (Wi-Fi) medium to communicate with your router.
### Troubleshooting on Apple macOS / OSX
No matter which version of OSX/macOS you are running – whether it's 10.12.6, 11.2.9, or 12.3.8 – there are various tools available for resolving connectivity issues. However, manual actions and scripts alone do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes crucial, especially for teams that are embracing remote work and Work From Anywhere (WFA).
#### Useful Native Scripts
One incredibly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings to the CLI and can also generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers even more comprehensive logs, although much of it is only relevant to wireless connectivity at a specific point in time, similar to wdutil.

To run the ```sysdiagnose``` tool in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, use the command ```sudo /usr/bin/sysdiagnose``` – but be aware that the file sizes can be around 300MB. After running the command, navigate to the correct location using Finder or by using Finder with Cmd+Shift+G.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
