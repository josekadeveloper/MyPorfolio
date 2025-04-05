import React from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

import './error-boundary.scss'

const ErrorFallback = () => (
  <h1 className="error-boundary">An error has ocurred.</h1>
)

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary
