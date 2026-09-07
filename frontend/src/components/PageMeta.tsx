import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type PageMetaProps = {
  title: string;
  description: string;
  noIndex?: boolean;
};

export function PageMeta({ title, description, noIndex = false }: PageMetaProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = `https://www.mediamagnet.se${pathname}`;
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = url;
    if (!noIndex) document.head.appendChild(canonical);
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const previousUrl = ogUrl?.content;
    if (ogUrl) ogUrl.content = url;

    return () => {
      canonical.remove();
      if (ogUrl && previousUrl !== undefined) ogUrl.content = previousUrl;
    };
  }, [pathname, noIndex]);

  useEffect(() => {
    if (!noIndex) return;
    const existing = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const robots = existing ?? document.createElement('meta');
    const previousContent = robots.getAttribute('content');
    robots.name = 'robots';
    robots.content = 'noindex';
    if (!existing) document.head.appendChild(robots);

    return () => {
      if (!existing) robots.remove();
      else if (previousContent === null) robots.removeAttribute('content');
      else robots.content = previousContent;
    };
  }, [noIndex]);

  useEffect(() => {
    document.title = `${title} | MediaMagnet`;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description]);

  return null;
}
