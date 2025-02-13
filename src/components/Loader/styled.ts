import styled, { keyframes } from 'styled-components'
import { Colors } from '../../colors'
import type { LoaderProps } from './types'

const getSize = (size: NonNullable<LoaderProps['size']>) =>
  ({ small: 15, medium: 18, large: 32 })[size]

const getColor = ({ appearance }: LoaderProps) => {
  if (appearance === 'primary') {
    return Colors.GS0
  }
  if (appearance === 'secondary') {
    return Colors.GS1000
  }
}

const wrapperAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`

const circleAnimation = keyframes`
  0%,
  25% {
    stroke-dashoffset: 270;
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 270;
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.svg<{ size: NonNullable<LoaderProps['size']> }>`
  width: ${({ size }) => getSize(size)}px;
  animation: 2s linear infinite ${wrapperAnimation};
  animation-delay: -1.5s;
`

export const Circle = styled.circle<LoaderProps>`
  animation: 1.4s ease-in-out infinite both ${circleAnimation};
  animation-delay: -1.05s;
  display: block;
  fill: transparent;
  stroke: ${getColor};
  stroke-dasharray: 283;
  stroke-dashoffset: 75;
  stroke-width: 10px;
  transform-origin: 50% 50%;
`
