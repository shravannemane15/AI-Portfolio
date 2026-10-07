export interface Responsibility {
  title: string;
  description: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  responsibilities: Responsibility[];
  skills: string[];
  highlights: Highlight[];
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'elevance-skills',
    company: 'Elevance Skills',
    role: 'DATA ANALYST INTERN',
    period: 'July 2026',
    duration: '1 month',
    responsibilities: [
      {
        title: 'CRYPTO MARKET ANALYSIS',
        description: 'Analyzed cryptocurrency market data across 10+ assets using Python, Pandas and NumPy.'
      },
      {
        title: 'DASHBOARDS',
        description: 'Built Power BI and Tableau dashboards covering price trends, volatility indicators, and trading volume KPIs.'
      },
      {
        title: 'DATA QUALITY',
        description: 'Achieved 95%+ data consistency during data collection and cleaning.'
      },
      {
        title: 'FORECASTING',
        description: 'Worked with time-series trend forecasting.'
      },
      {
        title: 'REPORTING',
        description: 'Used Matplotlib and Seaborn for analytical reporting.'
      },
      {
        title: 'ETL / SQL',
        description: 'Optimized SQL workflows for crypto transaction ETL.'
      }
    ],
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'Power BI',
      'Tableau',
      'Matplotlib',
      'Seaborn',
      'Time-Series Analysis'
    ],
    highlights: [
      { value: '10+', label: 'ASSETS ANALYZED' },
      { value: '95%+', label: 'DATA CONSISTENCY' },
      { value: '1 MONTH', label: 'INTERNSHIP' }
    ]
  }
];
