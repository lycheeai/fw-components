import type { MouseEventHandler, ReactElement } from 'react'
import type { IconComponent } from '../Icon'

export type ButtonCleanProps = {
  appearance?: 'primary' | 'secondary' | 'destructive'
  href?: string
  target?: '_blank'
  label: ReactElement | string
  title?: string
  icon?: IconComponent
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
}
