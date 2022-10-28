// import { useState, useEffect, useRef } from 'react'

import { useState, useEffect } from "react"

// export const useReadingProgress = (): number => {
//   const [progress, setProgress] = useState <number>(0)
//   const scrollRef = useRef<any>(null)

//   const calculatePercentageScrolled = (): void => {
//     const fullHeight: number =
//       document.body.clientHeight -
//       ((document.documentElement &&
//         document.documentElement.clientHeight) ||
//         0)

//     const total: number =
//       (window.scrollY / fullHeight) * 100

//     setProgress(total)
//   }

//   useEffect(() => {
//     scrollRef.current = window.addEventListener(
//       'scroll',
//       calculatePercentageScrolled,
//     )

//     return () =>
//       (scrollRef.current = window.removeEventListener(
//         'scroll',
//         calculatePercentageScrolled,
//       ))
//   })

//   return progress
// }

export const useReadingProgress = () => {
  const [completion, setCompletion] = useState<number>(0)

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100,
        )
      }
    }

    window.addEventListener('scroll', updateScrollCompletion)

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion)
    }
  }, [])

  return completion
}

