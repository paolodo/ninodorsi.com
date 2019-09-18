var website = require("./setup");
var postcss = require("metalsmith-postcss");
var htmlMinifier = require("metalsmith-html-minifier");
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');

website
  .use(
    postcss({
      plugins: {
        autoprefixer: {},
        cssnano: {},
      }
    })
  )
  .use(htmlMinifier())
.use(serve({
  port: 8081,
  verbose: true
}))
.use(watch({
    paths: {
      "${source}/**/*": true,
      "layout/**/*": "**/*",
    }
  }))
  .build(function(err) {
    // build process
    if (err) throw err; // error handling is required
  });
