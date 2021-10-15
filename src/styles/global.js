import { createGlobalStyle, css } from 'styled-components'
import regular from '../assets/fonts/open-sans/open-sans-v20-latin-regular.woff'
import regular2 from '../assets/fonts/open-sans/open-sans-v20-latin-regular.woff2'
import italic from '../assets/fonts/open-sans/open-sans-v20-latin-italic.woff'
import italic2 from '../assets/fonts/open-sans/open-sans-v20-latin-italic.woff2'

export default createGlobalStyle`
@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    src:
    url(${regular}) format('woff'),
      url(${regular2}) format('woff2'),
      url(${italic}) format('woff2'),
      url(${italic2}) format('woff');

  }
${({ theme }) => css`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}
	html {
		font-size: ${theme.globals.fontSize};

		@media only screen and (max-width: 425px) {
			font-size: 20px;
		}
		body {
			font-family: 'Open Sans', sans-serif;
		}
	}
`}
`
