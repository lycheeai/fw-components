import React from 'react'

import { Loader } from '../Loader'
import type { ButtonProps } from './types'
import styles from './Button.module.css'

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
  onClick,
}: ButtonProps) => {

  const buttonClassName = `${styles.button} ${styles[appearance]} ${styles[size]} ${styles[disabled ? 'disabled' : '']} ${styles[fullWidth ? 'full-width' : '']} ${styles[multiline ? 'multiline' : '']} ${className}`

  if (!disabled && href) {
    return <a
      href={href}
      target={target}
      download={download}
      className={buttonClassName}
      data-testid="button"
    >
      <span className={`${styles.label} ${loading ? styles.labelLoading : ''}`}>
        {leftIcon ? (
          <div className={styles.iconContainer} aria-hidden="true">
            {leftIcon}
          </div>
        ) : null}
        {label && <span>{label}</span>}
        {icon && (
          <div className={styles.iconContainer} aria-hidden="true">
            {icon}
          </div>
        )}
      </span>
      {loading && (
        <div className={styles.loaderContainer}>
          <Loader
            appearance={appearance === 'secondary' ? 'secondary' : 'primary'}
            size={size === 'small' ? 'medium' : 'large'}
          />
        </div>
      )}
    </a>
  } else {
    return <button
      ref={forwardedRef}
      id={id}
      role="button"
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      className={buttonClassName}
      data-testid="button"
    >
      <span className={`${styles.label} ${loading ? styles.labelLoading : ''}`}>
        {leftIcon && (
          <div className={styles.iconContainer} aria-hidden="true">
            {leftIcon}
          </div>
        )}
        {label && <span>{label}</span>}
        {icon && (
          <div className={styles.iconContainer} aria-hidden="true">
            {icon}
          </div>
        )}
      </span>
      {loading && (
        <div className={styles.loaderContainer}>
          <Loader
            appearance={appearance === 'secondary' ? 'secondary' : 'primary'}
            size={size === 'small' ? 'medium' : 'large'}
          />
        </div>
      )}      
    </button>
  }
}