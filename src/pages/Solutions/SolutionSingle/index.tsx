import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import {
  Help,
  SolutionSingleHead,
  SolutionSingleMain,
} from '@/components'
import { SOLUTION_ITEMS } from '@/constants/index'
import { IServicesItem } from '@/types'

const SolutionSingle: FC = () => {
  const { pathname } = useLocation()

  const solution: IServicesItem = SOLUTION_ITEMS.filter(
    ({ id }) => id === pathname.split('=')[1],
  )[0]
  const { title } = solution

  return (
    <>
      <SolutionSingleHead title={title} />
      <SolutionSingleMain />
      <Help />
    </>
  )
}

export default SolutionSingle
