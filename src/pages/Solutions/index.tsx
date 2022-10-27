import { FC } from 'react'

import {
  Help,
  SolutionsChoose,
  SolutionsHead,
  SolutionsList,
  Testimonials,
} from 'components'

export const Solutions: FC = () => {
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
