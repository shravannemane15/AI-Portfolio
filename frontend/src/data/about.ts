export interface FocusArea {
  title: string;
  category: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface AboutData {
  introduction: string;
  positioning: string;
  focusAreas: FocusArea[];
  principles: Principle[];
  currentFocus: string[];
}

export const ABOUT_DATA: AboutData = {
  introduction:
    "I'm an Artificial Intelligence & Data Science engineering student interested in building practical AI systems and working with data. I enjoy turning technical concepts into working systems, visual experiences, and useful applications.",

  positioning:
    "I don't just want to use AI tools. I want to understand how intelligent systems are built, how data moves through them, and how they can become useful real-world products.",

  focusAreas: [
    { title: 'AI ENGINEERING', category: 'Core' },
    { title: 'GENERATIVE AI', category: 'Core' },
    { title: 'DATA ANALYSIS', category: 'Core' },
    { title: 'RAG', category: 'Applied' },
    { title: 'AGENTIC AI', category: 'Applied' },
    { title: 'AWS / CLOUD', category: 'Infrastructure' },
  ],

  principles: [
    {
      title: 'BUILDING',
      description: 'Turning ideas into working systems.',
    },
    {
      title: 'LEARNING',
      description: 'Continuously exploring AI, data, and cloud technologies.',
    },
    {
      title: 'EXPERIMENTING',
      description: 'Trying different ways to make technology useful.',
    },
  ],

  currentFocus: [
    'AI Engineering',
    'RAG',
    'Agentic AI',
    'Data Analysis',
    'AWS Cloud',
  ],
};
