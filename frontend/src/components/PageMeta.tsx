import { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type PageMetaProps = {
  title: string;
  description: string;
  noIndex?: boolean;
};

export type PageMetadata = PageMetaProps & { url: string };
export const PageMetaContext = createContext<((metadata: PageMetadata) => void) | null>(null);

export function PageMeta({ title, description, noIndex = false }: PageMetaProps) {
  const { pathname } = useLocation();
  const collect = useContext(PageMetaContext);
  const url = `https://www.mediamagnet.se${pathname}`;
  const fullTitle = `${title.includes('Webbdesign') ? title : `${title} | Webbdesign`} | MediaMagnet`;

  // The build-time renderer collects the same metadata used during navigation.
  collect?.({ title: fullTitle, description, noIndex, url });

  useEffect(() => {
    document.title = fullTitle;
    const tags = [
      ['name', 'description', description],
      ['property', 'og:title', fullTitle],
      ['property', 'og:description', description],
      ['property', 'og:url', url],
      ['name', 'twitter:title', fullTitle],
      ['name', 'twitter:description', description]
    ];
    for (const [attribute, key, content] of tags) {
      const meta = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`) ?? document.createElement('meta');
      meta.setAttribute(attribute, key);
      meta.content = content;
      if (!meta.parentNode) document.head.appendChild(meta);
    }

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = url;
    if (noIndex) canonical.remove();
    else if (!canonical.parentNode) document.head.appendChild(canonical);

    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noIndex) {
      const meta = robots ?? document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex';
      if (!meta.parentNode) document.head.appendChild(meta);
    } else robots?.remove();
  }, [fullTitle, description, url, noIndex]);

  return null;
}
