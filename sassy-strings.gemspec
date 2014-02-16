# -*- encoding: utf-8 -*-
require './lib/SassyStrings'

Gem::Specification.new do |s|
  # General Project Information
  s.name = "SassyStrings"
  s.rubyforge_project = "SassyStrings"
  s.version = SassyStrings::VERSION
  s.date = SassyStrings::DATE
  s.rubygems_version = "1.7.2"
  s.required_rubygems_version = Gem::Requirement.new(">= 1.2")

  # Author Information
  s.authors = ["Hugo Giraudel"]
  s.email = ["hugo.giraudel@gmail.com"]
  s.homepage = "https://github.com/HugoGiraudel/SassyStrings"

  # Project Description
  s.description = "A collection of Sass functions to manipulate strings."
  s.summary = "Advanced String handling for Sass"

  # Files to Include
  s.files  =  Dir.glob("lib/**/*.*")
  s.files +=  Dir.glob("stylesheets/**/*.*")
  # s.files +=  Dir.glob("templates/**/*.*")

  # Dependent Gems
  s.add_dependency("sass",      [">=3.3"])
  s.add_dependency("compass",   [">=1.0.0"])
end