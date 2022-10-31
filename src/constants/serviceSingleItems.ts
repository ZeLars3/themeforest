import SolutionDiagram from 'assets/img/solutionDiagram.jpg'
import SolutionPC from 'assets/img/solutionPC.jpg'
import { IServiceSingle } from 'types'

export const SERVICE_SINLE_ITEMS: IServiceSingle[] = [
  {
    id: 1,
    title: 'Customer',
    text: 'Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel.',
    img: SolutionDiagram,
  },
  {
    id: 2,
    title: 'Challenge',
    text: 'Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel. Morbi urna massa,imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci.',
  },
  {
    id: 3,
    title: 'Solution',
    text: 'Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel. Morbi urna massa,imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, laciniaauctor orci.',
    list: [
      'Hid mobile access',
      'Location services',
      'Visitor management',
      'Cybersecurity coordination',
    ],
    img: SolutionPC,
  },
  {
    id: 4,
    title: 'Results',
    text: 'Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci.',
  },
  {
    id: 5,
    title: 'Technologies',
    text: 'Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci.',
  },
]
