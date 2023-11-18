---
title: "How Can I Check Mac Issues"
subtitle: "Swim Lane?"
layout: research
ip_v4_address: "33.124.41.149"
date: 2023-11-18T19:34:48+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the internet, individuals may encounter a Public IPv4 address such as ```33.124.41.149``` or an IPv6 address like ```2000:b9f7:278c:2adf:981f:b62a:f261:1a3a```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to those who are not technically inclined, or even mentioning MAC addresses like ```dd:ed:69:ec:7d:76```, can be prone to errors and can become complex very quickly. Furthermore, this method does not provide any historical data, especially when previous issues have arisen.
## Reaching Websites
To access a web page like https://schaden.net, the first step is to contact a DNS server to convert the host section (schaden) in combination with the Top Level Domain (net) of the URL to an IP address such as ```28.181.200.221```. During all web requests, your computer and browser send their type, for example: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## The Significance of Default Gateways
Typically, your default gateway is an address that is automatically configured through DHCP. It usually takes the form of a default gateway like ```192.0.0.45``` (although they usually end in .1 or .254 depending on the scope size), and this is where your computer sends all its traffic to be routed onward. For ```IPv6```, more in-depth information is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or you can perform a check on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.45    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4b20:de1e:df66:e3e5%en0  UGcg   en0
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
domain_name_server (ip_mult): {252.249.36.246, 230.36.54.107}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr dd:ed:69:ec:7d:76
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 96:71:a5:f0:ab:61
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks

When it comes to transferring data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Finding Solutions for Apple macOS / OSX Systems
Regardless of the version of OSX/macOS you are currently using, such as ```10.13.2```, ```11.6.8```, or ```12.1.6```, there are various troubleshooting tools available. However, these tools, both manual and scripted, do not provide a continuous set of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that are embracing remote work and the Work From Anywhere (WFA) approach.
#### Leveraging Built-in Scripts for Assistance

A highly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool offers a more comprehensive solution by generating a wide range of logs (although, much of it is only pertinent to wireless settings, similar to wdutil).

To run ```sysdiagnose``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use the command ```sudo /usr/bin/sysdiagnose```, but be aware of the large file sizes of around 300MB. After running the command in the background, it should open Finder in the appropriate location, allowing you to navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the files. However, be cautious of the large file sizes, typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
