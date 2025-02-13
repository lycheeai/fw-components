import type { MouseEventHandler, ReactElement } from 'react'
import type { IconComponent } from '../Icon'

export type ButtonCleanProps = {
  ariaLabel?: string
  appearance?: 'primary' | 'secondary' | 'destructive'
  href?: string
  target?: '_blank'
  analyticsKey?: string
  label: ReactElement | string
  title?: string
  icon?: IconComponent
  withUnderline?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
}
