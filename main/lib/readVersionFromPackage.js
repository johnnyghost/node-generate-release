// Generated by CoffeeScript 1.10.0

/*
  Generate Release
  Kevin Gravier
  MIT License
 */

(function() {
  module.exports = function(package_file_location) {
    var version;
    version = require(package_file_location).version;
    if (!version) {
      throw new Error("Could not read current version from package file: " + package_file_location);
    }
    return version;
  };

}).call(this);