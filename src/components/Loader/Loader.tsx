import React from 'react'

import type { LoaderProps } from './types'
import * as S from './styled'

export const Loader = ({ appearance = 'secondary', size = 'medium' }: LoaderProps) => (
  <S.Wrapper viewBox="0 0 100 100" size={size} aria-label="loader" data-testid="Loader">
    <S.Circle cx="50" cy="50" r="45" size={size} appearance={appearance} />
  </S.Wrapper>
)
