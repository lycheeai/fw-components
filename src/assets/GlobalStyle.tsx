import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { isWebView } from '../utils/webview'

import { Colors } from '../colors'

export const GlobalCSSVariables = `
  :root {
    color-scheme: light;

    --color-gs0: #FFFFFF;
    --color-gs100: #FDFCFB;
    --color-gs200: #F5F4F3;
    --color-gs300: #EAEAE9;
    --color-gs400: #E3E2E1;
    --color-gs500: #CDCCCA;
    --color-gs550: #8E8E89;
    --color-gs600: #6F6F69;
    --color-gs700: #40413D;
    --color-gs800: #272825;
    --color-gs900: #1B1D19;
    --color-gs1000: #10110D;

    --color-b100: #F2F5FE;
    --color-b200: #CED9FC;
    --color-b300: #9DB4F9;
    --color-b400: #6C90F7;
    --color-b500: #0042FF;
    --color-b600: #0338BE;
    --color-b700: #002481;

    --color-g100: #B4EDE5;
    --color-g200: #9AE2D8;
    --color-g300: #44B59E;
    --color-g400: #146F5D;
    --color-g500: #1A4B41;

    --color-y100: #FAE5A7;
    --color-y200: #EBCE78;
    --color-y300: #DFA931;
    --color-y400: #98721E;
    --color-y500: #5F4813;

    --color-r100: #F8D3DB;
    --color-r200: #EBB1BC;
    --color-r300: #C52F40;
    --color-r400: #9C2D3A;
    --color-r500: #701620;

    /* checking color-scheme is not enough in Safari, so we need to check color */
    @supports (color: light-dark(#fff, #000)) {
      --color-gs0: light-dark(#FFFFFF, #10110D);
      --color-gs100: light-dark(#FDFCFB, #1B1D19);
      --color-gs200: light-dark(#F5F4F3, #272825);
      --color-gs300: light-dark(#EAEAE9, #40413D);
      --color-gs400: light-dark(#E3E2E1, #6F6F69);
      --color-gs500: light-dark(#CDCCCA, #8E8E89);
      --color-gs550: light-dark(#8E8E89, #CDCCCA);
      --color-gs600: light-dark(#6F6F69, #E3E2E1);
      --color-gs700: light-dark(#40413D, #EAEAE9);
      --color-gs800: light-dark(#272825, #F5F4F3);
      --color-gs900: light-dark(#1B1D19, #FDFCFB);
      --color-gs1000: light-dark(#10110D, #FFFFFF);

      --color-b100: light-dark(#F2F5FE, #002481);
      --color-b200: light-dark(#CED9FC, #0338BE);
      --color-b300: light-dark(#9DB4F9, #0042FF);
      --color-b400: light-dark(#6C90F7, #6C90F7);
      --color-b500: light-dark(#0042FF, #9DB4F9);
      --color-b600: light-dark(#0338BE, #CED9FC);
      --color-b700: light-dark(#002481, #F2F5FE);

      --color-g100: light-dark(#B4EDE5, #1A4B41);
      --color-g200: light-dark(#9AE2D8, #146F5D);
      --color-g300: light-dark(#44B59E, #44B59E);
      --color-g400: light-dark(#146F5D, #9AE2D8);
      --color-g500: light-dark(#1A4B41, #B4EDE5);

      --color-y100: light-dark(#FAE5A7, #5F4813);
      --color-y200: light-dark(#EBCE78, #98721E);
      --color-y300: light-dark(#DFA931, #DFA931);
      --color-y400: light-dark(#98721E, #EBCE78);
      --color-y500: light-dark(#5F4813, #FAE5A7);

      --color-r100: light-dark(#F8D3DB, #701620);
      --color-r200: light-dark(#EBB1BC, #9C2D3A);
      --color-r300: light-dark(#C52F40, #C52F40);
      --color-r400: light-dark(#9C2D3A, #EBB1BC);
      --color-r500: light-dark(#701620, #F8D3DB);
    }
  }
`

export const BaseGlobalStyle = createGlobalStyle`
  ${GlobalCSSVariables}

  * {
    margin: 0;
    box-sizing: border-box;
    border: none;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background: ${Colors.GS0};

    font-family: "Suisse Int'l", Helvetica, Arial, sans-serif;
    color: ${Colors.GS1000};
  }

  button {
    padding: 0;
    background: none;
    border: none;

    color: inherit;

    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;

    font-weight: 400;
  }

  img,
  svg {
    display: block;

    user-drag: none;
  }

  fieldset {
    border: none;
    padding: 0;
  }

  input {
    border-radius: 0;
    font: inherit;
  }

  input[type='email'],
  input[type='text'] {
    -webkit-appearance: none;
  }

  textarea {
    font: inherit;
  }

  label {
    cursor: inherit;
  }

  ul,
  ol {
    padding: 0;

    list-style: none;
  }

  ::-moz-selection {
    background: ${Colors.B500};

    color: ${Colors.GS100};
  }

  ::selection {
    background: ${Colors.B500};

    color: ${Colors.GS100};
  }
`

export const WebViewGlobalStyle = createGlobalStyle`
  body {
    user-select: none;
    -webkit-user-select: none; // iOS Safari
    overscroll-behavior: none;
  }
`

export const GlobalStyle = () => (
  <>
    <BaseGlobalStyle />
    {isWebView() && <WebViewGlobalStyle />}
  </>
)
