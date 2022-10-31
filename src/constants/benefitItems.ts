import { IBenefitItem } from 'types'

import { BENEFIT_ICONS } from './benefitIcons'

export const BENEFIT_ITEMS: IBenefitItem[] = [
  {
    id: 1,
    title: 'Machine learning',
    text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    icon: BENEFIT_ICONS.Brain,
  },
  {
    id: 2,
    title: 'Embed analytics',
    text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    icon: BENEFIT_ICONS.Statistic,
  },
  {
    id: 3,
    title: 'Access control',
    text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    icon: BENEFIT_ICONS.Key,
  },
  {
    id: 4,
    title: 'Data analytics',
    text: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
    icon: BENEFIT_ICONS.Diagram,
  },
]
