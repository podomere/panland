#!/usr/bin/env ruby

# PSEO creates files and pages for Hugo for programmatic SEO

require "csv"
require "fileutils"
require "time"
require "faker"

# Always start prefix (not core) arrays with an empty so you get a mix
@init_subprefix = ["","how to","how can I","how do you","what is"]
@init_prefix = ["","fix", "fix for", "troubleshooting", "troubleshoot","test","check","support"]
@init_suffix = ["","connectivity","internet", "no access", "router", "routing", "no-access", "address","speed","protocol"]
@init_core = ["ipv6","ipv4","wifi","latency","jitter","macos","osx"]

# Get the latest unsubscribe file from production
puts "'./pseo.rb test' to run in test mode."
case ARGV[0]
when "test"  # Note proper syntax for File.exist?
  puts "Running on test ENV localapp"   # Do this if value of ARGV[0] == result of File.exist?
else
  puts "Running on PROD ENV app"   # Do this if value of ARGV[0] == result of File.exist?
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
        subtitle = Faker::Internet.domain_name
        @page_title = title.gsub(/\s/,"-").gsub(/\-\-/,'-').gsub(/^\-/,'').gsub(/\-$/,'').gsub(/\-\-/,'-')
        puts "Page title: #{@page_title}"
        timestamp = Time.now.iso8601.to_s
        puts "Timestamp: "+timestamp
        ip_v4_address = Faker::Internet.ip_v4_address
        private_ip_v4_address = Faker::Internet.private_ip_v4_address
        ip_v6_address = Faker::Internet.ip_v6_address 
        mac_address = Faker::Internet.mac_address
        puts "Domain name: #{subtitle}"
        puts "You may have a Public IPv4 address like #{ip_v4_address} or an IPv6 address like #{ip_v6_address} as seen from [https://test-ipv6.com/](https://test-ipv6.com/). Yet for non-techies to try and communicate them, or call out MAC addresses like #{mac_address}, it gets complicated quickly. It's prone to errors and doesn't give you historical data especially when problems occured."
        # Send to file of the same name inc. data about subprefix, prefix, core, suffix
				#---
				#title: "#{@page_title}"
				#layout: research
				#date: #{timestamp}
				#draft: true
				#tags:
				#  - #{subprefix}
				#  - #{prefix}
				#  - #{core}
				#  - #{suffix}
				#---
      end
    end
  end
  re_init_prefixes
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
