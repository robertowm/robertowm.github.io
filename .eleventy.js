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
