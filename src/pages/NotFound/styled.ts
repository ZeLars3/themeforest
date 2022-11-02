import styled from 'styled-components'

export const NotFoundContainer = styled.section`
  padding: 120px;
  
  @media (max-width: 768px) {
    padding: 50px;
  }
`

export const NotFoundWrapper = styled.div`
  display: flex;
  max-width: 1110px;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
`

export const NotFoundTitle = styled.h1`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 800;
  font-size: 80px;
  line-height: 100px;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const NotFoundSubtitle = styled.h5`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`
