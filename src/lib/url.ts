// The site can be published in a sub-folder (e.g. https://iou-angelhaven.github.io/ehealth-implementation/)
// or at the root of its own domain. Always build internal links with url('/path/') so they work in both.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path; // external or relative link
  if (base && (path === base || path.startsWith(base + '/'))) return path; // already prefixed
  return base + path;
}

/** True when `pathname` is the page `href` points to (or a page below it). */
export function isCurrent(pathname: string, href: string, exact = false): boolean {
  const norm = (p: string) => (p.endsWith('/') ? p : p + '/');
  const here = norm(pathname);
  const target = norm(url(href));
  return exact ? here === target : here.startsWith(target);
}
