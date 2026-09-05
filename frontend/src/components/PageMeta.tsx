import { useEffect } from 'react';

type PageMetaProps = {
  title: string;
  description: string;
  noIndex?: boolean;
};

export function PageMeta({ title, description, noIndex = false }: PageMetaProps) {
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
