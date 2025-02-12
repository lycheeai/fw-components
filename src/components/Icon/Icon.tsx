import React from 'react'
import type { IconProps } from './types'

export const Icon = ({
  component: Component,
  width,
  height,
  alt,
  ariaLabel,
  ariaHidden,
}: IconProps) => {
  return (
    <Component
      width={width}
      height={height}
      role="img"
      alt={alt}
      aria-label={ariaLabel || alt}
      aria-hidden={ariaHidden}
    />
  )
}
