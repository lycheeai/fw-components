import React from 'react'
import { Icon } from '../Icon'
import type { ButtonCleanProps } from './types'
import styles from './ButtonClean.module.css'

export const ButtonClean = ({
  appearance = 'primary',
  href,
  label,
  title,
  target,
  icon,
  disabled = false,
  type = 'button',
  onClick,
}: ButtonCleanProps) => {

  const className = `${styles.button} ${styles[appearance]} ${styles[disabled ? 'disabled' : '']}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        title={title}
        className={className}
      >
        {icon && (
          <div className={styles.iconContainer} data-testid="ButtonClean.Icon" aria-hidden="true">
            <Icon component={icon} height={12} />
          </div>
        )}
        {label}
      </a>
    )
  } else {
    return (
      <button
        disabled={disabled}
        onClick={onClick || undefined}
        type={type}
        className={className}
      >
        {icon && (
          <div className={styles.iconContainer} data-testid="ButtonClean.Icon" aria-hidden="true">
            <Icon component={icon} height={12} />
          </div>
        )}
        {label}
      </button>
    )
  }
}
