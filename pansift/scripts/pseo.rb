#!/usr/bin/env ruby

# PSEO creates files and pages for Hugo for programmatic SEO

require "csv"
require "fileutils"
require "time"
require "faker"
require "yt"

$yt_config_key = "AIzaSyBJTQntR5QuYcHP-XOhN0ZzFX9mr2nU9a0"

$emoji = (([0x1F60D,0x1F607,0x1F600,0x1F604,0x1F61C,0x1F914,0x1F917,0x1F60E,0x1F913,0x1F63B,0x1F4BC,0x2764,0x1F44B,0x1F44C,0x270C,0x1F449,0x1F44D,0x1F44A,0x1F44F,0x1F64C,0x270D,0x1F4AA,0x1F440,0x1F441,0x1F468,0x1F469,0x1F47C,0x1F463,0x23F3,0x1F308,0x1F3AF,0x1F3B2,0x1F3AD,0x1F453,0x1F50D,0x1F4D6,0x1F4DA,0x1F4EC,0x270F,0x1F4CC,0x1F52C,0x26A0,0x267B,0x2705,0x1F1EA].sample).to_i).chr('UTF-8')

# Always start prefix (not core) arrays with an empty so you get a mix

# Get the latest unsubscribe file from production
puts "'./pseo.rb test' to run in test mode."
case ARGV[0]
when "test"  # Note proper syntax for File.exist?
  @init_subprefix = ["","how to"]
  @init_prefix = ["","fix"]
  @init_suffix = ["","connectivity"]
  @init_core = ["IP"]
  puts "Running on test IP words"   # Do this if value of ARGV[0] == result of File.exist?
when "osx"
  @init_subprefix = ["","how to","how can I","how do you",""]
  @init_prefix = ["","fix","diagnose","troubleshoot","test","check","support","understand"]
  @init_core = ["macOS","OSX","Apple","Mac"]
  @init_suffix = ["","issues","connectivity","internet", "internet connection", "IP settings", "no-access"]
  puts "Running on Apple Mac OSX words"   # Do this if value of ARGV[0] == result of File.exist?
when "network"
  @init_subprefix = ["","how to","how can I","how do you",""]
  @init_prefix = ["","fix", "diagnose","troubleshoot","test","check","support","understand"]
  @init_core = ["IPv6","IPv4","wifi","common WiFi","latency","jitter","icmp","ping", "http", "https"]
  @init_suffix = ["","issues", "connectivity","internet issues", "no access", "router issues", "routing issues", "no-access", "address","speed","protocol"]
  puts "Running on IP and network words"   # Do this if value of ARGV[0] == result of File.exist?
else
  @init_subprefix = [""]
  @init_prefix = [""]
  @init_suffix = [""]
  @init_core = [""]
  puts "Running on nothing by default, choose a type of words"   # Do this if value of ARGV[0] == result of File.exist?
end

def init_prefixes_and_core
  @subprefix = @init_subprefix
  @prefix = @init_prefix
  @suffix = @init_suffix
end

def re_init_prefixes
  @subprefix = @init_subprefix
  @prefix = @init_prefix
  @suffix = @init_suffix
end

def sample_file(core)
  @subprefix.each_with_index do |subprefix,subprefix_index|
    @prefix.each_with_index do |prefix,prefix_index|
      @suffix.each_with_index do |suffix,suffix_index|
        title = subprefix.to_s + " " + prefix.to_s + " " + core.to_s + " " + suffix.to_s
        domain = "#{Faker::Internet.domain_word}"
        tld = "#{Faker::Internet.domain_suffix}"
        subtitle = "#{Faker::Marketing.buzzwords}?"
        subtitle = subtitle.split(" ").map(&:capitalize).join(" ")
        file_title = title.gsub(/\s/,"-").gsub(/\-\-/,'-').gsub(/^\-/,'').gsub(/\-$/,'').gsub(/\-\-/,'-').downcase
        page_title = title.gsub(/\s+/," ").gsub(/^\s/,'').gsub(/\s$/,'')
        page_title = page_title.split(" ").map(&:capitalize).join(" ")
        page_title = page_title.gsub(/ip/i, &:upcase).gsub(/osx/i, &:upcase).gsub(/os/i, &:upcase)
        puts "File title: #{file_title}"
        puts "Page title: #{page_title}"
        timestamp = Time.now.iso8601.to_s
        puts "Timestamp: "+timestamp
        ip_v4_address = Faker::Internet.ip_v4_address
        private_ip_v4_address = Faker::Internet.private_ip_v4_address
        ip_v6_address = Faker::Internet.ip_v6_address 
        mac_address = Faker::Internet.mac_address
        yt_get_urls # This generates a @link for the video to embed.
        data = %Q^---
title: \"#{page_title}\"
subtitle: \"#{subtitle}\"
layout: research
ip_v4_address: \"#{ip_v4_address}\"
date: #{timestamp}
draft: true
---

# Internet Addressing
On the Internet you #{['may','might'].sample} #{['have','get'].sample} a Public IPv4 address like **#{ip_v4_address}** or an IPv6 address like **#{ip_v6_address}**. #{['You','We'].sample} can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like **#{mac_address}**, it's error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://#{domain}.#{tld} you initially access a DNS server to translate the host portion (#{domain}) combined with the Top Level Domain #{tld} of the URL, to an IP address like **#{Faker::Internet.ip_v4_address}**. 

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like **#{Faker::Internet.private_ip_v4_address}** (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For **IPv6** we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

# Apple macOS / OSX
No matter what version you are on, **#{Faker::App.semantic_version(major: 10..10, minor: 11..15)}**, **#{Faker::App.semantic_version(major: 11..11, minor: 0..6)}**, or **#{Faker::App.semantic_version(major: 12..12, minor: 0..3)}**, there are a range of tools for troubleshooting but between manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especialy for teams that embrace remote work and Work From Anywhere (WFA).
^
txt = File.open("../content/research/#{file_title}.md",'w+')
txt.write(data)
txt.close()

# Send to file of the same name inc. data about subprefix, prefix, core, suffix
#---
#title: "#{@page_title}"
#layout: research
#date: #{timestamp}
#draft: true
#---
        end
    end
  end
  re_init_prefixes
end

def yt_get_urls(page_title)

  # Not IPv4 restricted
  # Not IPv6 restricted
  # You have 10,000 units per day and a search uses 100 units
  # This is the quota system for YouTube... so you have like 100 searches.

  Yt.configuration.api_key = $yt_config_key
  Yt.configure do |config|
    config.log_level = :debug
  end

  videos = Yt::Collections::Videos.new
  answer = videos.where(q: page_title, order: 'viewCount', safe_search: 'strict', type: 'video', max_results: 3, publishedAfter: '2018-01-01T00:00:00Z')
  answers = []
  answer.each do |video| 
    answers.push(video)
  end
  video_1 = answers[0]
  video_1_thumbnail_url = video_1.thumbnail_url
  video_1_id = video1.id
  video_1_link = "https://www.youtube.com/watch?v="+video_1_id
  video_2 = answers[1]
  video_2_thumbnail_url = video_2.thumbnail_url
  video_2_id = video2.id
  video_2_link = "https://www.youtube.com/watch?v="+video_2_id
  video_3 = answers[2]
  video_3_thumbnail_url = video_3.thumbnail_url
  video_3_id = video3.id
  video_3_link = "https://www.youtube.com/watch?v="+video_3_id

end

def generate
  init_prefixes_and_core
  puts "Core terms: #{@init_core}"
  @init_core.each_with_index do |core, core_index|
    puts "Iterating core: #{core}"
    sample_file(core)
  end
end



def csv_file
  CSV.foreach('pseo.txt', :headers => true) do |page|
    puts "================================="
    if page.any? {|word| word.include? "#"}
      puts "Commented out. #{page.to_s}"
      next
    elsif page[0].nil? || page[1].nil?
      puts "Empty fields encountered. 0= #{page[0].to_s}, 1=#{page[1].to_s}"
      next
    else
      title = page[0].gsub '-', ' '
      subtitle = page[1].strip.to_s
      page_title = title.capitalize
      puts "Title: "+title+" and subtitle: "+subtitle
    end
  rescue CSV::MalformedCSVError
    puts "Skipping bad row #{page}"
  end
end

generate

exit
__END__
