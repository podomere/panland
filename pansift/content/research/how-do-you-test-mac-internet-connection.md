---
title: "How Do You Test Mac Internet Connection"
subtitle: "Synergy?"
layout: research
ip_v4_address: "25.123.161.226"
date: 2023-11-18T19:42:37+00:00
draft: false
---

## Understanding Internet Address Assignment

When using the Internet, you will receive either a Public IPv4 address, such as ```25.123.161.226```, or an IPv6 address, like ```2000:314d:793d:4ed1:5c9b:917a:887f:4ab6```. It is possible to verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, representing these addresses or MAC addresses like ```04:c6:8d:0e:1e:0b``` to individuals who aren't tech-savvy can be prone to errors and can quickly become complex. Furthermore, it does not provide any historical data, especially from previous issues.
## Navigating the World Wide Web

When attempting to access a website, such as https://monahan-keeling.org, the first step is to connect to a DNS server, which will translate the host portion (monahan-keeling) along with the Top Level Domain (org) of the URL into an IP address, for example, ```227.209.8.174```. Every web request from your computer and browser includes your specific browser type, such as <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Recognizing the Significance of Default Gateways

The default gateway is typically an address that is configured automatically via DHCP. This address, like ```192.168.88.60``` (though typically ending in .1 or .254 depending on the scope size), is where your computer sends all of its traffic to be forwarded. For ```IPv6```, there is an extensive explanation available in [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). It can also be verified on Mac or Linux systems using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.88.60    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   4c2b:912d:d8e4:e2:b830:21be:5d75:18f3%en0  UGcg   en0
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
domain_name_server (ip_mult): {228.160.27.109, 217.222.218.47}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 04:c6:8d:0e:1e:0b
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr cb:d0:35:41:16:0e
}</pre>




## Resolve Wired and Wireless Connectivity Issues
When it comes to sending data to your router, the choice between using a wired or wireless (Wi-Fi) medium at the physical and data layer can present various challenges.
### Solutions for Apple macOS / OSX Users
Regardless of whether you are running OSX/macOS versions ```10.13.6```, ```11.3.7```, or ```12.0.2```, there are multiple troubleshooting tools available. However, these manual actions and scripts fail to provide a comprehensive set of correlated values over time. This is why automated remote troubleshooting becomes essential, particularly for teams that have embraced remote work and Work From Anywhere (WFA).
#### Utilize Inbuilt Scripts for Assistance
One valuable tool for OSX/macOS users is the ```sudo wdutil info``` command, which provides a detailed dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs, although much of the data is only relevant at a specific point in time, just like wdutil.

To run ```sysdiagnose``` in the background and save logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an interactive experience, the command ```sudo /usr/bin/sysdiagnose``` can be used, which will prompt a privacy warning. If not running in the background, the files should be accessible in Finder at the specified location or by navigating to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
