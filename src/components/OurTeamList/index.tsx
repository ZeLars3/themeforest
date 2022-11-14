import { FC } from 'react'
import { TEAM_ITEMS } from '@/constants/teamItems'
import Masonry, {
  ResponsiveMasonry,
} from 'react-responsive-masonry'

import {
  OurTeamListContainer,
  OurTeamListWrapper,
} from './styled'
import { OurTeamItem } from './OurTeamItem'

export const OurTeamList: FC = () => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 1 }}>
      <Masonry columnsCount={1}>
        <OurTeamListContainer>
          <OurTeamListWrapper>
            {TEAM_ITEMS.map(({ id, ...restProps }) => (
              <OurTeamItem
                key={id}
                id={id}
                {...restProps}
              />
            ))}
          </OurTeamListWrapper>
        </OurTeamListContainer>
      </Masonry>
    </ResponsiveMasonry>
  )
}
