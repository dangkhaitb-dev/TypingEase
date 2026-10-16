import { TRANSFORMS, resetCaches } from './tooling/build/transforms.mjs';

export default function (eleventyConfig) {
  // Browser JS, CSS, runtime data and verbatim root files keep the URL they always had: the site
  // root of each folder maps onto `/`, so `11ty/client/keyboard/boot.js` is `/keyboard/boot.js`.
  eleventyConfig.addPassthroughCopy({ '11ty/client': '/' });
  eleventyConfig.addPassthroughCopy({ '11ty/styles': '/' });
  eleventyConfig.addPassthroughCopy({ 'content/data': 'data' });
  eleventyConfig.addPassthroughCopy({ public: '/' });

  eleventyConfig.on('eleventy.before', resetCaches);
  for (const [name, transform] of TRANSFORMS) {
    eleventyConfig.addTransform(name, function (content) {
      return this.page.outputPath && this.page.outputPath.endsWith('.html') ? transform(content, this.page.outputPath, this.page.inputPath) : content;
    });
  }

  eleventyConfig.addWatchTarget('content');
  eleventyConfig.addWatchTarget('tooling');
  eleventyConfig.setServerPassthroughCopyBehavior('passthrough');

  return {
    dir: {
      input: '11ty/site',
      includes: '_includes',
      data: '_data',
      output: '.generated/site'
    },
    // Hand-written pages are finished HTML with inline scripts full of `{{`-free but `{%`-prone
    // JavaScript: no template engine runs over them.
    htmlTemplateEngine: false,
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', '11ty.js']
  };
}
