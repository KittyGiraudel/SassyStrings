# SassyStrings

Here is a [Compass Extension](http://compass-style.org/) providing you all functions you need to manipulate your [Sass](http://sass-lang.com/) strings.

## What's in there?

* `char-at($string, $index)`: returns the character from `$string` at index `$index`
* `levenshtein($a, $b)`: returns the Levenshtein distance between `$a` and `$b`
* `str-count($string, $needle)`: counts number of occurrences of `$needle` in `$string`
* `str-ends-with($string, $needle)`: returns whether `$string` ends with `$needle`
* `str-explode($string, $separator)`: explodes `$string` on `$separator` occurrences
* `str-implode($list)`: implodes `$list` into a string
* `str-last-index($string, $needle)`: returns last index of `$needle` in `$string`
* `str-lcfirst($string)`: turns first letter of `$string` into lower case
* `str-pad($string, $length, $pad: " ", $direction: left)`: pads `$string` with `$pad` to match `$length` starting from `$direction`
* `str-printf($string, $elements...)`: replaces occurrences of `%s` in `$string` by elements from `$elements`
* `str-repeat($string, $times)`: repeats `$string` `$times` times
* `str-replace($string, $old, $new: "", $case-sensitive: true)`: replaces `$old` by `$new` in `$string` respecting `$case-sensitive`
* `str-reverse($string)`: reverses string
* `str-rot($string, $rot: 13)`: rotates letters in `$string` of `$rot` position in alphabet
* `str-shuffle($string)`: shuffles letters in string
* `str-split($string)`: splits `$string` into a list of characters
* `str-starts-with($string, $needle)`: returns whether `$string` starts with `$needle`
* `str-trim($string)`: removes white spaces before and after `$string`
* `str-ucfirst($string)`: turns first letter of `$string` into upper case
* `str-word-count($string)`: counts number of words in `$string`
* `stringify($literal)`: casts to stringify

As well as default Sass core functions:

* `str-index`
* `str-slice`
* `str-length`
* `str-insert`
* `to-lower-case`
* `to-upper-case`

If you feel like an explorer, you can have a look at the code [here](https://github.com/HugoGiraudel/SassyStrings/tree/master/stylesheets).

## Requirements

* Sass ~> 3.4.0
* Compass ~> 1.0

Some functions depend on other functions. If you include functions individually, make sure to check for these dependencies in their respective docs.

## Credits

Huge thanks to [Marc Mintel](http://twitter.com/marcmintel) for his help.

## Advanced usage

If you experience naming conflicts or want to add your own error handling and dependency checker feel free to use the functions in `stylesheets/private`.
These functions do not add any kind of error handling so use them at your own risk!
