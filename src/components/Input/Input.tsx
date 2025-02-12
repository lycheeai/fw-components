// import { ArrowShortDownIcon, ArrowShortUpIcon } from '../../icons'
import { pluralize } from '../../utils/string'
import isNil from 'lodash/isNil'
import type { ChangeEvent, FocusEvent, KeyboardEvent } from 'react'
import React, { isValidElement, useLayoutEffect, useRef, useState } from 'react'
import type { IconComponent } from '../Icon'
import { Icon } from '../Icon'
import { withFormikSupport } from '../../hocs/withFormikSupport'
import { InputUI, InputUIConsts } from './InputUI'
import type { InputProps } from './types'
import { dispatchEvent, triggerOnChange } from './utils'

const InputComponent = ({
  label,
  type = 'text',
  placeholder,
  prepend,
  append,
  showAppend = false,
  suggestion,
  disabled,
  readOnly = false,
  focused,
  leftIcon,
  actionIcon,
  actionIconColor,
  tabIndex,
  fullWidth,
  centered = false,
  name,
  value = '',
  invalid = false,
  required,
  autoFocus,
  autoComplete,
  maxLength,
  showCharacterCount = false,
  size = 'large',
  transparent = false,
  error,
  displayError = true,
  submitCount,
  hideSpinner = false,
  step,
  min,
  max,
  inputRef,
  role,
  ariaDescribedBy,
  strikethrough,
  onChange,
  onValueChange,
  onFocus,
  onBlur,
  onKeyDown,
  onPaste,
  onActionIconClick,
}: InputProps) => {
  const prependEl = useRef<HTMLDivElement>(null)
  const appendEl = useRef<HTMLDivElement>(null)
  const localInputRef = inputRef || useRef<HTMLInputElement>(null)
  const [prependWidth, setPrependWidth] = useState(0)
  const [appendWidth, setAppendWidth] = useState(0)
  const [isFocused, setIsFocused] = useState(false)
  const charactersLeft = (maxLength || Infinity) - (value?.length || 0)

  useLayoutEffect(() => {
    if (focused !== undefined) {
      setIsFocused(focused)
    }
  }, [focused])

  useLayoutEffect(() => {
    if (prependEl.current) {
      setPrependWidth(prependEl.current.offsetWidth)
    }
  }, [prepend])

  useLayoutEffect(() => {
    if (appendEl.current) {
      setAppendWidth(appendEl.current.offsetWidth)
    }
  }, [append])

  const hasValue = () => {
    if (type === 'date' || type === 'datetime-local') return true

    if (isFocused) return true

    return !isNil(value) && !!value.toString().length
  }

  const hasFocus = () => {
    if (readOnly) return false

    return isFocused
  }

  const handleSetValue = (newValue: string) => {
    const inputElement = localInputRef.current

    if (inputElement && !disabled) {
      triggerOnChange(inputElement, newValue)
      dispatchEvent(inputElement)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }

    if (onValueChange) {
      onValueChange(e.target.value)
    }
  }

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (readOnly) return

    setIsFocused(true)

    if (onFocus) {
      onFocus(e)
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)

    if (onBlur) {
      onBlur(e)
    }
  }

  // NOTE: we don't want scroll on input when using mouse wheel
  const disableWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (type === 'number') {
      e.currentTarget.blur()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  const getIconOffset = () => {
    return InputUIConsts.INPUT_PADDING + InputUIConsts.ICON_SIZE + InputUIConsts.ICON_MARGIN
  }

  const getPrependOffset = () => {
    return InputUIConsts.INPUT_PADDING + prependWidth + InputUIConsts.PREPEND_MARGIN
  }

  const getAppendOffset = () => {
    return (
      InputUIConsts.INPUT_PADDING +
      appendWidth +
      InputUIConsts.APPEND_MARGIN +
      (actionIcon ? InputUIConsts.ICON_SIZE + InputUIConsts.APPEND_MARGIN : 0)
    )
  }

  const getInputOffset = () => {
    if (leftIcon && !prepend) {
      return getIconOffset()
    }

    if (hasValue() && prepend && prependWidth) {
      return getPrependOffset()
    }

    return InputUIConsts.INPUT_PADDING
  }

  const getRightInputOffset = () => {
    if (hasValue() && append && appendWidth) {
      return getAppendOffset()
    }

    if (actionIcon) {
      return getIconOffset()
    }
  }

  const getLabelOffset = () => {
    if (leftIcon && !prepend) {
      return getIconOffset()
    }
  }

  const getPlaceholder = () => {
    return label ? undefined : placeholder
  }

  const getLabelId = () => {
    return name ? `${name}__label` : undefined
  }

  const getInputId = () => {
    return name ? `${name}__input` : undefined
  }

  const renderIcon = () => {
    if (!leftIcon || prepend) return null

    const isIconValidElement = isValidElement(leftIcon)

    return (
      <InputUI.IconContainer $validElement={isIconValidElement} $hasValue={hasValue()}>
        {isIconValidElement ? (
          leftIcon
        ) : (
          <Icon component={leftIcon as IconComponent} height={InputUIConsts.ICON_SIZE} />
        )}
      </InputUI.IconContainer>
    )
  }

  const renderActionIcon = () => {
    if (!actionIcon) return null

    return (
      <InputUI.ActionIconContainer
        $size={size}
        $iconColor={actionIconColor}
        $hoverable={!disabled && !!onActionIconClick}
        data-testid="Input.ActionIcon"
        onClick={onActionIconClick}
      >
        {isValidElement(actionIcon) ? (
          actionIcon
        ) : (
          <Icon component={actionIcon as IconComponent} height={InputUIConsts.ACTION_ICON_SIZE} />
        )}
      </InputUI.ActionIconContainer>
    )
  }

  const renderPrepend = () => {
    if (!prepend) return null

    return (
      <InputUI.Prepend
        ref={prependEl}
        $size={size}
        $hasLabel={!!label}
        $visible={hasValue() && !!prependWidth}
      >
        {prepend}
      </InputUI.Prepend>
    )
  }

  const renderAppend = () => {
    if (!append) return null

    return (
      <InputUI.Append
        ref={appendEl}
        $size={size}
        $hasLabel={!!label}
        /**
         The showAppend flag is crucial for correct component rendering.
         Mostly when rendering is conditional (see TrackingCouriersInputComponent).
         */
        $visible={showAppend || (hasValue() && !!appendWidth)}
        $largeSpace={!!actionIcon}
      >
        {append}
      </InputUI.Append>
    )
  }

  const increaseValue = () => {
    handleSetValue(value ? `${parseInt(value) + 1}` : '1')
  }

  const decreaseValue = () => {
    handleSetValue(value ? `${parseInt(value) - 1}` : '-1')
  }

  const renderSpinner = () => {
    if (type === 'number' && !hideSpinner) {
      return (
        <InputUI.SpinnerContainer>
          {/* <InputUI.SpinnerItem
            data-testid="Input.SpinnerItem"
            aria-label="Increase"
            disabled={!!disabled || (!!max && Number(value) >= max)}
            icon={ArrowShortUpIcon}
            iconSize={12}
            onClick={increaseValue}
          />
          <InputUI.SpinnerItem
            data-testid="Input.SpinnerItem"
            aria-label="Decrease"
            disabled={!!disabled || (!!min && Number(value) <= min)}
            icon={ArrowShortDownIcon}
            iconSize={12}
            onClick={decreaseValue}
          /> */}
        </InputUI.SpinnerContainer>
      )
    }

    return null
  }

  return (
    <InputUI.Root $fullWidth={!!fullWidth}>
      <InputUI.Box
        $invalid={invalid}
        $fullWidth={fullWidth}
        $disabled={disabled}
        $focused={hasFocus()}
        $size={size}
        $transparent={transparent && !hasFocus()}
      >
        {renderPrepend()}
        <InputUI.Container>
          <InputUI.Input
            ref={localInputRef}
            $inputSize={size}
            $hasLabel={!!label && hasValue()}
            $hasSpinner={!hideSpinner}
            $centered={centered}
            id={getInputId()}
            type={type}
            name={name}
            value={value}
            placeholder={getPlaceholder()}
            disabled={disabled}
            $readOnly={readOnly}
            required={required}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            maxLength={maxLength}
            step={step}
            min={min}
            max={max}
            tabIndex={tabIndex}
            aria-labelledby={getLabelId()}
            aria-invalid={invalid ? 'true' : 'false'}
            data-testid="Input"
            style={{ paddingLeft: getInputOffset(), paddingRight: getRightInputOffset() }}
            role={role}
            aria-describedby={ariaDescribedBy}
            $strikethrough={strikethrough}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onWheel={disableWheel}
            onKeyDown={handleKeyDown}
            onPaste={onPaste}
          />
          <InputUI.Label
            id={getLabelId()}
            $hasValue={hasValue()}
            htmlFor={getInputId()}
            $size={size}
            style={{ paddingLeft: getLabelOffset() }}
            data-testid="Input.Label"
          >
            {label}
          </InputUI.Label>
          {renderSpinner()}
        </InputUI.Container>
        {renderAppend()}
        {renderIcon()}
        {renderActionIcon()}
        {showCharacterCount && (
          <InputUI.Info>
            {`${charactersLeft} ${pluralize(charactersLeft, 'character')} left`}
          </InputUI.Info>
        )}
      </InputUI.Box>
      {(!displayError || !error) && suggestion && (
        <InputUI.Suggestion>{suggestion}</InputUI.Suggestion>
      )}
      {displayError && !!error && (
        <InputUI.Error errorTimestampKey={submitCount}>{error}</InputUI.Error>
      )}
    </InputUI.Root>
  )
}

export const Input = withFormikSupport(InputComponent)
