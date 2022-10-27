import { FC } from 'react'

import { Help, FAQsHead, FAQsList } from 'components'

export const FAQs: FC = () => {
  return (
    <>
      <FAQsHead />
      <FAQsList />
      <Help />
    </>
  )
}
