require 'compass'

extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register("SassyStrings", :path => "#{File.dirname(__FILE__)}/..")

module SassyStrings
  VERSION = "1.1.0"
  DATE = "2014-09-28"
end

# Sassy String Functions
module Sass::Script::Functions

end
