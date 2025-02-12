import { createGlobalStyle } from 'styled-components'
import PTMonoRegular from './assets/PTMono-Regular.otf'

export const PTMonoFont = createGlobalStyle`
@font-face {
    font-family: "PT Mono";
    font-weight: 400;
    src: url(${PTMonoRegular}) format('opentype');
  }
`
