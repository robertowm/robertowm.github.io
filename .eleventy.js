const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {
  const markdownIt = require("markdown-it");
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  });

  eleventyConfig.addFilter("md", (content) => {
    return md.renderInline(content);
  });

  eleventyConfig.addFilter("dateFilter", (dateObj) => {
    return dateObj.toLocaleDateString('en-AU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  });

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addTransform("htmlmin", function(content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
      });
      return minified;
    }
    return content;
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    const isDev = process.env.ELEVENTY_RUN_MODE === "serve" || process.env.NODE_ENV === "development";
    return collectionApi.getFilteredByGlob("src/posts/*.md")
      .filter(post => isDev || !post.data.draft)
      .reverse();
  });

  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());

  // Pass-through static assets
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy({ "static/uploads": "uploads" });
  // We'll handle style.css via a template for minification
  // eleventyConfig.addPassthroughCopy("src/style.css");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
