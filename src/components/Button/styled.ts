import styled, { css } from 'styled-components'

import { Colors } from '../../colors'
import type { ButtonProps } from './types'

type ContainerProps = Omit<ButtonProps, 'loading' | 'fullWidth' | 'multiline' | 'appearance'> & {
  $appearance: 'primary' | 'secondary' | 'destructive' | 'destructive-inverted'
  $loading: boolean
  $fullwidth: boolean
  $multiline: boolean
}

const getContainerWidth = ({ $fullwidth }: ContainerProps) => {
  if ($fullwidth) {
    return '100%'
  }
}

const getContainerHeight = ({ size }: ContainerProps) => {
  if (size === 'small') {
    return 40
  }
  if (size === 'medium') {
    return 48
  }
  if (size === 'large') {
    return 56
  }
}

const getContainerHorizontalPadding = ({ size }: ContainerProps) => {
  if (size === 'small') {
    return 16
  }
  if (size === 'medium') {
    return 20
  }
  if (size === 'large') {
    return 24
  }
}

const getContainerBackground = ({ $appearance }: ContainerProps) => {
  if ($appearance === 'primary') {
    return Colors.B500
  }
  if ($appearance === 'secondary') {
    return Colors.GS300
  }
  if ($appearance === 'destructive') {
    return Colors.R300
  }
  if ($appearance === 'destructive-inverted') {
    return Colors.GS0
  }
}

const getContainerColor = ({ $appearance }: ContainerProps) => {
  if ($appearance === 'primary') {
    return Colors.GS0
  }
  if ($appearance === 'secondary') {
    return Colors.GS1000
  }
  if ($appearance === 'destructive') {
    return Colors.GS0
  }
  if ($appearance === 'destructive-inverted') {
    return Colors.R300
  }
}

const getContainerHoverBackground = ({ $appearance }: ContainerProps) => {
  if ($appearance === 'primary') {
    return Colors.B600
  }
  if ($appearance === 'secondary') {
    return Colors.GS400
  }
  if ($appearance === 'destructive') {
    return Colors.R500
  }
  if ($appearance === 'destructive-inverted') {
    return Colors.GS400
  }
}

const getContainerActiveBackground = ({ $appearance }: ContainerProps) => {
  if ($appearance === 'primary') {
    return Colors.B700
  }
  if ($appearance === 'secondary') {
    return Colors.GS1000
  }
  if ($appearance === 'destructive') {
    return Colors.R500
  }
  if ($appearance === 'destructive-inverted') {
    return Colors.GS400
  }
}

const getContainerActiveColor = ({ $appearance }: ContainerProps) => {
  if ($appearance === 'secondary') {
    return Colors.GS0
  }
}

const getContainerFocusBackground = ({ $appearance }: ContainerProps) => {
  if ($appearance === 'primary') {
    return Colors.B500
  }

  if ($appearance === 'secondary') {
    return Colors.GS300
  }

  if ($appearance === 'destructive') {
    return Colors.R300
  }

  if ($appearance === 'destructive-inverted') {
    return Colors.GS0
  }
}

const getContainerFocusColor = ({ $appearance }: ContainerProps) => {
  if ($appearance === 'secondary') {
    return Colors.GS1000
  }
}

const getContainerDisabledBackground = (props: ContainerProps) => {
  return `color-mix(in oklab, ${getContainerBackground(props)} 40%, transparent)`
}

const getContainerDisabledColor = ({ $appearance }: ContainerProps) => {
  if ($appearance === 'secondary') {
    return `color-mix(in oklab, ${Colors.GS1000} 40%, transparent)`
  }

  return Colors.GS100
}

export const Container = styled.button<ContainerProps>((props) => {
  const { $loading, $multiline } = props

  return css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${getContainerWidth(props)};
    height: ${getContainerHeight(props)}px;
    padding-left: ${getContainerHorizontalPadding(props)}px;
    padding-right: ${getContainerHorizontalPadding(props)}px;
    background: ${getContainerBackground(props)};
    outline: none;
    position: relative;

    white-space: nowrap;

    font-weight: 600;

    font-size: 16px;
    font-family: inherit;
    line-height: 24px;
    color: ${getContainerColor(props)};

    appearance: none !important; // NOTE: Required for Safari.

    ${$multiline &&
    css`
      height: auto;
      min-height: ${getContainerHeight(props)}px;

      white-space: normal;
      word-break: break-all;
    `}
    ${!$loading &&
    css`
      &:hover {
        background: ${getContainerHoverBackground(props)};

        color: ${getContainerColor(props)};
      }

      &:active {
        background: ${getContainerActiveBackground(props)};

        color: ${getContainerActiveColor(props)};
      }

      &:focus {
        background: ${getContainerFocusBackground(props)};

        color: ${getContainerFocusColor(props)};

        &:after {
          content: '';
          position: absolute;
          padding: 2px;
          border: 1px solid ${getContainerFocusBackground(props)};
          width: 100%;
          height: 100%;
        }
      }
    `}
    &:disabled {
      cursor: not-allowed;

      ${!$loading &&
      css`
        background: ${getContainerDisabledBackground(props)};
        color: ${getContainerDisabledColor(props)};
      `}
    }
  `
})

export const IconContainer = styled.div<{ color?: string }>`
  display: flex;
  align-self: center;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

  + span {
    padding-left: 10px;
  }
`

export const Label = styled.span<{ $loading: boolean }>`
  display: flex;

  > span + ${IconContainer} {
    padding-left: 10px;
  }

  ${({ $loading }) =>
    $loading &&
    css`
      visibility: hidden;
    `}
`

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
