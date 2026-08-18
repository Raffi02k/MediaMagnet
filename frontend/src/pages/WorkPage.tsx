import { PageMeta } from '../components/PageMeta';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function WorkPage() {
  return (
    <>
      <PageMeta
        title="Selected Work | Raffi Digital"
        description="Utvalda projekt och cases från Raffi Digital."
        bodyClassName="page-work page-agency"
      />
      <section className="subhero">
        <div className="glow glow-blue" />
        <div className="container">
          <span className="eyebrow">Work</span>
          <div className="page-title-line">
            <div>
              <h1>Selected Work.</h1>
              <p>Projekt byggda för att synas, sälja och vara enkla att driffa. Första caset är live och portfolion är strukturerad så att framtida uppdrag enkelt kan läggas till.</p>
            </div>
            <div className="number">02</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="work-index">
            {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
          </div>
        </div>
      </section>
    </>
  );
}
