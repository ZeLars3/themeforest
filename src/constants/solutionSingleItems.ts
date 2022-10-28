import SolutionDiagram from 'assets/img/solutionDiagram.jpg'
import SolutionPC from 'assets/img/solutionPC.jpg'
import { ISolutionSingleItem } from 'types'

import { SOLUTION_SINGLE_ARTICLES } from './solutionSingleList'

export const SOLUTION_SINGLE_ITEMS: ISolutionSingleItem[] = [
  {
    id: '1',
    name: 'What is Data integration?',
    text: 'Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.',
  },
  {
    id: '2',
    name: 'Types of Data visualisation',
    text: 'Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu: ',
    list: SOLUTION_SINGLE_ARTICLES,
    img: SolutionDiagram,
  },
  {
    id: '3',
    name: 'Data visualization practices',
    text: 'Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu. Phasellus sed venenatis leo. Cras pulvinar, eros sed dictum semper, orci ipsum scelerisque tortor, at euismod sem lectus sed ex. Praesent purus orci, rutrum ac aliquet nec, egestas sit amet nibh.',
    img: SolutionPC,
  },
  {
    id: '4',
    name: 'Data visualization in Ensome',
    text:
      'Cras aliquet felis nec lobortis pellentesque. Nam accumsan felis feugiat lorem volutpat, at mollis ipsum congue. Morbi non feugiat odio, ut facilisis eros. Duis in consequat mauris, vel interdum odio. Vestibulum et ex in neque bibendum vestibulum. Sed eget pharetra nunc. Duis mollis ante mauris, vitae volutpat libero rhoncus vitae.\n' +
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean luctus ultrices eros, vel sollicitudin arcu fringilla quis. \n' +
      'Vestibulum porttitor euismod sagittis. Pellentesque scelerisque purus nisi, ac convallis neque bibendum eget. Pellentesque augue nunc, ullamcorper vel sollicitudin sed, auctor nec libero. ',
  },
]
