import type { Key, ReactNode } from 'react'
import type { Colors } from '../../../colors'
import type { IconComponent } from '../../Icon'

export type InputSize = 'small' | 'medium' | 'large'

export type RootProps = {
  $fullWidth?: boolean
}

export type LabelProps = {
  $hasValue?: boolean
  $size?: InputSize
}

export type InputProps = {
  $inputSize: InputSize
  $hasLabel?: boolean
  $hasSpinner?: boolean
  $readOnly?: boolean
  $centered?: boolean
  $strikethrough?: boolean
}

export type SpinnerItemProps = {
  icon: IconComponent
  iconSize: number
}

export type PrependProps = {
  $size: InputSize
  $visible: boolean
  $hasLabel?: boolean
}

export type AppendProps = PrependProps & {
  $largeSpace?: boolean
}

export type IconContainerProps = {
  $hasValue?: boolean
  $validElement?: boolean
}

export type ActionIconContainerProps = {
  $size: InputSize
  $iconColor?: (typeof Colors)[keyof typeof Colors]
  $hoverable: boolean
}

export type SuggestionProps = {
  $withoutMargin?: boolean
  children: NonNullable<ReactNode>
}

export type ErrorProps = {
  errorTimestampKey?: Key
  $withoutMargin?: boolean
  children: ReactNode
}

export type BoxProps = {
  $invalid?: boolean
  $fullWidth?: boolean
  $fullHeight?: boolean
  $disabled?: boolean
  $focused?: boolean
  $size?: InputSize
  $transparent?: boolean
}
