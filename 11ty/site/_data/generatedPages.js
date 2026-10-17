// Every page built from data by tooling/pages/*.mjs (roadmaps, players of extra keyboard families,
// typing tests, games, progress, legal, redirects). Rendered one per file by generated.11ty.js.
module.exports = async function () {
  const { allPages } = await import('../../../tooling/pages/index.mjs');
  return allPages();
};
