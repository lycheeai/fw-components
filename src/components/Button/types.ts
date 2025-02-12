import type { MouseEventHandler, MutableRefObject, ReactElement, ReactNode } from 'react'

export type ButtonProps = {
  forwardedRef?: MutableRefObject<HTMLButtonElement | null>
  id?: string
  label?: ReactNode
  appearance?: 'primary' | 'secondary' | 'destructive' | 'destructive-inverted'
  size?: 'small' | 'medium' | 'large'
  icon?: ReactElement
  leftIcon?: ReactElement
  iconColor?: string
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top' | string
  download?: string
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  multiline?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  analytics?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
