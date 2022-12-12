import { useTypedSelector } from 'redux/typedSelector'
import Navigation from './components/Navigation'

import TopAppBar from './components/TopAppBar'
import Pages from './pages'

function App() {
	const isOpen = useTypedSelector(state => state.menu.isOpen)

	return (
		<>
			<TopAppBar />
			{isOpen && <Navigation />}
			<Pages />
		</>
	)
}

export default App
