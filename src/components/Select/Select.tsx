import { ArrowShortDownIcon, CloseIcon } from '../../icons'
import isNil from 'lodash-es/isNil'
import type { ChangeEvent, FocusEvent } from 'react'
import React, { useState } from 'react'
import { Icon } from '../Icon'
import { withFormikSupport } from '../../hocs/withFormikSupport'
import { Input } from '../Input'
import * as S from './Select.styled'
import type { SelectProps } from './types'

const SelectComponent = ({
  options,
  name,
  disabled,
  invalid,
  label,
  value = '',
  error,
  displayError = true,
  submitCount,
  autoComplete,
  prepend,
  suggestion,
  size = 'large',
  transparent = false,
  fullWidth = false,
  onClear,
  onChange,
  onBlur,
  onValueChange,
}: SelectProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const renderOptions = () => {
    return (
      <>
        <option hidden disabled value="" />
        {options.map((item) => (
          <option
            key={!isNil(item.key) ? item.key : item.value}
            value={item.value}
            disabled={item.disabled}
          >
            {item.label}
          </option>
        ))}
      </>
    )
  }

  const getInputValue = () => {
    const selectedOption = options.find((item) => item.value === value)

    return selectedOption ? selectedOption.label : ''
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e: FocusEvent<HTMLSelectElement>) => {
    if (onBlur) {
      onBlur(e)
    }

    setIsFocused(false)
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e)
    }

    if (onValueChange) {
      onValueChange(e.target.value)
    }
  }

  return (
    <S.Container $fullWidth={fullWidth}>
      <div aria-hidden="true">
        <Input
          disabled={disabled}
          label={label}
          value={getInputValue()}
          error={error}
          displayError={displayError}
          submitCount={submitCount}
          prepend={prepend}
          suggestion={suggestion}
          size={size}
          transparent={transparent}
          invalid={invalid}
          focused={isFocused}
          fullWidth={fullWidth}
          tabIndex={-1}
          autoComplete="off"
          actionIcon={
            <S.ActionIconsContainer>
              {!!getInputValue() && onClear && (
                <S.ClearIcon onClick={onClear}>
                  <Icon component={CloseIcon} height={10} />
                </S.ClearIcon>
              )}
              {(!transparent || isFocused) && (
                <S.ArrowIconContainer>
                  <Icon component={ArrowShortDownIcon} height={size === 'small' ? 12 : 15} />
                </S.ArrowIconContainer>
              )}
            </S.ActionIconsContainer>
          }
        />
      </div>
      <S.Select
        name={name}
        disabled={disabled}
        value={value}
        $inputSize={size}
        autoComplete={autoComplete}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        aria-label={label}
        data-testid="Select.Select"
      >
        {renderOptions()}
      </S.Select>
    </S.Container>
  )
}

export const Select = withFormikSupport(SelectComponent)
