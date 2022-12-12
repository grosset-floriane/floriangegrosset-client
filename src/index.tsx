import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { StyledEngineProvider } from '@mui/material'
import lightTheme from './themes/lightTheme'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

// Set up Apollo Client
const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
})

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Provider store={store}>
				<BrowserRouter>
					<StyledEngineProvider injectFirst>
						<ThemeProvider theme={lightTheme}>
							<CssBaseline />
							<App />
						</ThemeProvider>
					</StyledEngineProvider>
				</BrowserRouter>
			</Provider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)
