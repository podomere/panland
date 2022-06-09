---
layout: post
date: "2022-06-05T14:35:00"
subtitle: Or is IPv4 slower than IPv6 :)
author: Donal
tags:
  - ipv6
  - ipv6_dns
  - ipv4_dns
  - aaaa
  - latency
  - macos
  - userops
  - assurance
  - remote_working
  - work_from_anywhere
  - guides
categories:
  - troubleshooting
image: /images/blog/faster.jpg
published: true
title: 'Is IPv6 Faster Than IPv4'
---

**TL;DR:** IPv6 is faster than IPv4 **~39%** of the time (locally anyway!).	

To answer this question we decided to look at anonymous data we had collected from agents over a 30 day period. For simplicity, the data used only focused on the client's RTT (Round Trip Time) to their default gateway. This *sub-path* does not cover a full round trip to Internet based assets, it's only the first leg of a journey (often over Wi-Fi), and can admittedly suffer extreme variability due to the medium, but it contributes to overall variability. Later, we will highlight some of the nuances that may affect our cursory results, including but not limited to, differences in device, OS (Operating System) level, the medium, gateway RIBs, protocols, CoS type, payload, assets, <a target="_blank" href="https://en.wikipedia.org/wiki/Carrier-grade_NAT">CGNAT</a> etc. It is precisely because of the complexity involved that we decided to look at one simple comparable metric!

## The Approach
We set out to answer this question using our Wi-Fi assurance and remote troubleshooting <a href="/demo" target="_blank" rel="nofollow">tool (live demo)</a>). called [PanSift](https://pansift.com). We started with **2.4 million** sample *network related* gateway response data points. These were taken every **30** seconds from **16** randomly selected macOS agents (using our maximum data retention period of **30** days). Subsequently, the data points used had to from agents that were **fully online with dualstack connectivity** (i.e. can reach Internet based lighthouses), rather than just being *locally_connected*. This made the comparison fairer such that there was the potential for additional traffic traversing connections and paths. Additionally, it should be noted that [PanSift](https://pansift.com) does not normalize data and retains full fidelity metrics which allows for this sort of fine grained analysis (and even retrospective troubleshooting). After filtering data for agents with concurrent IPv4 and IPv6 Internet reachability, we were left with **342,980** valid data points.   

### Under The Hood
The [PanSift](https://pansift.com) agent sends 3 ICMP *echo_request*s every 30 seconds using both **IPv4** (ping) and **IPv6** (ping6) while also explicitly setting the *Best Effort* COS (Class of Service). The options used with *ping* and *ping6* for clarity and just to be explicit are:

- `-c3` = to send a count of 3 requests and then stop
- `-i1` = explicitly wait 1 second between requests (default)
- `-k BE` = *Best Effort* normal class (default)


**Note:** We also used a timeout of 5 seconds. We explicitly set defaults as placeholders for potential further tweaking. IPv4 requests went first, then IPv6, and we recorded the *average* latency of the 3 requests as the resulting data point (using a <a target="_blank" href="https://docs.influxdata.com/influxdb/v2.2/reference/syntax/line-protocol/#data-types-and-format">float</a> value in milliseconds). 

With queries to our <a target="_blank" href="https://www.influxdata.com/">Influx</a> backend (a <a target="_blank" href="https://en.wikipedia.org/wiki/Time_series_database">Time Series Database</a>), we only chose data points from agents that were *Internet* *"dualstack"* (IPv6 **and** IPv4) connected. The data spanned macOS versions *10.11.x*, *10.14.x*, *10.15.x*, *11.6.x*, and *12.x* with physical models ranging from *iMAC* to *Mini* but mostly *Macbook Airs* and *MacBook Pros*.

We then used Influx's <a target="_blank" href="https://www.influxdata.com/products/flux/">flux</a> scripting language to do some simple comparisons on whether **IPv4** or **IPv6** was faster. 

**Note:** To simplify, we also rounded the (float) values to (integer) whole numbers so we could quickly and more fairly compare "ties" between **IPv4** and **IPv6**.

## Results

<div class="table1-start"></div>

| Response Type | # IPv4 Faster | # IPv6 Faster  | # Tied / Same | N <br>(sample size) | Summary |
| :----:      | :----:   |  :---:  | :---:  | :---:  | :---:      |
| WLAN + Wired  | 107,881   | **134,401**  | 100,698 | 342,980 | **IPv6 wins!** |
| Percentages | 31.45%   | **39.18%**  | 29.35% | 100%   | IPv6 won !        |    

<center><small>Table 1.0 - IPv4 vs. IPv6 Total Latency Results</small></center>
 <br> 
 <br> 
<div class="table1-end"></div>

<div class="table2-start"></div>

| Response Type   | # IPv4 Faster | # IPv6 Faster  | # Tied / Same | N <br>(sample size) | Summary |
| :----:          | :----:   |  :---:  | :---:  | :---:  | :---:      |
| WLAN (Wi-Fi)    | 97,638 | **127,335** |  76,731 | 301,704 | **IPv6 wins!** |
| Percentages     | 32.36%   | **42.20%**  | 25.43% | 100%   | IPv6 won !        |

<center><small>Table 2.0 - IPv4 vs. IPv6 Latency By WLAN</small></center>
 <br> 
 <br> 
<div class="table2-end"></div>

<div class="table3-start"></div>

| Response Type   | # IPv4 Faster | # IPv6 Faster  | # Tied / Same | N <br>(sample size) | Summary |
| :----:          | :----:   |  :---:  | :---:  | :---:  | :---:   |
| Not WLAN (Wired)| 10,243 | 7066    |  **23,967** |  41,276 | **IPv4 wins!** |
| Percentages     | 24.81%   | 17.11%  | **58.06%** | 100%   | IPv4 won !        |

<center><small>Table 3.0 - IPv4 vs. IPv6 Latency By Wired*</small></center>
 <br> 
 * We could use a bigger data set here as it looks like most agent data was from Wi-Fi / WLAN connected hosts.
 <br>  
<div class="table3-end"></div>

 <br>
 
 
## IPv4 and IPv6; Relevant Differences? 
### What is IPv6 connectivity anyway?
We've previously done a primer on IPv6 connectivity and troubleshooting [here](/blog/how-to-fix-ipv6-connectivity/), so let's take a brief look at some of the fundamental differences between IPv4 and IPv6 in relation to our data.
  
### ICMPv4 and v6

The ICMPv6 format is described in <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc4443">RFC4443</a> whereas ICMP (v4) is described in <a target="_blank" href="https://datatracker.ietf.org/doc/html/rfc792">RFC792</a>. 

### Gateway Devices
? OS, stack, handling/priority of ICMP types?

### RIBs and FIBs
Negligible anyway for locally connected routes?

### Packet Sizes
?


<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table table-dark table-hover table-responsive');
	$('div.table2-start').nextUntil('div.table2-end', 'table').addClass('table table-dark table-hover table-responsive');
    $('div.table3-start').nextUntil('div.table3-end', 'table').addClass('table table-dark table-hover table-responsive');
})();
</script>
