import { Routes, Route } from 'react-router-dom'

import ProjectPage from 'features/singleProjectData/SingleProject'
import HomePage from 'component-pages/HomePage'

function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/projects/:projectSlug" element={<ProjectPage />} />
    </Routes>
  )
}

export default Pages
