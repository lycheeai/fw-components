import type { ChangeEvent, FocusEvent, ReactNode } from 'react'
import type { InputSuggestionProps } from '../Input/InputUI'
import type { InputAutoComplete } from '../Input'

export type SelectOption = {
  key?: string
  value: string
  label: string
  disabled?: boolean
}

export type SelectProps = {
  options: SelectOption[]
  name?: string
  disabled?: boolean
  invalid?: boolean
  label: string
  value: string | undefined
  error?: string
  displayError?: boolean
  submitCount?: number
  autoComplete?: InputAutoComplete
  prepend?: ReactNode
  suggestion?: InputSuggestionProps['children']
  size?: 'small' | 'medium' | 'large'
  transparent?: boolean
  fullWidth?: boolean
  onClear?: () => void
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  onBlur?: (e: FocusEvent<HTMLSelectElement>) => void
  onValueChange?: (value: string) => void
}
