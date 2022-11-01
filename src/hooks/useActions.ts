import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'

import { AppDispatch } from '@/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
  const dispatch = useAppDispatch()
  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch],
  )
}
