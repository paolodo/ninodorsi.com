var website = require("./setup");
var express = require("metalsmith-express");
var watch = require("metalsmith-watch");
var postcss = require("metalsmith-postcss");

website
  .use(
    postcss({
      plugins: {
        autoprefixer: {}
      }
    })
  )
  .use(express())
  .use(
    watch({
      paths: {
        "${source}/**/*": true,
        "layouts/*": true,
        "partials/*": true,
      }
    })
  )
  .build(function(err) {
    // build process
    if (err) throw err; // error handling is required
  });
