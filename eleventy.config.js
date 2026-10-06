export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  // The CMS editor lives at /admin/ (Decap CMS).
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.ignores.add("src/admin/**");

  // Projects edited in the CMS: every .md file in src/projects, in the order
  // set in the CMS, leaving out any marked "Hide from the site".
  eleventyConfig.addCollection("projectList", (api) =>
    api
      .getFilteredByGlob("src/projects/*.md")
      .filter((p) => !p.data.hidden)
      .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999))
  );

  // The project after this one (wrapping round to the first).
  eleventyConfig.addFilter("nextProject", (list, url) => {
    const i = list.findIndex((p) => p.url === url);
    if (i === -1 || list.length < 2) return null;
    return list[(i + 1) % list.length];
  });

  // A list of pages minus the one at this address.
  eleventyConfig.addFilter("withoutUrl", (list, url) => (list || []).filter((p) => p.url !== url));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
}
