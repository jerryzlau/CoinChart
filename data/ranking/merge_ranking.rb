# require_relative '../coin_types.rb'

# keys = COINS[:coins].keys
#
# keys.each do |key|
#   `curl -o #{key}_ranking.json https://coinbin.org/#{key}`
# end

require 'json'

json = Dir['./*_ranking.json'].map { |f| JSON.parse File.read(f) }.flatten
output = File.open("merged_ranking.json", "w")
output << json.to_json
output.close
