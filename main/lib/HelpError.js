// Generated by CoffeeScript 1.10.0

/*
  Generate Release
  Kevin Gravier
  MIT License
 */

(function() {
  var HelpError,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  HelpError = (function(superClass) {
    extend(HelpError, superClass);

    function HelpError(post) {
      this.message = "generate-release\n\n-r --readme           Path to README.md file. Default: ./README.md\n-p --package          Path to package.json file. Default: ./package.json\n-c --current-version  Current Version. Default: read from package.json\n-t --release-type     Release Type: patch, minor, major. Default: prompt\n-n --no-confirm       Do not ask for confirmation. Default: prompt for confirmation\n" + (post || '');
    }

    return HelpError;

  })(Error);

  module.exports = HelpError;

}).call(this);