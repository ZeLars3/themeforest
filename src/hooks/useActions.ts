import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'

import { AppDispatch } from 'store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
type IsValidArg<T> = T extends object
  ? keyof T extends never
    ? false
    : true
  : true

export type ReplaceReturnType<T, TNewReturn> = T extends (a: infer A) => infer R
  ? IsValidArg<A> extends true
    ? (a: A) => TNewReturn
    : () => TNewReturn
  : never
  
export type ActionCreatorResponse<T extends (...args: any[]) => any> = ReturnType<ReturnType<T>>
export type RemapActionCreators<T extends ActionCreatorsMapObject> = {
    [K in keyof T]: ReplaceReturnType<T[K], ActionCreatorResponse<T[K]>>
  }
export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
    const dispatch = useAppDispatch()
    return useMemo(
      () => bindActionCreators<T, RemapActionCreators<T>>(actions, dispatch),
      [actions, dispatch],
    )
  }
