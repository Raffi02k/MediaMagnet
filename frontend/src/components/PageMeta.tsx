import { useEffect } from 'react';

type PageMetaProps = {
  title: string;
  description: string;
  bodyClassName: string;
};

export function PageMeta({ title, description, bodyClassName }: PageMetaProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousClassName = document.body.className;
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    const createdMeta = !meta.getAttribute('name');

    if (createdMeta) {
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }

    document.title = title;
    meta.setAttribute('content', description);
    document.body.className = bodyClassName;

    return () => {
      document.title = previousTitle;
      document.body.className = previousClassName;
      if (createdMeta) {
        meta.remove();
      } else {
        meta.setAttribute('content', previousDescription);
      }
    };
  }, [bodyClassName, description, title]);

  return null;
}
