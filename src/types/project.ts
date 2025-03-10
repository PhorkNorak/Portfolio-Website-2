export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string | string[];
  image: string;
  demoVideo?: string;
  researchPaperImage?: string;
  link?: string;
  details: {
    overview: string;
    features: string[];
    technicalDetails: string[];
    achievements?: string[];
    comparisonTable?: {
      metrics: Array<{
        name: string;
        lbph: string;
        inceptionResNet: string;
      }>;
    };
  };
  date: string;
}
