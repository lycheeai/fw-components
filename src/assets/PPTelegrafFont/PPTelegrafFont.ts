import { createGlobalStyle } from 'styled-components'

import PPTelegrafBoldOtf from './assets/PPTelegraf-Bold.otf'
import PPTelegrafBoldWoff from './assets/PPTelegraf-Bold.woff'
import PPTelegrafBoldWoff2 from './assets/PPTelegraf-Bold.woff2'
import PPTelegrafRegularOtf from './assets/PPTelegraf-Regular.otf'
import PPTelegrafRegularWoff from './assets/PPTelegraf-Regular.woff'
import PPTelegrafRegularWoff2 from './assets/PPTelegraf-Regular.woff2'
import PPTelegrafSemiBoldOtf from './assets/PPTelegraf-Semibold.otf'
import PPTelegrafSemiBoldWoff from './assets/PPTelegraf-Semibold.woff'
import PPTelegrafSemiBoldWoff2 from './assets/PPTelegraf-Semibold.woff2'

export const PPTelegrafFont = createGlobalStyle`
  @font-face {
    font-family: "PP Telegraf";
    font-weight: 400;
    src: url(${PPTelegrafRegularWoff2}) format('woff2'),
      url(${PPTelegrafRegularWoff}) format('woff'),
      url(${PPTelegrafRegularOtf}) format('opentype');

    font-display: block;
  }

  @font-face {
    font-family: "PP Telegraf";
    font-weight: 600;
    src: url(${PPTelegrafSemiBoldWoff2}) format('woff2'),
      url(${PPTelegrafSemiBoldWoff}) format('woff'),
      url(${PPTelegrafSemiBoldOtf}) format('opentype');

    font-display: block;
  }

  @font-face {
    font-family: "PP Telegraf";
    font-weight: 700;
    src: url(${PPTelegrafBoldWoff2}) format('woff2'),
      url(${PPTelegrafBoldWoff}) format('woff'),
      url(${PPTelegrafBoldOtf}) format('opentype');

    font-display: block;
  }
`
