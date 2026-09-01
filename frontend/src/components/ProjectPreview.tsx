import { useMemo, useState } from 'react';
import type { Project } from '../data/projects';

type ProjectPreviewProps = {
  project: Project;
  compact?: boolean;
};

function screenshotUrl(url: string, width = 1400) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}

export function ProjectPreview({ project, compact = false }: ProjectPreviewProps) {
  const [failed, setFailed] = useState(false);
  const shot = useMemo(() => screenshotUrl(project.url, compact ? 1100 : 1500), [project.url, compact]);

  return (
    <div className={`project-preview tone-${project.tone}${compact ? ' compact' : ''}`}>
      <div className="browser-shell">
        <div className="browser-bar">
          <div className="browser-dots"><i /><i /><i /></div>
          <span>{project.domain}</span>
          <b>LIVE</b>
        </div>
        <div className="browser-screen">
          {!failed ? (
            <img src={shot} alt={`Förhandsvisning av ${project.name}`} loading="lazy" onError={() => setFailed(true)} />
          ) : (
            <div className="browser-fallback">
              <small>{project.category} · {project.city}</small>
              <strong>{project.name}</strong>
              <span>{project.domain}</span>
            </div>
          )}
          <div className="browser-shade" />
          <div className="browser-caption">
            <span>{project.category}</span>
            <strong>{project.name}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
