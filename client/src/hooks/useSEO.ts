/**
 * useSEO — Dynamic meta tag management for dfwhome.loans
 * Sets title, description, canonical, OG, and Twitter tags per route
 */
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schema?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
}

export function useSEO({
  title,
  description,
  canonical,
  ogImage = "https://www.dfwhome.loans/og-image.jpg",
  ogType = "website",
  schema,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = attr.split("=");
        el.setAttribute(attrName, attrValue.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', 'name="description"', description);
    setMeta('meta[property="og:title"]', 'property="og:title"', title);
    setMeta('meta[property="og:description"]', 'property="og:description"', description);
    setMeta('meta[property="og:type"]', 'property="og:type"', ogType);
    setMeta('meta[property="og:image"]', 'property="og:image"', ogImage);
    setMeta('meta[name="twitter:title"]', 'name="twitter:title"', title);
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', description);
    setMeta('meta[name="twitter:image"]', 'name="twitter:image"', ogImage);

    // Canonical
    const canonicalUrl = canonical || window.location.href.split("?")[0];
    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);

    // Robots
    let robotsEl = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robotsEl) {
      robotsEl = document.createElement("meta");
      robotsEl.setAttribute("name", "robots");
      document.head.appendChild(robotsEl);
    }
    robotsEl.setAttribute("content", noIndex ? "noindex, nofollow" : "index, follow");

    // OG URL
    setMeta('meta[property="og:url"]', 'property="og:url"', canonicalUrl);

    // Dynamic schema injection
    if (schema) {
      const schemaId = "dynamic-page-schema";
      let schemaEl = document.getElementById(schemaId) as HTMLScriptElement | null;
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.id = schemaId;
        schemaEl.type = "application/ld+json";
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(schema);
    }

    return () => {
      // Cleanup dynamic schema on unmount
      const schemaEl = document.getElementById("dynamic-page-schema");
      if (schemaEl) schemaEl.remove();
    };
  }, [title, description, canonical, ogImage, ogType, schema, noIndex]);
}
