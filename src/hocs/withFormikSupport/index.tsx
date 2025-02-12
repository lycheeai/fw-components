import type { FieldInputProps, FormikHandlers, FormikProps } from 'formik'
import get from 'lodash-es/get'
import isNil from 'lodash-es/isNil'
import type { ComponentType, FC, FocusEvent, ReactNode } from 'react'
import React from 'react'

// NOTE: This interface has to be exported in order to create correct declaration files.
// https://github.com/microsoft/TypeScript/issues/5711
export interface Props {
  invalid?: boolean
  error?: ReactNode
}

// NOTE: This interface has to be exported in order to create correct declaration files.
// https://github.com/microsoft/TypeScript/issues/5711
export interface InjectedProps {
  field?: FieldInputProps<any>
  form?: FormikProps<any>
  onChange?: FormikHandlers['handleChange'] | Function
  onBlur?: FormikHandlers['handleBlur'] | Function
}

export const withFormikSupport = <P extends {}>(
  Component: ComponentType<P>,
): FC<P & Props & InjectedProps> =>
  function ({ invalid = false, error, field, form, onChange, onBlur, ...other }) {
    const formikTouched = field && form && get(form.touched, field.name)
    const formikError = field && form && get(form.errors, field.name)

    const getValue = (eventOrValue: any) => {
      if (eventOrValue?.target?.type === 'checkbox') {
        return !isNil(eventOrValue?.target?.checked) ? eventOrValue?.target?.checked : eventOrValue
      }

      return !isNil(eventOrValue?.target?.value) ? eventOrValue?.target?.value : eventOrValue
    }

    const handleChange = (newValue: any) => {
      if (form && field) {
        form.setFieldValue(field.name, getValue(newValue))
      }

      if (onChange) {
        return onChange(newValue)
      }

      return null
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(e)
      }

      if (form && field) {
        form.setFieldTouched(field.name, true)
      }
    }

    return (
      <Component
        {...(other as P)}
        {...field}
        invalid={invalid || error || ((formikTouched || form?.submitCount) && !!formikError)}
        error={error || ((formikTouched || form?.submitCount) && formikError)}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    )
  }
