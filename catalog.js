/* Shared pure helpers for the static paper catalogue and hash navigation. */
(function (host) {
  'use strict';
  function matchesPaper(paper, status, query) {
    return (status === 'all' || paper.status === status) &&
      paper.text.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase());
  }
  function resolveRoute(hash, routes) {
    let [page = 'home', item = ''] = hash.replace(/^#\/?/, '').split('/');
    if (!Object.hasOwn(routes, page)) page = 'home';
    if (!routes[page].includes(item)) item = '';
    return { page, item };
  }
  const api = { matchesPaper, resolveRoute };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else host.ZW_CATALOG = api;
})(typeof window !== 'undefined' ? window : {});
