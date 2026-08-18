import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { ProjectPreview } from './ProjectPreview';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const projectHref = project.slug === 'next-project' ? '/contact' : `/work/${project.slug}`;

  return (
    <article className={`project-row${project.tone === 'future' ? ' future' : ''}`}>
      <ProjectPreview project={project} />
      <div className="work-copy">
        <div>
          <span className="index">CASE {String(index + 1).padStart(2, '0')} · {project.kicker}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="chip-row">
            {project.tags.map(tag => <span className="chip" key={tag}>{tag}</span>)}
          </div>
        </div>
        <div className="work-actions">
          <Link className="btn btn-primary" to={projectHref}>
            {project.slug === 'next-project' ? 'Starta nästa projekt' : 'Öppna case'} ↗
          </Link>
          {project.url.startsWith('http') ? (
            <a className="btn btn-ghost" href={project.url} target="_blank" rel="noreferrer">
              Live site ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
