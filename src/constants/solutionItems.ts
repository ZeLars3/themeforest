import { IServicesItem } from '@/types'

import { SOLUTIONS_ICONS } from './solutionsIcons'

export const SOLUTION_ITEMS: IServicesItem[] = [
  {
    id: '1',
    title: 'Data integration',
    text: 'Extract, transform, load (ETL) or extract, load, transform (ELT); data governance (security, availability, quality) implementation.',
    icon: SOLUTIONS_ICONS.DataIntegration,
  },
  {
    id: '2',
    title: 'Data integration',
    text:
      'Data preparation and management; machine learning (ML); \n' +
      'designing and implanting artificial intelligence (AI) solutions.\n',
    icon: SOLUTIONS_ICONS.DataIntegration2,
  },
  {
    id: '3',
    title: 'Big data',
    text: 'Big data infrastructure setup and support.; big data quality and security management; big data capture, analysis and reporting.',
    icon: SOLUTIONS_ICONS.BigData,
  },
  {
    id: '4',
    title: 'Data warehousing',
    text: 'The process of constructing and using a data warehouse. Data warehouse and data marts design and implementation.',
    icon: SOLUTIONS_ICONS.DataWarehousing,
  },
  {
    id: '5',
    title: 'Self-service BI',
    text: 'Business intelligence; data analytics infrastructure design and implementation; scheduled analytics querying and reporting.',
    icon: SOLUTIONS_ICONS.SelfService,
  },
  {
    id: '6',
    title: 'Data visualization',
    text: 'Interactive dashboarding; custom and pre-built visuals; multiple visualization techniques (symbol maps, line charts, pie charts...)',
    icon: SOLUTIONS_ICONS.DataVisualization,
  },
]
