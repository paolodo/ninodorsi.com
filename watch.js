var website = require("./setup");
var express = require("metalsmith-express");
var watch = require("metalsmith-watch");

website
  .use(express())
  .use(
    watch({
      paths: {
        "${source}/**/*": true,
        "layouts/**/*": "**/*.html"
      }
    })
  )
  .build(function(err) {
    // build process
    if (err) throw err; // error handling is required
  });
