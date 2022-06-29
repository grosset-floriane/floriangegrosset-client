import { useTypedSelector } from 'redux/typedSelector'
import Navigation from './components/Navigation'

import TopAppBar from './components/TopAppBar'
import { Box } from '@mui/material'
import Pages from './pages'

function App() {
  const isOpen = useTypedSelector((state) => state.menu.isOpen)

  return (
    <>
      <TopAppBar />

      {isOpen && <Navigation />}
      <Box component="main" sx={{ padding: 2, mt: 9 }}>
        <Pages />
      </Box>
    </>
  )
}

export default App
