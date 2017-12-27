var Metalsmith = require("metalsmith");
var collections = require("metalsmith-collections");
var layouts = require("metalsmith-layouts");
var markdown = require("metalsmith-markdown");
var permalinks = require("metalsmith-permalinks");

var marked = require("marked");
var renderer = Object.assign(new marked.Renderer(), {
  link: (href, title, text) =>
    `<a href="${href}"${title ? ` title="${title}"` : ""}${
      href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""
    }>${text}</a>`
});

module.exports = Metalsmith(__dirname)
  .metadata({
    sitename: "Nino D'Orsi",
    description:
      "Rediscover the movements your body is designed to do in a fun setting!",
    contacts: {
      phone: "+32 484604013",
      email: "ninodorsi@gmail.com"
    }
  })
  .source("./src")
  .destination("./build")
  .clean(true)
  .use(
    collections({
      posts: {
        pattern: "posts/*.md",
        sortBy: "date",
        reverse: true,
      }
    })
  )
  .use(markdown({ renderer }))
  .use(
    permalinks({
      relative: false
    })
  )
  .use(
    layouts({
      engine: "handlebars",
      partials: "partials"
    })
  );
