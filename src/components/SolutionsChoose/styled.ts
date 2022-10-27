import styled from 'styled-components'

export const SolutionsChooseContainer = styled.section`
  width: 100%;
  margin-top: 120px;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    height: auto;
    margin-top: 50px;
    background: ${({ theme }) => theme.colors.white};
  }
`

export const SolutionsChooseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SolutionsChooseImgWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SolutionsChooseImg = styled.img`
  position: absolute;
  right: 0;
  width: 923px;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
  }
`

export const SolutionsChooseMain = styled.div`
  flex-grow: 1;
  width: 500px;
  padding: 118px 0 90px 50px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    margin-top: 34px;
  }
`

export const SolutionsChooseTitle = styled.h2`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const SolutionsChooseList = styled.ul`
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-top: 30px;
  }
`
