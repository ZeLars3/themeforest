import styled from 'styled-components'

export const BlogContainer = styled.section`
  padding: 70px 0;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`

export const BlogWrapper = styled.div`
  max-width: 1110px;
  margin: 20px auto;
  padding: 0 16px;
`

export const ButtonWrapper = styled.div`
  @media (max-width: 768px) {
    button {
      border: none;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      padding: 15px 37px;
      width: 100%;
    }
  }
`

export const BlogList = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 16px 0 36px 0;
  }
`

export const BlogWrapperText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  @media (max-width: 768px) {
    margin: 0;
  }
`

export const BlogTitle = styled.h2`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`

export const BlogController = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const SelectButton = styled.button`
  width: 110px;
  padding: 15px 40px;
  border-radius: 20px;
  margin-left: 15px;
  border: none;
  cursor: pointer;
  transition: 0.7s;
  background: ${({ theme }) => theme.colors.tertiary};
`

export const Icon = styled.img``
