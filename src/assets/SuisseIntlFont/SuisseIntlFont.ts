import { createGlobalStyle } from 'styled-components'

import SuisseIntlBlackOtf from './assets/SuisseIntl-Black.otf'
import SuisseIntlBlackWoff from './assets/SuisseIntl-Black.woff'
import SuisseIntlBlackWoff2 from './assets/SuisseIntl-Black.woff2'
import SuisseIntlBoldOtf from './assets/SuisseIntl-Bold.otf'
import SuisseIntlBoldWoff from './assets/SuisseIntl-Bold.woff'
import SuisseIntlBoldWoff2 from './assets/SuisseIntl-Bold.woff2'
import SuisseIntlLightOtf from './assets/SuisseIntl-Light.otf'
import SuisseIntlLightWoff from './assets/SuisseIntl-Light.woff'
import SuisseIntlLightWoff2 from './assets/SuisseIntl-Light.woff2'
import SuisseIntlMediumOtf from './assets/SuisseIntl-Medium.otf'
import SuisseIntlMediumWoff from './assets/SuisseIntl-Medium.woff'
import SuisseIntlMediumWoff2 from './assets/SuisseIntl-Medium.woff2'
import SuisseIntlRegularOtf from './assets/SuisseIntl-Regular.otf'
import SuisseIntlRegularWoff from './assets/SuisseIntl-Regular.woff'
import SuisseIntlRegularWoff2 from './assets/SuisseIntl-Regular.woff2'
import SuisseIntlSemiBoldOtf from './assets/SuisseIntl-SemiBold.otf'
import SuisseIntlSemiBoldWoff from './assets/SuisseIntl-SemiBold.woff'
import SuisseIntlSemiBoldWoff2 from './assets/SuisseIntl-SemiBold.woff2'
import SuisseIntlThinOtf from './assets/SuisseIntl-Thin.otf'
import SuisseIntlThinWoff from './assets/SuisseIntl-Thin.woff'
import SuisseIntlThinWoff2 from './assets/SuisseIntl-Thin.woff2'
import SuisseIntlUltraLightOtf from './assets/SuisseIntl-UltraLight.otf'
import SuisseIntlUltraLightWoff from './assets/SuisseIntl-UltraLight.woff'
import SuisseIntlUltraLightWoff2 from './assets/SuisseIntl-UltraLight.woff2'
import SuisseIntlCondBoldItalicWoff from './assets/SuisseIntlCond-BoldItalic.woff'
import SuisseIntlCondBoldItalicWoff2 from './assets/SuisseIntlCond-BoldItalic.woff2'

export const SuisseIntlFont = createGlobalStyle`
  @font-face {
    font-family: "Suisse Int'l";
    font-weight: 100;
    src: url(${SuisseIntlUltraLightWoff2}) format('woff2'),
      url(${SuisseIntlUltraLightWoff}) format('woff'),
      url(${SuisseIntlUltraLightOtf}) format('opentype');

    font-display: block;
  }

  @font-face {
    font-family: "Suisse Int'l";
    font-weight: 200;
    src: url(${SuisseIntlThinWoff2}) format('woff2'),
      url(${SuisseIntlThinWoff}) format('woff'),
      url(${SuisseIntlThinOtf}) format('opentype');

    font-display: block;
  }

  @font-face {
    font-family: "Suisse Int'l";
    font-weight: 300;
    src: url(${SuisseIntlLightWoff2}) format('woff2'),
      url(${SuisseIntlLightWoff}) format('woff'),
      url(${SuisseIntlLightOtf}) format('opentype');

    font-display: block;
  }

  @font-face {
    font-family: "Suisse Int'l";
    font-weight: 400;
    src: url(${SuisseIntlRegularWoff2}) format('woff2'),
      url(${SuisseIntlRegularWoff}) format('woff'),
      url(${SuisseIntlRegularOtf}) format('opentype');

    font-display: block;
  }

  @font-face {
    font-family: "Suisse Int'l";
    font-weight: 500;
    src: url(${SuisseIntlMediumWoff2}) format('woff2'),
      url(${SuisseIntlMediumWoff}) format('woff'),
      url(${SuisseIntlMediumOtf}) format('opentype');

    font-display: block;
  }

  @font-face {
    font-family: "Suisse Int'l";
    font-weight: 600;
    src: url(${SuisseIntlSemiBoldWoff2}) format('woff2'),
      url(${SuisseIntlSemiBoldWoff}) format('woff'),
      url(${SuisseIntlSemiBoldOtf}) format('opentype');

    font-display: block;
  }

  @font-face {
    font-family: "Suisse Int'l";
    font-weight: 700;
    src: url(${SuisseIntlBoldWoff2}) format('woff2'),
      url(${SuisseIntlBoldWoff}) format('woff'),
      url(${SuisseIntlBoldOtf}) format('opentype');

    font-display: block;
  }

  @font-face {
    font-family: "Suisse Int'l";
    font-weight: 900;
    src: url(${SuisseIntlBlackWoff2}) format('woff2'),
      url(${SuisseIntlBlackWoff}) format('woff'),
      url(${SuisseIntlBlackOtf}) format('opentype');

    font-display: block;
  }

  @font-face {
    font-family: "Suisse Int'l Cond";
    font-weight: 700;
    font-style: italic;
    src: url(${SuisseIntlCondBoldItalicWoff2}) format('woff2'),
      url(${SuisseIntlCondBoldItalicWoff}) format('woff');

    font-display: block;
  }
`
