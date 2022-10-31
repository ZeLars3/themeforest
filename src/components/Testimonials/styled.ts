import styled from 'styled-components'

export const TestimonialsContainer = styled.section`
  padding: 120px 0;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`

export const TestimonialsWrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

export const TestimonialsTitle = styled.h2`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
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

  @media (max-width: 768px) {
    display: flex;
    padding: 15.8px;
    width: 48px;
    height: 40px;
  }
`

export const TestimonialsList = styled.ul`
  display: flex;
  max-width: 1110px;
  margin: 0 auto;
`

export const Icon = styled.img`
  @media (max-width: 768px) {
    width: 16.8px;
    height: 9px;
  }
`
