---
title: "How Do You Understand Apple No-access"
subtitle: "Thought Leadership?"
layout: research
ip_v4_address: "149.65.86.22"
date: 2023-11-18T19:12:22+00:00
draft: false
---

## Understanding IP Addressing

When you're using the Internet, you receive an IPv4 address such as ```149.65.86.22``` or an IPv6 address like ```2000:cefd:966f:917b:9c0d:d00b:a438:f58a```. You can verify this information from [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to convey these addresses, or even mention MAC addresses like ```48:60:d8:b7:0e:87```, in a way that's understandable for non-tech individuals can be prone to errors and become complex rather quickly. Moreover, this information does not offer any historical data, particularly for previous issues.
## Navigating the World Wide Web

When you want to visit a website like https://cummings.org, you first reach out to a DNS server to convert the host section (cummings) combined with the Top Level Domain (org) of the URL into an IP address like ```77.57.10.41```. Your computer and browser transmit their type along with every web request, for example: 
```html
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A
```
## The Significance of Default Gateways

Your default gateway is typically an automatically configured address via DHCP. You receive a default gateway such as ```192.168.177.149``` (although they usually end in .1 or .254 based on the scope size) and this is where your computer forwards all its traffic for routing. For IPv6, you can delve deeper into [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or check on Mac or Linux with:
```html
<br>
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.177.149    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2554:894d:e20c:42a3%en0  UGcg   en0
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
domain_name_server (ip_mult): {158.243.205.157, 37.29.167.31}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 48:60:d8:b7:0e:87
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 43:2c:7e:47:02:d1
}</pre>




## Troubleshooting Wired and Wireless Network Issues
When it comes to transferring data to your router, you may be using either a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether you are using OSX or macOS version ```10.14.9```, ```11.1.8```, or ```12.0.4```, there are various tools available for troubleshooting network issues. However, these manual actions and scripts do not provide a series of correlated values over time, which is where automated remote troubleshooting becomes essential, especially for remote work and Work From Anywhere (WFA) teams.
#### Useful Built-in Scripts
On OSX/macOS, the ```sudo wdutil info``` tool is very beneficial as it provides a detailed dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. In addition, the ```sysdiagnose``` tool can be used to generate a wide range of logs related to wireless issues, although many of these are specific to a particular point in time, similar to the wdutil tool.

To run the sysdiagnose tool in the background and generate logs at ```/var/tmp/<blah>.tar.gz```, you can use the command: ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, to run it interactively, you can use the command: ```sudo /usr/bin/sysdiagnose```, but be prepared for large file sizes of around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
