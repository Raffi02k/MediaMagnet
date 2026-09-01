import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { ProjectPreview } from './ProjectPreview';

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className={`project-card${compact ? ' compact' : ''}`}>
      <ProjectPreview project={project} compact={compact} />
      <div className="project-card-copy">
        <div>
          <span className="project-meta">{project.category} · {project.city}</span>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
        </div>
        <div className="project-tags">
          {project.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-actions">
          <Link className="button button-dark" to={`/work/${project.slug}`}>Se case ↗</Link>
          <a className="button button-light" href={project.url} target="_blank" rel="noreferrer">Live site ↗</a>
        </div>
      </div>
    </article>
  );
}
