export const UA_IOS_FOOTPRINT = 'iOSFourthwall'
export const UA_ANDROID_FOOTPRINT = 'AndroidFourthwall'

const isIosUserAgent = (userAgent: string): boolean => {
  return userAgent.includes(UA_IOS_FOOTPRINT)
}

const isAndroidUserAgent = (userAgent: string): boolean => {
  return userAgent.includes(UA_ANDROID_FOOTPRINT)
}

export const isWebViewUserAgent = (userAgent: string): boolean => {
  return isIosUserAgent(userAgent) || isAndroidUserAgent(userAgent)
}

export const isWebView = () => isWebViewUserAgent(window.navigator.userAgent)
