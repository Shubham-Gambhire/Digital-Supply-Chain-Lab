export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  status: string;
  scor: string;
  technologies: string[];
  industries: string[];
  featured: boolean;
  recognition?: string;
  businessProblem: string;
  decisionExplored: string;
  approach: { businessLogic: string; technicalImplementation: string };
  prototype: { screenshots: ProjectScreenshot[]; videos: unknown[] };
  tradeoffs: string;
  futureWork: string[];
  githubUrl: string | null;
  downloadUrl: string | null;
  downloadLabel?: string;
  demoUrl: string | null;
};

export const projects: Project[];
