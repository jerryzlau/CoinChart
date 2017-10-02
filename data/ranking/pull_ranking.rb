require_relative '../coin_types.rb'

keys = COINS[:coins].keys

keys.each do |key|
  `curl -o #{key}_ranking.json https://coinbin.org/#{key}`
end
