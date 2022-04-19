#!/usr/bin/env ruby

# PSEO creates files and pages for Hugo for programmatic SEO

require 'rubygems'
require "csv"
require 'fileutils'
require 'time'

@init_subprefix = ["how to"]
@init_prefix = ["fix", "troubleshoot"]
@init_core = ["ipv6","ipv4"]
@init_suffix = ["connectivity","internet"]

# Get the latest unsubscribe file from production
puts "'./toasty.rb test' to run in test mode."
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

def delete_core_word(index)
  @init_core.delete_at(index) 
end

def sample_title(core)
  @subprefix_index = (0 .. @subprefix.length).to_a.sample
  @prefix_index = (0 .. @prefix.length).to_a.sample
  @suffix_index = (0 .. @suffix.length).to_a.sample
  !@subprefix_index.nil? ?  sub = @subprefix[@subprefix_index] : sub = ""
  !@prefix_index.nil? ?  pre = @prefix[@prefix_index] : pre = ""
  !@suffix_index.nil? ?  suf = @suffix[@suffix_index] : suf = ""
  @title = sub.to_s + " " + pre.to_s + " " + core.to_s + " " + suf.to_s
  puts "Interim title: #{@title}"
  @page_title = @title.tr(" ","-").gsub(/^-/,'').gsub(/-$/,'').gsub(/--/,'-')
  # Remove used prefix/suffixes
  @subprefix.delete_at(@subprefix_index)
  @prefix.delete_at(@prefix_index)
  @suffix.delete_at(@suffix_index)
end

def generate
  init_prefixes_and_core
  until @init_core.empty? do
    core_index = (0 .. @init_core.length).to_a.sample
    core = @init_core[core_index]
    puts "Chose core: #{core}"
    until @subprefix.empty? && @prefix.empty? && @suffix.empty? do 
      sample_title(core)
      puts @page_title
    end
    delete_core_word(core_index)
    re_init_prefixes
  end
end


timestamp = Time.now.iso8601.to_s
puts "Timestamp: "+timestamp

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
