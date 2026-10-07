export interface ProjectMetrics {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  category: string;
  role?: string;
  description: string;
  technologies: string[];
  features?: string[];
  metrics?: ProjectMetrics[];
  featured: boolean;
  imageUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'sentinel-ai',
    number: '01',
    title: 'SENTINELAI',
    subtitle: 'EDGE-NATIVE PRIVACY-AWARE SURVEILLANCE SYSTEM',
    category: 'FINAL YEAR PROJECT',
    role: 'Privacy & Security Lead',
    description: 'SentinelAI is an Edge AI surveillance system designed for real-time detection of weapons and suspicious objects from CCTV/video streams.',
    technologies: ['YOLOv8', 'Computer Vision', 'Edge AI', 'Privacy', 'Python'],
    features: [
      'YOLOv8-based real-time object detection',
      'Face anonymization',
      'Privacy-aware video processing',
      'Secure data handling',
      'Access control',
      'Event-based storage',
      'Reduced unnecessary video retention'
    ],
    featured: true,
    imageUrl: '/images/sentinel_ai_architecture.png'
  },
  {
    id: 'financial-ops',
    number: '02',
    title: 'FINANCIAL OPERATIONS ANALYSIS',
    category: 'DATA ANALYTICS',
    description: 'Analyzed 50,000+ records using Python and SQL to identify revenue trends, cost variance and operational efficiency. Built dashboards in Power BI and Tableau and created ETL workflows to reduce manual reporting effort.',
    technologies: ['Python', 'SQL', 'Power BI', 'Tableau', 'Jupyter'],
    metrics: [
      { label: 'Records Analyzed', value: '50,000+' },
      { label: 'Manual Reporting Reduction', value: '~40%' },
      { label: 'Faster Insight Delivery', value: '~60%' }
    ],
    featured: false,
    imageUrl: '/images/financial_dashboard.jpg'
  },
  {
    id: 'customer-behavior',
    number: '03',
    title: 'CUSTOMER BEHAVIOR ANALYSIS',
    category: 'DATA ANALYTICS',
    description: 'Analyzed 30,000+ transactions to understand customer behavior, churn, retention and customer lifetime value across three segments. Used Python and SQL for data preparation and exploratory analysis and Power BI/Tableau for visualization.',
    technologies: ['Python', 'SQL', 'Power BI', 'Tableau', 'Jupyter'],
    features: [
      'Churn & Retention analysis',
      'Customer Lifetime Value (CLV)',
      'Exploratory Data Analysis (EDA)',
      'Correlation & Outlier analysis'
    ],
    metrics: [
      { label: 'Transactions', value: '30,000+' },
      { label: 'Customer Segments', value: '3' }
    ],
    featured: false,
    imageUrl: '/images/customer_behavior_dashboard.jpg'
  }
];
