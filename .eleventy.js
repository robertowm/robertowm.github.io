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

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // Pass-through static assets
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("src/style.css");

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
