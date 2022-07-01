import { Routes, Route } from 'react-router-dom'

import About from 'component-pages/About'
import Contact from 'component-pages/Contact'
import CV from 'component-pages/CV'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  )
}

export default Pages
