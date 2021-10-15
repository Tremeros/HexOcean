import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { GlobalStyles, theme } from './styles'

import store from './store/configureStore'

import App from './App'

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>,
	document.getElementById('app')
)

module.hot.accept()
