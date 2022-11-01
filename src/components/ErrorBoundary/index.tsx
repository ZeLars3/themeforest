import { Component } from 'react'

import { IErrorBoundary, IErrorBoundaryState } from '@/types'

export class ErrorBoundary extends Component<
IErrorBoundary,
IErrorBoundaryState
> {
  constructor (props: IErrorBoundary) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError (
    _: Error,
  ): IErrorBoundaryState {
    return {
      hasError: true,
    }
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return <h1>Sorry.. there was an error</h1>
    }

    return children
  }
}
