import React from 'react'

import { Loader } from '../Loader'
import * as S from './styled'
import type { ButtonProps } from './types'

const getComponent = ({ href, disabled }: Pick<ButtonProps, 'href' | 'disabled'>) => {
  if (!disabled && href) {
    return 'a'
  }

  return 'button'
}

export const Button = ({
  forwardedRef,
  id,
  label,
  appearance = 'secondary',
  size = 'medium',
  icon,
  leftIcon,
  iconColor,
  href,
  target,
  download,
  disabled = false,
  loading = false,
  fullWidth = false,
  multiline = false,
  type = 'button',
  className,
  analytics,
  onClick,
}: ButtonProps) => (
  <S.Container
    ref={forwardedRef}
    id={id}
    as={getComponent({ href, disabled })}
    role="button"
    $appearance={appearance}
    size={size}
    href={!disabled ? href : undefined}
    target={target}
    download={download}
    disabled={disabled || loading}
    $loading={loading}
    $fullwidth={fullWidth} // React does not recognize the `fullWidth` prop on a DOM element.
    $multiline={multiline}
    type={type}
    onClick={onClick}
    className={className}
    data-analytics={analytics}
    data-testid="button"
  >
    <S.Label $loading={loading}>
      {leftIcon && (
        <S.IconContainer color={iconColor} aria-hidden="true">
          {leftIcon}
        </S.IconContainer>
      )}
      {label && <span>{label}</span>}
      {icon && (
        <S.IconContainer color={iconColor} aria-hidden="true">
          {icon}
        </S.IconContainer>
      )}
    </S.Label>
    {loading && (
      <S.LoaderContainer>
        <Loader
          appearance={appearance === 'secondary' ? 'secondary' : 'primary'}
          size={size === 'small' ? 'medium' : 'large'}
        />
      </S.LoaderContainer>
    )}
  </S.Container>
)
