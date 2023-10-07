---
layout: post
date: "2022-03-02T15:35:00"
subtitle: Remote Work Is Hurting My Eyeballs, Make It Stop!
author: Donal
tags:
  - ipv6
  - dns
  - ipv6_dns
  - ipv4_dns
  - aaaa
  - latency
  - macos
  - userops
  - assurance
  - remote_working
  - work_from_anywhere
  - support
  - troubleshooting
  - guides
categories:
  - troubleshooting
image: /images/blog/ipv6_duck.jpg
published: true
title: 'How To Fix IPv6 Connectivity'
---

**TL;DR:** IPv6 and IPv6 DNS often stops working on residential home routers. This can manifest in strange outages especially when your browser or computer continues to try using IPv6. Spot when this happens and fix it quickly by monitoring your IPv6 connectivity.

## The Difference Between IPv4 and IPv6
### What is IPv6 connectivity?
Our Internet runs primarily on two versions of the Internet Protocol; **IPv4** and **IPv6**. IPv4 is [running out](https://www.ripe.net/analyse/statistics/number-of-remaining-ipv4-addresses-daily) of addresses, but IPv6 is still abundant and will be for a very long time. ISP (Internet Service Providers) and mobile ISPs are increasingly giving out IPv6 addresses **only** and then use mechanisms like [CGNAT (Carrier Grade Network Address Translation)](https://en.wikipedia.org/wiki/Carrier-grade_NAT) to ration and share IPv4 pools amongst us. Not all web and Internet assets are available via IPv4 **and** IPv6, though many are available on both. 

### How do I resolve an IPv6 address?
You ask your computer for assets and web pages using words, however it's the [**DNS (Domain Name System)**](https://en.wikipedia.org/wiki/Domain_Name_System) that tells your computer which IP addresses those assets are served by. DNS servers (caches/resolvers) answer your computer over whichever protocol is active and based upon the type of query they are asked. 

#### Does IPv6 have DNS?
Yes, and you may have IPv4 or IPv6 DNS servers configured, or you may have both. In the following sections we will show you how to manually resolve IPv6 addresses and fully test your IPv6 connectivity.

### How to enable IPv6 connectivity?
Most configuration processes happen _automagically_ including aspects of your IPv4, IPv6 and DNS settings being supplied by your local router (which is configured by your ISP or organization's IT team). Your web browser and operating system then request DNS lookups which additionally leverage mechanisms like [Happy Eyeballs](https://en.wikipedia.org/wiki/Happy_Eyeballs) to decide which of the IPv4 or IPv6 supplied records to use. IPv6 is enabled by default in most modern operating systems but you need to check with your ISP whether they provide (and support) IPv6.

### How do I get IPv6 connectivity?
As mentioned above, a really important question is, does your ISP support IPv6 and should you be getting IPv6 connectivity with your chosen plan or account type. Additionally, you need to ensure that your ISP supplied home router or associated equipment fully supports IPv6.

## IPv6 Testing and Troubleshooting
### How do I troubleshoot IPv6?
There are many ways to test your IPv6 settings and connectivity. You can do so manually by looking at your operating system settings, running command line tools, or visiting remote sites to check how you appear publicly on the IPv4 and IPv6 Internets. 

#### Why does my IPv6 have no Internet access?
From the outside in, you should be represented by a public IPv4 and/or IPv6 address. You can manually check this by visiting [IPv6-Test](https://ipv6-test.com/) however this will only show you a specific point in time (tested over HTTPs) and will not show whether you have had any intermittent or historical issues. 

You really need to be testing continuously. This includes making DNS requests and sending IPv6 probes to both your default gateway and also out on to the Internet to be **100%** sure you are connected end-to-end and that assets are reachable outside of your ISP. Pinging your default gateway via [ICMPv6 (Internet Control Message Protocol for IPv6)](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6) is one local test, but checking you can reach and query IPv6 DNS servers and other assets on the IPv6 Internet is another undertaking, so let's initially look at how you might perform these tests manually.

### IPv6 DNS Not Working
First, let's differentiate between IPv6 DNS requests for IPv6 _records_ and requests that actually _use IPv6 for transport_ i.e. requests that are sent using the IPv6 protocol. 

Without going too deep in to the DNS, you can ask a DNS server for IPv4 or IPv6 records. IPv4 address records are called "A" records and IPv6 address records are called "AAAA" records. You can ask for either type of Resource Record (RR) from either type of server 😎.

It's up to whomever owns the assets or pages you've requested as to whether they are a) accessible across the IPv4 or IPv6 Internet **and** b) whether they have the correct types of DNS RRs set to let us know "who" to ask!

#### IPv6 DNS Not Resolving
**If your IPv6 DNS is not working, how would you even know?** Well, quite often you don't. If your fundamental IPv6 connectivity goes down you may experience connectivity problems, be unable to reach IPv6 resources, and/or be unable to connect to your configured IPv6 DNS servers.

### IPv6 Test : How do I check my IPv6 settings?
We need to check you are represented by a globally routable IPv6 unicast address (rather than just a **non-routable** IPv6 link local address).

#### IPv6 Link Local and Multicast
```fe80::/10``` are link-local addresses and ```ff00::/8``` are multicast addresses. Your IPv6 default gateway will likely be an ```fe80::/10``` address but alternatively may be a global address.

#### What to do with no IPv6 connectivity?
You can rapidly check IPv6 from the outside -> in by visiting [IPv6-Test](https://ipv6-test.com/) as mentioned previously, or you could simply send some [ICMPv6](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6) packets to Google's Public Primary DNS server ```ping -6 2001:4860:4860::8888``` . If either of those steps fail you then need to troubleshoot (partition your failure domain) and go step by step to find out what's wrong...

##### IPv6 Example (inc. VPN)
We can look for the presence of IPv6 addresses on a specific interface but let's kill two birds with one stone and see if you have a default route in your local IPv6 route table (macOS/Linux) but let's also see if there's a VPN running with a better match prefix 😎 :

```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

The above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. We're also assuming you don't have any fancy tunnels or VPNs set up for now! 

<pre>
Destination  Gateway                        Flags  Netif  Expire
default      fe80::5a23:8cff:fe1a:5f21%en0  UGcg   en0
default      fe80::%utun0                   UGcIg  utun0
default      fe80::%utun1                   UGcIg  utun1
default      fe80::%utun2                   UGcIg  utun2
::1          ::1                            UHL    lo0</pre>

Depending upon your flavour of Linux you might use "_wlan0_ " as the interface or the following command: 

```ip -6 route | egrep -i "default|2000::/3"```

<pre>default via 2a03:b0c0:2:d0::1 dev eth0 proto static metric 1024 pref medium</pre>

Next you might check if you can send data to the relevant IPv6 default gateway (using IPv6 of course!).

```ping6 fe80::5a23:8cff:fe1a:5f21%en0``` 

**Note:** Notice that the IPv6 default gateway also specifies the interface "_en0_ " too (which is different from IPv4 default gateways). If you manage to get responses, let's see if we can then talk to your configured IPv6 DNS servers.

**Note:** You could just ask for the record immediately from the IPv6 DNS server and then go from there, but let's verify our settings first.

##### IPv6 DNS
You can also see which DNS servers are configured via ```cat /etc/resolv.conf``` or also ```scutil --dns``` on macOS.

Additionally, you can see if DHCPv4 or DHCPv6 have assigned IPv6 DNS servers as per the following where "_en0_ " is the interface name in question:

```ipconfig getpacket en0```

<pre>
...
domain_name_server (ip_mult): {192.168.0.1, 192.168.0.2}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 50:ed:3c:2f:46:04
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 58:23:8c:1a:5f:21
}</pre>

##### How do I ping IPv6 DNS server?
We are indeed getting IPv6 DNS servers from the DHCPv6 reply. Next we will check if we can send ICMPv6 requests to your IPv6 DNS server addresses, and then then try to ask your IPv6 configured DNS server for a record.

```ping6 2606:4700:4700::1111```

Once we've confirmed a positive response from the above we can use a common tool called ```dig``` to make test DNS requests. We can specify which IP protocol and query we would like to make. 

**Note:**  ```dig``` is available on Linux via ```bind-utils``` and/or ```dns-utils```.

Making a test IPv6 query with ```dig``` might mean asking an IPv4 server for an IPv6 resource ```dig @1.1.1.1 AAAA pansift.com``` but what we really want here is to use the IPv6 protocol for the message transport i.e. ask an IPv6 server, using IPv6, for an IPv6 or IPv4 resource record:

```dig -6 @2606:4700:4700::1111 AAAA pansift.com```

You can try some different permutations for yourself but you should get a positive response in the _answer_ section much like the following:

<pre>
...
;; ANSWER SECTION:
pansift.com.		300	IN	AAAA	2606:4700:3033::6815:6023
pansift.com.		300	IN	AAAA	2606:4700:3032::ac43:ac41
...</pre>

Healthy responses are generally returned in less than 20ms. Good enough responses are often between 20-150ms but anything consistently higher means it might be time to configure and use another DNS server. See the section towards the end on differnet public IPv6 DNS servers.

At this point you should be confident you're fully connected on the IPv6 Internet and can check your address via [IPv6-Test](https://ipv6-test.com/) , or surf to a known IPv6 enabled website using a Chrome Extension like [IPFoo](https://github.com/pmarks-net/ipvfoo). You can also check on the command line with `cURL` to explicitly see the HTTP status code which should be `200` (via the IPv6 switch ```-6```). Try a few websites yourself to see if they have an IPv6 presence. 

```curl -6 -s -L -o /dev/null -w "%{http_code}\n" https://pansift.com```

...should result in...

<pre>200</pre>

### Monitor IPv6 Traffic
The above is all essentially **toil** i.e. undifferentiated heavy lifting. It requires you to manually get a command line on the problematic host (or try to get the user to find the terminal and type commands!). It doesn't help you spot intermittent issues or historical problems! 

It's important to keep an eye on whether or not remote workers are dual stack (IPv4 and IPv6) from the outset including what ISPs they are connecting to (as they work from different locations). PanSift solves for all of these issues [mentioned](/benefits) but let's keep rolling with the manual approach so you can understand what's going on under the hood...

### How Do I Fix My IPv6

#### Some Quick Wins?
As noted previously, ensure you know whether or not you are supposed to have IPv6 as part of your service before changing or updating anything. **Always** take a backup of any configuration before making changes.

<div class="table1-start"></div>


| Recommendations |
| :----    |
| **1.** By disabling and re-enabling a Wi-Fi interface or by disconnecting and reconnecting an ethernet cable, it forces your computer to re-ask for settings from the local router including DHCP (or to re-initialize addresses via [SLAAC](https://support.apple.com/en-gb/guide/security/seccb625dcd9/web)). The previous ```getpacket``` commands can be used for DHCP only.      |
| **2.** Log in to the local router and check that it is getting an IPv6 WAN/Internet address. Check it is configured to hand out DNS settings via DHCP on the LAN (which should include IPv6 DNS server settings) though the router may offer its own address as a DNS cache/relay. You could also configure the public ones listed below.     |
| **3.** Reboot your local router/modem and check it has no warnings or errors in its logs.     |
|  **4.** Contact the nominated ISP support service to perform deeper health checks on your service, WAN connection, and account. |


<center><small>Table 1.0 - Quick Wins</small></center>
 <br> 
<div class="table1-end"></div>

#### Should I turn off IPv6? Why do we disable IPv6?
##### Disable IPv6 on your computer
This is an **extreme** option and it is not recommended unless there is no other choice or solution found. You can disable IPv6 via the command line or via the GUI in macOS or Linux. 

###### macOS Disable IPv6
```networksetup -setv6off Ethernet```<br>
```networksetup -setv6off Wi-Fi```

###### macOS Enable IPv6
```networksetup -setv6automatic Wi-Fi```<br>
```networksetup -setv6automatic Ethernet```

###### Linux Disable IPv6
Check your specific flavour but most are alike for ["linux flavours"](https://www.google.com/search?q=linux+disable+ipv6).

##### What happens if I turn off IPv6 on my router?
This is definitely not recommended as it may be the only type of connectivity you are provided with (especially in modern times as IPv4 address space runs out). This action would require knowing that you are not solely on an IPv6 connection and that the ISP provides full connectivity via IPv4. You are likely to cut yourself off from the Internet fully but you can still experiment as long as you know how to revert your settings!

### Alternate Public IPv6 DNS

#### Google DNS IPv6
-   ```2001:4860:4860::8888```
-   ```2001:4860:4860::8844```
<br><br>

[More info...](https://developers.google.com/speed/public-dns/docs/using)

#### Cloudflare DNS IPv6

-   ```2606:4700:4700::1111```
-   ```2606:4700:4700::1001```
<br><br>

[More info...](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-aaaa-record/)

#### Quad9 DNS IPv6
-   ```2620:fe::fe```
-   ```2620:fe::9```
<br><br>

[More Quad9 info as some addresses offer "secured" and "insecure" services...](https://www.quad9.net/support/faq/#ipv6_support)
<br><br>

## Automating It All
The other option is to just run an instant troubleshooting tool which continuously monitors a range of IPv6 metrics, settings, and even Wi-Fi performance like PanSift!

<script>
$("div.table1-start").nextUntil("div.table1-end", "table").addClass("table table-dark table-hover table-responsive");
</script>
