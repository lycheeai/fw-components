import React, { SVGAttributes } from 'react'
import { ReactComponent as ArrowShortDown } from './assets/ArrowShortDownIcon.svg'
import { ReactComponent as ArrowShortUp } from './assets/ArrowShortUpIcon.svg'

const ArrowShortDownIcon = (props: SVGAttributes<SVGElement>) => (
  <ArrowShortDown {...props} />
)
const ArrowShortUpIcon = (props: SVGAttributes<SVGElement>) => (
  <ArrowShortUp {...props} />
)

export { 
  ArrowShortDownIcon, 
  ArrowShortUpIcon
}
