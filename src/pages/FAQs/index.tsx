import { FC } from 'react'

import { Help, FAQsHead, FAQsList } from '@/components'

const FAQs: FC = () => {
  return (
    <>
      <FAQsHead />
      <FAQsList />
      <Help />
    </>
  )
}

export default FAQs