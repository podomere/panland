---
title: "Check MacOS Internet"
subtitle: "Best Practice?"
layout: research
ip_v4_address: "84.77.126.13"
date: 2023-11-18T17:19:31+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```84.77.126.13```, or an IPv6 address, like ```2000:7c78:f874:89d9:5b5:a58:94a2:66f```. A simple way to verify this information is through a tool like [https://test-ipv6.com/](https://test-ipv6.com/). However, sharing and communicating these addresses, along with MAC addresses such as ```ce:f3:99:60:06:bc```, can be error-prone, especially for non-technical individuals. Furthermore, it does not provide any historical data, which can be valuable when troubleshooting past issues.
## Navigating the World Wide Web

Accessing a web page, such as https://brakus.name, involves reaching out to a DNS server to translate the host part (brakus) and the Top Level Domain (name) of the URL into an IP address, like ```212.148.59.10```. Every web request from your computer and browser includes its type and specifications, for example:
```html
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A
```
## Significance of Default Gateways

The default gateway, usually assigned automatically through DHCP, is an essential component of network configurations. It typically comes in the form of an address like ```192.168.56.202``` (although .1 or .254 are common endings depending on the scope size). This gateway serves as the centralized point where your computer forwards all its outgoing traffic. For in-depth insights on ```IPv6``` connectivity, refer to our comprehensive guide at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac and Linux systems, you can verify this information using the following command:
```html
ifconfig | grep 'inet6'
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.56.202    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4ec4:72a7:b960:d4ff%en0  UGcg   en0
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
domain_name_server (ip_mult): {223.178.6.36, 231.127.16.46}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ce:f3:99:60:06:bc
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 22:87:a8:90:f2:0c
}</pre>




## Solutions for Resolving Wired or Wireless Connectivity Issues
When it comes to sending data to your router, you may be using either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Essential Steps for Troubleshooting on Apple macOS / OSX
Regardless of whether you are using OSX/macOS versions like ```10.11.5```, ```11.6.3```, or ```12.2.9```, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes crucial, especially for teams that are transitioning to remote work or adopting a Work From Anywhere (WFA) approach.
#### Helpful Built-in Scripts for macOS
One extremely useful tool on OSX/macOS is the ```sudo wdutil info``` command, which displays the current wireless settings in the Command Line Interface (CLI) and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can generate a wide range of logs, although many of these are only relevant at a specific point in time, similar to the wdutil tool.

To run the sysdiagnose tool in the background and generate logs in the ```/var/tmp/<blah>.tar.gz``` directory, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, for interactive use, you can run ```sudo /usr/bin/sysdiagnose``` to trigger a privacy warning and access the log files. However, be mindful of the file sizes, as they typically range around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
