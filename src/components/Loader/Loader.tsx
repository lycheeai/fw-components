import React from 'react'

import type { LoaderProps } from './types'
import styles from './Loader.module.css'

export const Loader = ({ appearance = 'secondary', size = 'medium' }: LoaderProps) => {
  const className = `${styles.wrapper} ${styles[appearance]} ${styles[size]}`

  const circleClassName = `${styles.circle} ${styles[appearance]} ${styles[size]}`

  return (
    <svg viewBox="0 0 100 100" aria-label="loader" data-testid="Loader" className={className}>
      <circle cx="50" cy="50" r="45" className={circleClassName} />
    </svg>
  )
}
