import styled, { css } from 'styled-components'
import tinycolor from 'tinycolor2'
import { Colors } from '../../../colors'
import type {
  ActionIconContainerProps,
  AppendProps,
  BoxProps,
  IconContainerProps,
  InputProps,
  LabelProps,
  PrependProps,
  RootProps,
  SuggestionProps,
} from './types'

export const INPUT_PADDING = 15
export const PREPEND_MARGIN = 4
export const APPEND_MARGIN = 4
export const ICON_SIZE = 16
export const ACTION_ICON_SIZE = 12
export const ICON_MARGIN = 10

export const Root = styled.div<RootProps>`
  position: relative;

  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
`

export const Container = styled.div`
  position: relative;
  width: 100%;
`

const getBoxBorderColor = ({
  $invalid,
  $focused,
  $transparent,
}: BoxProps) => {
  if ($transparent) {
    return 'transparent'
  }

  if ($invalid) {
    return `${Colors.R300} !important`
  }

  if ($focused) {
    return `${Colors.GS1000} !important`
  }

  return Colors.GS500
}

const getBoxHoverBorderColor = () => {
  return Colors.GS600
}

export const getBoxBackground = ({
  $transparent,
}: BoxProps) => {
  if ($transparent) {
    return 'transparent'
  }

  return Colors.GS0
}

const getBoxDisabledBackground = ({
  $transparent,
}: BoxProps) => {
  if ($transparent) {
    return 'transparent'
  }

  return Colors.GS200
}

const getDisabledOpacity = () => {
  return 1;
}

export const Box = styled.div<BoxProps>`
  /* Input */
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  background: ${getBoxBackground};
  border: 1px solid ${getBoxBorderColor};
  display: flex;
  align-items: center;

  ${({ $size, $fullHeight }) =>
    $size === 'large' &&
    !$fullHeight &&
    css`
      height: 56px;
    `}

  ${({ $size, $fullHeight }) =>
    $size === 'medium' &&
    !$fullHeight &&
    css`
      height: 48px;
    `}

  ${({ $size, $fullHeight }) =>
    $size === 'small' &&
    !$fullHeight &&
    css`
      height: 40px;
    `}

  ${({ $disabled }) =>
    !$disabled &&
    css`
      &:hover {
        border-color: ${getBoxHoverBorderColor};
      }
    `}

  ${({ $disabled, $transparent }) =>
    $disabled &&
    css`
      opacity: ${getDisabledOpacity};
      background: ${getBoxDisabledBackground({ $transparent })};
      cursor: not-allowed;
    `}
`

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: ${Colors.GS600};
  pointer-events: none;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: nowrap;

  user-select: none;

  ${({ $size, $hasValue }) =>
    $size === 'large' &&
    css`
      height: 56px;
      line-height: 56px;

      ${$hasValue &&
      css`
        font-size: 12px;
        line-height: 34px;
      `}
    `}

  ${({ $size, $hasValue }) =>
    $size === 'medium' &&
    css`
      height: 48px;
      line-height: 48px;

      ${$hasValue &&
      css`
        font-size: 12px;
        line-height: 30px;
      `}
    `}

  ${({ $size, $hasValue }) =>
    $size === 'small' &&
    css`
      height: 40px;
      line-height: 40px;

      ${$hasValue &&
      css`
        display: none;
      `}
    `}
`

const getTextColor = () => Colors.GS1000

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 0 15px;
  background: transparent;
  border: 0;
  outline: 0;
  vertical-align: top;

  font-size: 16px;
  color: ${getTextColor};

  ::placeholder {
    color: ${Colors.GS600};
  }

  &:disabled {
    color: ${getTextColor};
    cursor: not-allowed;
  }

  // https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/
  &:-webkit-autofill,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:hover {
    -webkit-text-fill-color: ${getTextColor};
    -webkit-background-clip: text;
    caret-color: ${getTextColor};
  }

  ${({ $centered }) =>
    $centered &&
    css`
      text-align: center;
    `}

  ${({ $inputSize, $hasLabel }) =>
    $inputSize === 'large' &&
    css`
      line-height: 54px;

      &:-webkit-autofill {
        & ~ ${Label} {
          font-size: 12px;
          line-height: 34px;
        }
      }

      ${$hasLabel &&
      css`
        padding-top: 16px;
        line-height: 38px;
      `}
    `}

  ${({ $inputSize, $hasLabel }) =>
    $inputSize === 'medium' &&
    css`
      line-height: 46px;

      &:-webkit-autofill {
        & ~ ${Label} {
          font-size: 10px;
          line-height: 30px;
        }
      }

      ${$hasLabel &&
      css`
        padding-top: 14px;
        line-height: 32px;
      `}
    `}

  ${({ $inputSize, $hasLabel }) =>
    $inputSize === 'small' &&
    css`
      line-height: 38px;

      &:-webkit-autofill {
        & ~ ${Label} {
          font-size: 12px;
          line-height: 34px;
        }
      }

      ${$hasLabel &&
      css`
        line-height: 38px;
      `}
    `}

  ${({ type, $hasSpinner }) =>
    type === 'number' &&
    css`
      ${$hasSpinner &&
      css`
        padding-right: 42px;
      `}
      &[type='number'] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
      }

      &[type='number']::-webkit-inner-spin-button,
      &[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
    `}

  ${({ $readOnly }) =>
    $readOnly &&
    css`
      caret-color: transparent;
    `}

  ${({ $strikethrough }) =>
    $strikethrough &&
    css`
      &:not(:focus) {
        text-decoration: line-through;
      }
    `}
`

export const SpinnerContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 2px;
`

export const SpinnerItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${getTextColor};
  background-color: ${Colors.GS200};
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`

export const Prepend = styled.div<PrependProps>`
  color: ${getTextColor};
  font-size: 16px;
  position: absolute;
  left: 16px;
  top: 1px;
  bottom: 1px;
  user-select: none;
  visibility: hidden;

  /* NOTE: Trim left side of prepend when its width is bigger than 50% of input */
  direction: rtl;
  max-width: 50%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${({ $size, $hasLabel }) =>
    $size === 'large' &&
    css`
      line-height: 54px;

      ${$hasLabel &&
      css`
        padding-top: 16px;
        line-height: 38px;
      `}
    `}

  ${({ $size, $hasLabel }) =>
    $size === 'medium' &&
    css`
      line-height: 46px;

      ${$hasLabel &&
      css`
        padding-top: 14px;
        line-height: 32px;
      `}
    `}

  ${({ $size }) =>
    $size === 'small' &&
    css`
      line-height: 38px;
    `}

  ${({ $visible }) =>
    $visible &&
    css`
      visibility: visible;
    `}
`

export const Append = styled(Prepend)<AppendProps>`
  right: 16px;
  left: auto;
  direction: ltr;

  ${({ $largeSpace }) =>
    $largeSpace &&
    css`
      right: 36px;
    `}
`

const getIconColor = ({ $hasValue }: IconContainerProps) => {
  if ($hasValue) {
    return Colors.GS1000
  }

  return Colors.GS1000
}

export const IconContainer = styled.div<IconContainerProps>`
  position: absolute;
  padding-left: 12px;
  color: ${getIconColor};

  ${({ $validElement }) =>
    $validElement &&
    css`
      padding: 4px;
      cursor: pointer;
      color: ${Colors.GS600};

      &:hover {
        color: ${Colors.GS1000};
      }
    `}
`

export const ActionIconContainer = styled.div<ActionIconContainerProps>`
  position: absolute;
  right: 0;
  margin-right: 8px;
  padding: 8px;
  color: ${({ $iconColor }) => $iconColor || Colors.GS600};

  ${({ $hoverable }) =>
    $hoverable &&
    css`
      cursor: pointer;

      &:hover {
        color: ${Colors.GS1000};
      }
    `}

  ${({ $size }) =>
    $size === 'small' &&
    css`
      margin-right: 4px;
    `}
`

export const Suggestion = styled.div<Pick<SuggestionProps, '$withoutMargin'>>`
  margin-top: ${({ $withoutMargin }) => ($withoutMargin ? 'none' : '8px')};

  color: ${Colors.GS600};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  a {
    text-decoration-line: underline;
    text-decoration-skip-ink: none;
    text-underline-offset: 2px;

    &:hover {
      color: ${Colors.B500};
    }
  }
`

export const Error = styled.div<Pick<SuggestionProps, '$withoutMargin'>>`
  display: inline-flex;
  padding: ${({ theme }) => (theme.mode === 'opacity' ? '4px 7px' : '0px')};
  margin-top: ${({ theme, $withoutMargin }) => {
    if ($withoutMargin) return '0px'
    if (theme.mode === 'opacity') return '4px'

    return '8px'
  }};

  font-size: 14px;
  line-height: 20px;
  color: ${Colors.R300};
  background: ${({ theme }) =>
    theme.mode === 'opacity' ? theme.automated?.styles?.inputError : 'transparent'};
`

export const Info = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  color: ${Colors.GS600};
`
