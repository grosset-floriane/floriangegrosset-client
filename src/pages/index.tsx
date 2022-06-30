import { Routes, Route } from 'react-router-dom'

import HomePage from 'component-pages/HomePage'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default Pages
