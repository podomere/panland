---
title: "Troubleshoot OSX Internet Connection"
subtitle: "Tee It Up?"
layout: research
ip_v4_address: "126.30.95.58"
date: 2023-11-18T18:01:27+00:00
draft: false
---

## Understanding the Functionality of Internet Addressing

When using the Internet, you are assigned a specific IP (Internet Protocol) address, which comes in the form of public IPv4 or IPv6. This unique identifier can be checked using a reliable tool like [https://test-ipv6.com/](https://test-ipv6.com/), but it can be quite challenging for non-technical individuals to communicate or even remember these addresses. Additionally, there is a lack of historical data associated with these addresses, especially during past issues.
## Navigating the World Wide Web

In order to access a website, such as https://lynch.net, your computer connects to a DNS (Domain Name System) server to convert the URL into an IP address, which is essential for accessing the site. Furthermore, your computer's web requests always include its browser and operating system details, such as ```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```.
## Significance of Default Gateways

The default gateway, typically obtained automatically through DHCP (Dynamic Host Configuration Protocol), serves as the destination for all outgoing traffic from your computer. The default gateway, often ending with .1 or .254 depending on the network size, is crucial for routing network traffic. For troubleshooting IPv6 connectivity on Mac or Linux, you can refer to our detailed guide at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.69    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:a9b3:7aa7:af66:bbf3%en0  UGcg   en0
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
domain_name_server (ip_mult): {117.245.245.220, 7.197.252.243}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 1b:b7:cc:f8:25:70
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 60:41:e1:1f:1a:db
}</pre>




## Resolving Issues with Wired and Wireless Connections

When it comes to sending data to your router, the choice between using a wired or wireless (Wi-Fi) medium occurs at the physical and data layer.
### Strategies for Resolving Issues on Apple macOS / OSX
Regardless of whether you are using OSX or macOS versions such as ```10.15.6```, ```11.2.2```, or ```12.1.7```, there are various troubleshooting tools available. However, these tools do not provide a series of correlated values over time, which can be a limitation. Automated remote troubleshooting becomes particularly useful for teams that embrace remote work and Work From Anywhere (WFA).
#### Utilizing Pre-installed Scripts for Assistance
On OSX/macOS, the ```sudo wdutil info``` tool is quite beneficial as it provides a dump to the CLI of current wireless settings and can be configured to generate specific logs for troubleshooting. In addition, the ```sysdiagnose``` tool offers a more comprehensive approach, generating a wide range of logs, although many are only relevant to wireless settings at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write logs to ```/var/tmp/<blah>.tar.gz```. Alternatively, running ```sudo /usr/bin/sysdiagnose``` interactively will result in a privacy warning and provide the option to navigate to the location where the logs are saved. However, it's important to be mindful of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
