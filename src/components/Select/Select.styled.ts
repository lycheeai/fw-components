import styled, { css } from 'styled-components'
import { Colors } from '../../colors'

export const Container = styled.div<{ $fullWidth: boolean }>`
  position: relative;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`

export const Input = styled.select``

interface SelectProps {
  disabled?: boolean
  $inputSize: 'small' | 'medium' | 'large'
}

const getSelectHeight = ({ $inputSize }: SelectProps) => {
  if ($inputSize === 'large') {
    return '56px'
  }
  if ($inputSize === 'medium') {
    return '48px'
  }
  if ($inputSize === 'small') {
    return '40px'
  }
}

export const Select = styled.select<SelectProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${getSelectHeight};
  opacity: 0;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`

export const ActionIconsContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const ArrowIconContainer = styled.div`
  color: ${Colors.GS600};
`

export const ClearIcon = styled.button`
  position: relative;
  z-index: 1;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.GS1000};
  color: ${Colors.GS0};
`
