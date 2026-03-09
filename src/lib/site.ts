const DEFAULT_BLOG_URL = "http://localhost:3000";

function normalizeUrl(value: string | undefined): string {
  const candidate = (value ?? "").trim();
  if (!candidate) {
    return DEFAULT_BLOG_URL;
  }

  try {
    return new URL(candidate).toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_BLOG_URL;
  }
}

export function getBlogUrl() {
  return normalizeUrl(import.meta.env.VITE_BLOG_URL);
}
