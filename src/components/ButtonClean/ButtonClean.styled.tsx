import styled, { css } from 'styled-components'
import { Colors } from '../../colors'
import type { ButtonCleanProps } from './types'

type ContainerProps = Pick<ButtonCleanProps, 'disabled'> & {
  $appearance: ButtonCleanProps['appearance']
  $withUnderline: boolean
}

const getColor = ({ $appearance }: ContainerProps) => {
  if ($appearance === 'primary') {
    return Colors.GS1000
  }

  if ($appearance === 'destructive') {
    return Colors.R300
  }

  return Colors.GS600
}

export const IconContainer = styled.div`
  position: relative;
  top: -1px;
  display: flex;
  align-self: center;
  padding-right: 8px;
`

const getHoverColor = ({ disabled, $appearance }: ContainerProps) => {
  if (!disabled) {
    if ($appearance === 'primary') {
      return Colors.B500
    }

    if ($appearance === 'destructive') {
      return Colors.R500
    }

    return Colors.GS1000
  }
}

export const Container = styled.button<ContainerProps>`
  display: inline-flex;

  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: 150%;
  color: ${getColor};

  appearance: none !important; // NOTE: Required for Safari.

  &:hover,
  &:active,
  &:focus {
    color: ${getHoverColor};
  }

  &:hover {
    ${IconContainer} {
      svg > path {
        stroke: ${getHoverColor};
      }
    }
  }

  ${({ $withUnderline }) =>
    $withUnderline &&
    css`
      text-decoration-line: underline;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`
