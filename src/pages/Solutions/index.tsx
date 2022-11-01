import { FC } from 'react'

import {
  Help,
  SolutionsChoose,
  SolutionsHead,
  SolutionsList,
  Testimonials,
} from '@/components'

const Solutions: FC = () => {
  return (
    <>
      <SolutionsHead />
      <SolutionsList />
      <SolutionsChoose />
      <Testimonials />
      <Help />
    </>
  )
}

export default Solutions
