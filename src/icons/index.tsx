/// <reference types="vite-plugin-svgr/client" />
import React, { SVGAttributes } from 'react'
import ArrowShortDown from './assets/ArrowShortDownIcon.svg?react'
import ArrowShortUp from './assets/ArrowShortUpIcon.svg?react'
import Close from './assets/CloseIcon.svg?react'

const ArrowShortDownIcon = (props: SVGAttributes<SVGElement>) => (
  <ArrowShortDown {...props} />
)
const ArrowShortUpIcon = (props: SVGAttributes<SVGElement>) => (
  <ArrowShortUp {...props} />
)

const CloseIcon = (props: SVGAttributes<SVGElement>) => (
  <Close {...props} />
)

export { 
  ArrowShortDownIcon, 
  ArrowShortUpIcon,
  CloseIcon
}
