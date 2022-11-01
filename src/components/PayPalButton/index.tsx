import { FC } from 'react'
import {
  PayPalScriptProvider,
  PayPalButtons,
} from '@paypal/react-paypal-js'

export const PayPalButton: FC = () => {
  return (
    <PayPalScriptProvider options={{ 'client-id': 'test' }}>
      <PayPalButtons
        createOrder={(data, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '1.99',
                },
              },
            ],
          })
        }}
        onApprove={(data, actions: any) => {
          return actions.order.capture().then((details: any) => {
            const name = details.payer.name.given_name
            alert(`Transaction completed by ${name}`)
          })
        }}
      />
    </PayPalScriptProvider>
  )
}