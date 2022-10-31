import { FC } from 'react'

import Team from 'assets/img/team.jpg'
import TeamMission from 'assets/img/teamMission.jpg'

import {
  AboutUsInfoContainer,
  AboutUsInfoWrapper,
  AboutUsInfoItem,
  AboutUsInfoTitle,
  AboutUsInfoText,
  AboutUsInfoImg,
  AboutUsInfoWrapperText,
} from './styled'

export const AboutUsInfo: FC = () => {
  return (
    <AboutUsInfoContainer>
      <AboutUsInfoWrapper>
        <AboutUsInfoItem>
          <AboutUsInfoWrapperText>
            <AboutUsInfoTitle>Who we are</AboutUsInfoTitle>
            <AboutUsInfoText>
              Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
              <br />
              <br />
              Donec tincidunt tempor quam, non mollis quam
              finibus nec. Quisque finibus consequat felis
              vel pretium. Aliquam gravida nisi vel
              convallis ultricies. Integer ante sapien,
              consequat et dolor vel, cursus lacinia lectus.
            </AboutUsInfoText>
          </AboutUsInfoWrapperText>
          <AboutUsInfoImg
            src={Team}
            alt="Our team"
          />
        </AboutUsInfoItem>
        <AboutUsInfoItem>
          <AboutUsInfoImg
            src={TeamMission}
            alt="Our team"
          />
          <AboutUsInfoWrapperText>
            <AboutUsInfoTitle>Our mission</AboutUsInfoTitle>
            <AboutUsInfoText>
              Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
              <br />
              <br />
              Donec tincidunt tempor quam, non mollis quam
              finibus nec. Quisque finibus consequat felis
              vel pretium.
            </AboutUsInfoText>
          </AboutUsInfoWrapperText>
        </AboutUsInfoItem>
      </AboutUsInfoWrapper>
    </AboutUsInfoContainer>
  )
}
