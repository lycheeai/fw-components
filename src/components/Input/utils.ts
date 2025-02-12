export const triggerOnChange = (element: HTMLInputElement, value: string) => {
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value',
  )?.set

  if (nativeInputValueSetter) {
    nativeInputValueSetter.call(element, value)
  }
}

export const dispatchEvent = (element: HTMLInputElement, event = 'input') => {
  element.dispatchEvent(new Event(event, { bubbles: true }))
}
