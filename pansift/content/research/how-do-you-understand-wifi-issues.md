---
title: "How Do You Understand Wifi Issues"
subtitle: "Buying Cycle?"
layout: research
ip_v4_address: "37.152.205.249"
date: 2023-11-18T21:07:32+00:00
draft: false
---

## Understanding Internet Addressing

When it comes to the Internet, you may have a Public IPv4 address, such as ```37.152.205.249```, or an IPv6 address like ```2000:bb33:bbac:70b0:7288:f5b6:8f51:7ab8```. Verifying this information can be done using [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not tech-savvy, communicating these addresses or identifying MAC addresses like ```40:5b:88:40:ce:03``` can be prone to error and quickly become complex. Moreover, this method does not provide any historical data, especially when dealing with past issues.
## Navigating the World Wide Web
In order to access a website like https://abshire.com, you first connect to a DNS server to convert the host portion (abshire) together with the Top Level Domain (com) of the URL into an IP address, such as ```38.52.254.93```. Your computer and browser sends its type along with every web request, for example:<br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding the Significance of Default Gateways
The default gateway is typically an address that is automatically configured via DHCP. This may be a default gateway like ```192.168.244.193``` (although they often end in .1 or .254, depending on the scope size), and it is where your computer sends all its traffic to be routed onwards. For ```IPv6```, there is a detailed exploration available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify this on Mac or Linux using the following command:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.244.193    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:9b5f:8b73:9ea5:9ebc%en0  UGcg   en0
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
domain_name_server (ip_mult): {33.187.176.198, 86.165.108.10}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 40:5b:88:40:ce:03
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ac:d1:b0:36:c5:5b
}</pre>




## Diagnosing and Resolving Connectivity Issues, Wired and Wireless
When it comes to transferring data, whether through a physical connection or over a Wi-Fi network, troubleshooting connectivity issues is crucial.
### How to Resolve Connectivity Problems on Apple's Operating Systems
Regardless of the version of macOS or OSX being used, such as `10.14.8`, `11.2.9`, or `12.2.2`, there are various tools available for diagnosing and resolving connectivity issues. However, these tools and manual actions do not provide a continuous set of related values over time. This is where automated remote troubleshooting becomes invaluable, particularly for remote teams and those working from different locations.
#### Using Pre-installed Scripts for Troubleshooting
On OSX/macOS, the `sudo wdutil info` command is a useful tool that provides current wireless settings to the command-line interface and can be configured to generate specific logs for troubleshooting. In addition, the `sysdiagnose` tool can be used to generate a wide range of logs, although some of it is only relevant to wireless connectivity, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will generate logs in the `/var/tmp/<blah>.tar.gz` directory. For an *interactive* mode (although there is minimal interaction), running `sudo /usr/bin/sysdiagnose` will result in a privacy warning and open Finder in the correct location, or users can navigate to `/var/tmp` in Finder using Cmd+Shift+G. It is important to note that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
