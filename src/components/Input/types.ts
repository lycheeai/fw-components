import type {
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  RefObject,
} from 'react'
import type { Colors } from '../../colors'
import type { IconComponent } from '../Icon'
import type { InputSuggestionProps } from './InputUI'

export type AutoComplete =
  | 'off'
  | 'new-password'
  | 'name'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'email'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-level1'
  | 'address-level2'
  | 'postal-code'
  | 'country'
  | 'tel'

export interface InputProps {
  label?: string
  type?: 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'tel' | 'text'
  placeholder?: string
  prepend?: ReactNode
  append?: ReactNode
  showAppend?: boolean
  suggestion?: InputSuggestionProps['children']
  disabled?: boolean
  readOnly?: boolean
  focused?: boolean
  tabIndex?: number
  fullWidth?: boolean
  centered?: boolean
  leftIcon?: IconComponent | ReactNode
  actionIcon?: IconComponent | ReactNode
  actionIconColor?: (typeof Colors)[keyof typeof Colors]
  name?: string
  value?: string
  invalid?: boolean
  required?: boolean
  autoFocus?: boolean
  autoComplete?: AutoComplete
  maxLength?: number
  showCharacterCount?: boolean
  size?: 'small' | 'medium' | 'large'
  transparent?: boolean
  error?: ReactNode
  submitCount?: number
  displayError?: boolean
  hideSpinner?: boolean
  step?: number
  min?: number
  max?: number
  inputRef?: RefObject<HTMLInputElement>
  role?: string
  ariaDescribedBy?: string
  strikethrough?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onValueChange?: (value: string) => void
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void
  onActionIconClick?: (event: MouseEvent) => void
}
