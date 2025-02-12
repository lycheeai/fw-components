import type { SVGAttributes, JSX } from 'react'

export type IconComponent = (props: SVGAttributes<SVGElement> & { alt?: string }) => JSX.Element

export type IconProps = {
  component: IconComponent
  width?: number
  height: number | string
  alt?: string
  ariaLabel?: string
  ariaHidden?: boolean
}
