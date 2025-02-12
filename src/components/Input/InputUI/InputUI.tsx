import type { ButtonHTMLAttributes } from 'react'
import React, { forwardRef } from 'react'
import { Icon } from '../../Icon'
import * as S from './styled'
import type { ErrorProps, SpinnerItemProps } from './types'

const Root = S.Root

const Container = S.Container

const Box = S.Box

const Input = S.Input

const SpinnerContainer = S.SpinnerContainer

const SpinnerItem = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & SpinnerItemProps
>(({ icon, iconSize, ...props }, ref) => {
  return (
    <S.SpinnerItem ref={ref} type="button" {...props}>
      <Icon component={icon} height={iconSize} />
    </S.SpinnerItem>
  )
})

const Prepend = S.Prepend

const Append = S.Append

const IconContainer = S.IconContainer

const ActionIconContainer = S.ActionIconContainer

const Label = S.Label

const Suggestion = S.Suggestion

const Info = S.Info

const Error = forwardRef<HTMLDivElement, ErrorProps>(
  ({ errorTimestampKey, $withoutMargin, children, ...props }, ref) => {
    return (
      <S.Error
        ref={ref}
        aria-live="polite"
        aria-atomic="true"
        role="alert"
        $withoutMargin={$withoutMargin}
        key={errorTimestampKey}
        {...props}
      >
        {children}
      </S.Error>
    )
  },
)

export {
  ActionIconContainer,
  Append,
  Box,
  Container,
  Error,
  IconContainer,
  Info,
  Input,
  Label,
  Prepend,
  Root,
  SpinnerContainer,
  SpinnerItem,
  Suggestion,
}
