require 'compass'

extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register("SassyStrings", :path => "#{File.dirname(__FILE__)}/..")

module SassyStrings
  VERSION = "1.1.2"
  DATE = "2014-10-10"
end

# Sassy String Functions
module Sass::Script::Functions

end
