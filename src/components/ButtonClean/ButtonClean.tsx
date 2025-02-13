import React from 'react'
import { Icon } from '../Icon'
import * as S from './ButtonClean.styled'
import type { ButtonCleanProps } from './types'

const getComponent = ({ href }: Pick<ButtonCleanProps, 'href'>) => {
  if (href) return 'a'

  return 'button'
}

export const ButtonClean = ({
  appearance = 'primary',
  ariaLabel,
  analyticsKey,
  href,
  target,
  label,
  title,
  icon,
  withUnderline = true,
  disabled = false,
  type = 'button',
  onClick,
}: ButtonCleanProps) => (
  <S.Container
    $appearance={appearance}
    as={getComponent({ href })}
    href={href || undefined}
    target={target || undefined}
    title={title}
    $withUnderline={withUnderline}
    disabled={disabled}
    onClick={onClick || undefined}
    type={type}
    aria-label={ariaLabel}
    data-testid="ButtonClean.Container"
    data-analytics={analyticsKey}
  >
    {icon && (
      <S.IconContainer data-testid="ButtonClean.Icon" aria-hidden="true">
        <Icon component={icon} height={12} />
      </S.IconContainer>
    )}
    {label}
  </S.Container>
)
