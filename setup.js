var Metalsmith = require("metalsmith");
var collections = require("metalsmith-collections");
var layouts = require("metalsmith-layouts");
var markdown = require("metalsmith-markdown");
var permalinks = require("metalsmith-permalinks");

module.exports = Metalsmith(__dirname) // __dirname defined by node.js:
  // name of current working directory
  .metadata({
    // add any variable you want
    // use them in layout-files
    sitename: "Nino D'Orsi ",
    siteurl: "https://ninodorsi.com/",
    description:
      "Rediscover the movements your body is designed to do in a fun setting! "
  })
  .source("./src") // source directory
  .destination("./build") // destination directory
  .clean(true) // clean destination before
  .use(
    collections({
      // group all blog posts by internally
      posts: "posts/*.md" // adding key 'collections':'posts'
    })
  ) // use `collections.posts` in layouts
  .use(markdown()) // transpile all md into html
  .use(
    permalinks({
      // change URLs to permalink URLs
      relative: false // put css only in /css
    })
  )
  .use(
    layouts({
      // wrap layouts around html
      engine: "handlebars" // use the layout engine you like
    })
  );
