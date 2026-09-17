import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { PageMetaContext, type PageMetadata } from './components/PageMeta';
import { services } from './content/siteContent';
import { projects } from './data/projects';

export const routes = [
  '/', '/services', '/work', '/process', '/about', '/contact',
  ...services.map(service => `/services/${service.slug}`),
  ...projects.map(project => `/work/${project.slug}`)
];

export function render(pathname: string) {
  let metadata: PageMetadata | undefined;
  const html = renderToString(
    <PageMetaContext.Provider value={value => { metadata = value; }}>
      <StaticRouter location={pathname}><App /></StaticRouter>
    </PageMetaContext.Provider>
  );
  if (!metadata) throw new Error(`Missing metadata for ${pathname}`);
  return { html, metadata };
}
