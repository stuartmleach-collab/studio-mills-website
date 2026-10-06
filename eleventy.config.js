export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  return { dir: { input: "src", output: "_site", includes: "_includes", data: "_data" }, htmlTemplateEngine: "njk", templateFormats: ["njk", "md", "html"] };
}
