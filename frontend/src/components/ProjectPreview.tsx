import type { Project } from '../data/projects';

type ProjectPreviewProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectPreview({ project, compact = false }: ProjectPreviewProps) {
  if (project.tone === 'paint') {
    return (
      <div className="work-preview paint">
        <div className="browser">
          <div className="browser-bar">
            <div className="browser-dots"><span /><span /><span /></div>
            <div className="browser-url">penselverket.edgeone.dev</div>
          </div>
          <div className="browser-screen">
            <img src="/assets/penselverket-hero.webp" alt="Preview av Penselverket-projektet" />
          </div>
        </div>
        <div className="preview-live"><i /> LIVE WEBSITE</div>
      </div>
    );
  }

  if (project.tone === 'data') {
    return (
      <div className="work-preview">
        <div className="data-preview" style={compact ? { width: '100%', height: 380 } : undefined}>
          <div className="data-grid">
            <div className="data-kpi"><strong>91</strong><span>Opportunity score</span></div>
            <div className="data-kpi"><strong>24</strong><span>Signals</span></div>
            <div className="data-kpi"><strong>7</strong><span>Leads</span></div>
          </div>
          <div className="data-chart" style={compact ? { height: 230 } : undefined} />
        </div>
      </div>
    );
  }

  return (
    <div className="work-preview">
      <div className="future-preview">
        <div>
          <strong>+1</strong>
          <span>Nytt projekt kan läggas till här</span>
        </div>
      </div>
    </div>
  );
}
