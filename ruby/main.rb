# ruby/main.rb
# Sample Ruby application demonstrating standard library tools, HTTP server/client, and basic logic.

require 'net/http'
require 'json'

module PolyglotApp
  class GreetRunner
    def initialize(name = "World")
      @name = name
    end

    def greet
      "Hello, #{@name}! Welcome to the Ruby Module."
    end

    def fetch_ip
      uri = URI('https://api.ipify.org?format=json')
      response = Net::HTTP.get(uri)
      parsed = JSON.parse(response)
      parsed['ip']
    rescue StandardError => e
      "unknown (Error: #{e.message})"
    end
  end
end

if __FILE__ == $0
  runner = PolyglotApp::GreetRunner.new("Developer")
  puts runner.greet
  puts "Fetching public IP address for confirmation..."
  puts "Public IP: #{runner.fetch_ip}"
end
