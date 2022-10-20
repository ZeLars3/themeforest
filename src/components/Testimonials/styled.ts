import styled from 'styled-components'

export const TestimonialsContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 120px 0;
`

export const TestimonialsWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`

export const TestimonialsTitle = styled.h2`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
`

export const TestimonialsController = styled.div`
  display: flex;
  gap: 15px;
`

export const TestimonialButton = styled.button`
  width: 110px;
  padding: 15px 40px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.7s;
  border-radius: 20px;
  background-color: ${({ theme }) =>
    theme.colors.background};
`

export const TestimonialsList = styled.ul`
  display: flex;
  max-width: 1110px;
  margin: 0 auto;
`

export const Icon = styled.img``
