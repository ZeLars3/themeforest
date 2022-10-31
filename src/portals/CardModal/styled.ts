import styled from 'styled-components'

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) =>
    theme.colors.backgroundModal};
`

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 6px;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

export const CardPrice = styled.h4``
export const CardTitle = styled.h3``
