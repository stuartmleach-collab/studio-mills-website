// Settings shared by every project page (the .md files in this folder, edited in the CMS).
export default {
  layout: "project.njk",
  tags: ["project"],
  eleventyComputed: {
    // A project marked "Hide from the site" in the CMS gets no page.
    permalink: (data) => (data.hidden ? false : `/projects/${data.page.fileSlug}/`),
  },
};
