---
title: "How Can I Fix MacOS No-access"
subtitle: "Out Of Pocket?"
layout: research
ip_v4_address: "163.207.111.240"
date: 2023-11-18T17:38:53+00:00
draft: false
---

## Understanding Internet Address Formats

When using the Internet, you are assigned a unique numerical address, such as ```163.207.111.240``` for IPv4 or ```2000:ad09:fb2c:ab71:6617:1bc5:8241:4d8d``` for IPv6. You can verify this information at [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining these addresses, or even MAC addresses like ```eb:cc:47:9e:19:88```, to individuals who are not familiar with technology can be prone to errors and become complex. Furthermore, this method does not provide historical data, particularly when troubleshooting previous issues.
## Navigating the World Wide Web
To access a website such as https://okon-tremblay.org, your device first consults a DNS server to convert the host section (okon-tremblay) in combination with the URL's Top Level Domain (org) into an IP address, such as ```91.246.244.172```. For each web request, your computer and browser also transmit its specifications, for example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Significance of Default Gateways
The default gateway is typically an automatically assigned address through DHCP. Commonly, a default gateway appears as ```172.22.176.36``` (usually ending in .1 or .254 based on the scope size). This is the location where your computer forwards all its traffic for further routing. For ```IPv6```, detailed instructions can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or you can perform a check on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.22.176.36    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1de0:5414:7a30:f22d%en0  UGcg   en0
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
domain_name_server (ip_mult): {226.251.89.111, 249.124.93.27}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr eb:cc:47:9e:19:88
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 45:59:48:de:3f:e9
}</pre>




## Diagnosing and Resolving Connection Issues
When it comes to transferring data through your router, you may encounter issues with either a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Strategies for Apple macOS / OSX Users
Regardless of whether you are using OSX or macOS, such as versions ```10.13.9```, ```11.1.4```, or ```12.2.8```, there are various troubleshooting tools available. However, these manual methods and scripts may not provide a comprehensive overview of correlated values over time, which is essential for remote troubleshooting. This is particularly important for teams that have adopted a remote work or Work From Anywhere (WFA) approach.
#### Leveraging Automated Built-in Features
One of the useful utilities on macOS/OSX is the ```sudo wdutil info```, which can display current wireless settings in the command-line interface and generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool offers a more comprehensive set of logs, although many of them are only relevant to wireless connectivity, similar to wdutil.

To run sysdiagnose in the background and create logs in ```/var/tmp/<blah>.tar.gz```, you can enter the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an interactive approach, you can opt to run ```sudo /usr/bin/sysdiagnose```, but be mindful of the sizable file sizes of around 300MB.

<br><br>
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
