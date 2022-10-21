import styled from 'styled-components'

export const PriceItemContainer = styled.li<any> `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 255px;
  height: 522px;
  padding: 35px 20px;
  border-radius: 6px;
  transition: 0.7s;
  color: ${(props) => (props.selected ? 'black' : 'white')};
  background-color: ${(props) =>
    props.selected ? 'white' : 'blue'}; 
  ${({ theme }) => theme.shadows.shadowCard3};

  button {
    width: 100%;
    padding: 10px 65px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    color: ${(props) =>
      props.selected ? 'white' : 'blue'};
    background-color: ${(props) =>
      props.selected ? 'blue' : 'white'}; 
  }
`

export const PriceItemTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
`

export const PriceItemWrapperInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0 30px 0;
`

export const PriceItemPrice = styled.h4`
  font-weight: 800;
  font-size: 26px;
  line-height: 40px;
  letter-spacing: -0.015em;
`

export const PriceToggleWrapper = styled.p`
  flex-grow: 2;
  display: flex;
  justify-content: flex-end;

  button {
    max-width: 41px;
    max-height: 32px;
    margin-left: 15px;
    padding: 4px 13.5px;
  }
`

export const PriceItemAdvantages = styled.ul`
  margin: 20px 0;
`

export const PriceItemAdvantageItem = styled.li<{checkmark: string}>`
  display: flex;
  align-items: center;
  padding: 0 0 10px 0;
`

export const Icon = styled.img``
