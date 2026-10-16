// One output file per entry of _data/generatedPages.js. The HTML is complete already; Eleventy
// only places it and runs the site-wide transforms (eleventy.config.mjs) over it.
module.exports = class {
  data() {
    return {
      pagination: { data: 'generatedPages', size: 1, alias: 'generated', addAllPagesToCollections: false },
      permalink: data => `/${data.generated.path}`,
      eleventyExcludeFromCollections: true
    };
  }

  render(data) {
    return data.generated.html;
  }
};
