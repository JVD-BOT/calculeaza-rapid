/**
 * setPageMeta — updates document.title and all key meta tags at runtime.
 * Called inside useEffect on every page so crawlers that render JS (Googlebot,
 * social scrapers) pick up per-page titles and descriptions.
 *
 * @param {string} title       Full page title (used for <title> + og:title + twitter:title)
 * @param {string} description Short description (used for meta description + OG + Twitter)
 * @param {string} [path]      URL path, e.g. "/ghid-salariu-brut-net" (updates og:url)
 */
export function setPageMeta(title, description, path) {
  document.title = title;

  const setAttr = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  };

  setAttr('meta[name="description"]', description);
  setAttr('meta[property="og:title"]', title);
  setAttr('meta[property="og:description"]', description);
  setAttr('meta[name="twitter:title"]', title);
  setAttr('meta[name="twitter:description"]', description);

  if (path) {
    setAttr('meta[property="og:url"]', `https://calculeazarapid.ro${path}`);
  }
}
