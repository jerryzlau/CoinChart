require_relative '../coin_types.rb'

keys = COINS[:coins].keys

keys.each do |key|
  `curl -o #{key}_history.json https://coinbin.org/#{key}/history`
end
