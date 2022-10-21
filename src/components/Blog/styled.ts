import styled from 'styled-components'

export const BlogContainer = styled.div`
padding: 70px 0;
background-color: ${({ theme }) => theme.colors.white};
`

export const BlogWrapper = styled.div`
  max-width: 1110px;
  margin: 20px auto;
`

export const BlogList = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BlogWrapperText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`

export const BlogTitle = styled.h2`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
`

export const BlogController = styled.div`
  display: flex;
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
