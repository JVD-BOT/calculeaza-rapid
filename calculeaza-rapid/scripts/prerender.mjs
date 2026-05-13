import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const distDir = join(projectRoot, "dist");
const ssrDir = join(projectRoot, "dist-ssr");

const ssrBundleUrl = pathToFileURL(join(ssrDir, "entry-server.js")).href;
const { routes, renderRoute } = await import(ssrBundleUrl);

const template = await readFile(join(distDir, "index.html"), "utf8");

const SITE = "https://calculeazarapid.ro";

function htmlEscape(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rewriteHead(html, { url, title, description }) {
  const t = htmlEscape(title);
  const d = htmlEscape(description);

  return html
    .replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${t}</title>`,
    )
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${d}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${t}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${d}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${url}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${t}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${d}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${url}" />`,
    );
}

function replaceRootBody(html, rendered) {
  // The template has a complex static shell inside <div id="root">...</div>
  // and a separate <main id="static-content">...</main>. For non-home routes
  // we strip both and inject the SSR'd route content into #root.
  return html
    .replace(
      /<main id="static-content"[\s\S]*?<\/main>/,
      "",
    )
    .replace(
      /<div id="root">[\s\S]*?<\/div>\s*<!-- AdSense/,
      `<div id="root">${rendered}</div>\n      <!-- AdSense`,
    );
}

async function writeRoute(route) {
  const url = `${SITE}${route.path}`;
  const rendered = renderRoute(route);

  let html = rewriteHead(template, {
    url,
    title: route.title,
    description: route.description,
  });
  html = replaceRootBody(html, rendered);

  const outDir = join(distDir, route.path.replace(/^\//, ""));
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "index.html"), html, "utf8");
  console.log(`pre-rendered ${route.path} → ${outDir}/index.html`);
}

for (const route of routes) {
  await writeRoute(route);
}

console.log(`\ndone — pre-rendered ${routes.length} routes`);
