import {
  Dispatch,
  FC,
  useEffect,
  useState,
  SetStateAction,
} from 'react'

import ContentRoutes from 'components/common/Routes'
import { appActions } from 'store/slices'
import { useActions } from 'hooks'

const App: FC = () => {
  const [width, setWidth] = useState<number>(
    () => document.documentElement.clientWidth
  )
  const { setViewport } = useActions({ ...appActions })

  const getWindowSize = (
    setWidth: Dispatch<SetStateAction<number>>,
    value: number,
  ) => {
    setWidth(value)
  }

  useEffect(() => {
    window.addEventListener('resize', () =>
      getWindowSize(setWidth, innerWidth),
    )

    if (width > 768) {
      setViewport({ value: 'desktop' })
    } else if (width > 380) {
      setViewport({ value: 'tablet' })
    } else {
      setViewport({ value: 'mobile' })
    }

    return () =>
      window.removeEventListener(
        'resize',
        () => getWindowSize,
      )
  }, [width])

  return <ContentRoutes />
}

export default App
