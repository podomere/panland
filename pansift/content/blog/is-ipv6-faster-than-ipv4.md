---
layout: post
date: "2022-06-05T14:35:00"
subtitle: Or is IPv4 slower than IPv6 :)
author: Donal
tags:
  - ipv6
  - latency
  - macos
  - userops
  - assurance
  - remote_working
  - work_from_anywhere
categories:
  - troubleshooting
image: /images/blog/faster.jpg
published: true
title: 'Is IPv6 Faster Than IPv4?'
---

**TL;DR:** IPv6 is faster than IPv4 **~39%** of the time (locally anyway!).	

To answer this question we decided to look at anonymized data we had collected from a range of monitoring agents over a 30 day period. For simplicity, the data used only focused on the client's RTT (Round Trip Time) to their **default gateway**. This *sub-path* does not cover a full round trip to Internet based assets, it's just the first leg of a journey (often over Wi-Fi), which admittedly can suffer extreme variability. There are many nuances that may affect our initial results, including but not limited to, size of data set, differences in device, OS (Operating System) level, the medium, protocol, CoS type, etc. It is, however, precisely because of the complexity involved that we decided to look at one simple and comparable metric! 

### The Approach
We began by using our Wi-Fi assurance and remote troubleshooting tool called [PanSift](https://pansift.com) <a href="/demo" target="_blank" rel="nofollow">(see a live demo)</a>. We started with **2.4 million** *network related* gateway data points. These measurements were taken every **30** seconds from **16** randomly selected macOS agents (using our maximum data retention period of **30** days). Subsequently, the data points used were from agents when **fully online with dualstack connectivity** (i.e. can reach Internet based lighthouses), rather than just being *locally_connected* yet we only used the data from the client to the default gateway. Using Internet connected hosts makes any comparison fairer such that there's the potential for ongoing traffic traversing connections and the gateways we're measuring to. Additionally, it should be noted that [PanSift](https://pansift.com) does not normalize data and retains full fidelity metrics. This allows for fine grained analysis and even retrospective troubleshooting. After filtering data for agents with concurrent IPv4 and IPv6 Internet reachability, we were then left with **342,980** valid gateway related data points.   

#### Under The Hood
The [PanSift](https://pansift.com) agent sends 3 ICMP *echo_request*s every 30 seconds using both **IPv4** (ping) and **IPv6** (ping6) while also explicitly setting the COS (Class of Service) to *Best Effort* . The options used with *ping* and *ping6* (just to be explicit) are:

- `-c 3` = to send a count of 3 requests and then stop
- `-i 1` = explicitly wait 1 second between requests (default)
- `-k BE` = *Best Effort* normal class (default)
<br>
<br>
**Note:** We explicitly use and mention the above defaults as placeholders and reminders to ourselves for potential further tweaking. We also used a parent process timeout of 5 seconds for ICMP to the gateway.  IPv4 requests went first, then IPv6, and we recorded the *average* latency of the 3 requests as the resulting data point (using a <a target="_blank" href="https://docs.influxdata.com/influxdb/v2.2/reference/syntax/line-protocol/#data-types-and-format">float</a> value in milliseconds). 

With queries to our <a target="_blank" href="https://www.influxdata.com/">Influx</a> backend (a <a target="_blank" href="https://en.wikipedia.org/wiki/Time_series_database">Time Series Database</a>), the data spanned macOS versions *10.11.x*, *10.14.x*, *10.15.x*, *11.6.x*, and *12.x* with physical models ranging from *iMAC* to *Mini* but mostly *Macbook Airs* and *MacBook Pros*.

We then used Influx's <a target="_blank" href="https://www.influxdata.com/products/flux/">flux</a> scripting language to do some simple comparisons on whether **IPv4** or **IPv6** was faster. 

**Note:** To simplify, we also rounded the (float) values to (integer) whole numbers so we could quickly and more fairly compare "ties" between **IPv4** and **IPv6**.

### Results

<div class="table1-start"></div>

| Response Type | # IPv4 Faster | # IPv6 Faster  | # Tied / Same | N <br>(sample size) | Summary |
| :----:      | :----:   |  :---:  | :---:  | :---:  | :---:      |
| WLAN + Wired  | 107,881   | **134,401**  | 100,698 | 342,980 | **IPv6 wins!** |
| Percentages | 31.45%   | **39.18%**  | 29.35% | 100%   | IPv6 won !        |    

<center><small>Table 1.0 - IPv4 vs. IPv6 Total Latency Results</small></center>
 <br> 
<div class="table1-end"></div>
 <a href="https://app.pansift.com/demo" target="_blank" rel="nofollow"><img class="img-fluid lozad" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="/images/blog/ipv4.png"></img></a>

<center><small>Image 1.0 - IPv4 Total Latency Results</small></center>
 <br>
 <a href="https://app.pansift.com/demo" target="_blank" rel="nofollow"><img class="img-fluid lozad" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="/images/blog/ipv6.png"></img></a>
 <br>
<center><small>Image 2.0 - IPv6 Total Latency Results</small></center>
 <br>
<div class="table2-start"></div>

| Response Type   | # IPv4 Faster | # IPv6 Faster  | # Tied / Same | N <br>(sample size) | Summary |
| :----:          | :----:   |  :---:  | :---:  | :---:  | :---:      |
| WLAN (Wi-Fi)    | 97,638 | **127,335** |  76,731 | 301,704 | **IPv6 wins!** |
| Percentages     | 32.36%   | **42.20%**  | 25.43% | 100%   | IPv6 won !        |

<center><small>Table 2.0 - IPv4 vs. IPv6 Latency By WLAN</small></center>
 <br> 
<div class="table2-end"></div>

<div class="table3-start"></div>

| Response Type   | # IPv4 Faster | # IPv6 Faster  | # Tied / Same | N <br>(sample size) | Summary |
| :----:          | :----:   |  :---:  | :---:  | :---:  | :---:   |
| Not WLAN (Wired*)| 10,243 | 7066    |  **23,967** |  41,276 | **Tied / Same** |
| Percentages     | 24.81%   | 17.11%  | **58.06%** | 100%   | Tied / Same        |

<center><small>Table 3.0 - IPv4 vs. IPv6 Latency By Wired*</small></center>
 <br> 
 <small>* We require a wider data set as most agent data was from Wi-Fi / WLAN connected hosts. The types of wired hardware recorded were primarily, "USB LAN" and "USB-C LAN" types, some of which may have been synching at lower than gigabit (1000 Mbps) speeds. As such, we need to also start to grab the media output, however both IPv4 and IPv6 are traversing the same media! </small> 
 <br>  
<div class="table3-end"></div>

 <br>
 
 
### IPv4 and IPv6; Relevant Differences? 
#### What is IPv6 connectivity anyway?
We've previously done a primer on IPv6 connectivity and troubleshooting [here](/blog/how-to-fix-ipv6-connectivity/), so let's take a brief look at some of the fundamental differences between IPv4 and IPv6 in relation to our data.
  
#### ICMPv4 and v6
The ICMPv6 format is described in <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc4443">RFC4443</a> whereas ICMP is described in <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc792">RFC792</a>, yet apart from the difference in Extension Headers (which are not relevant here), one wonders about why IPv6 might be faster than IPv4 (perhaps related to the gateway stack and utilization?).

#### Next Steps?
We now need to expand the above analysis to see if:
  - [x] there's any correlation with the MAC addresses (and thus the vendor OUIs) which show what type/make of device is acting as the gateway?
  - [x] perhaps this is related to certain client device types, operating system versions, or patch levels?
  - [x] a larger sample set of dualstack devices will result in the same outcomes?
  - [x] are there ARP and NDP considerations (based upon traffic or lack thereof)?
  - [x] could the order of testing, serial versus parallel (or random) play an effect?   
<br>
**Note:** Based upon feedback to this article on the potential for sleeping Wi-Fi radios and differences with ARP and NDP, we are going to <a target="blank_" href="https://github.com/pansift/p3/blob/45b816d9a5e3d4d3eaaa7a7f7b3853ddc14619c9/Scripts/osx_default_script.sh#L263">randomize</a> which of the default gateway ICMP tests (in the agent) go first. Once a critical mass of the install base have the new agent <a target="blank_" href="https://github.com/pansift/p3/blob/45b816d9a5e3d4d3eaaa7a7f7b3853ddc14619c9/Scripts/osx_default_script.sh#L263">scripts</a> we will re-run the above experiment.
<br><br>

<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table table-dark table-hover table-responsive');
	$('div.table2-start').nextUntil('div.table2-end', 'table').addClass('table table-dark table-hover table-responsive');
    $('div.table3-start').nextUntil('div.table3-end', 'table').addClass('table table-dark table-hover table-responsive');
})();
</script>
