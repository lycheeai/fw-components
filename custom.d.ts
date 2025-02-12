declare module '*.svg' {
  const content: string
  export const ReactComponent: (props: SVGAttributes<SVGElement>) => JSX.Element
  export default content
}

declare module '*.otf'
declare module '*.woff'
declare module '*.woff2'
