require 'compass'
Compass::Frameworks.register("SassyStrings", :path => "#{File.dirname(__FILE__)}/..")

module SassyStrings
  VERSION = "1.0.0"
  DATE = "2014-01-08"
end

# Sassy String Functions
module Sass::Script::Functions

end
