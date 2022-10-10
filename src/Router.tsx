import { Route, Routes } from 'react-router-dom'
import { Blog } from './Pages/Blog'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
    </Routes>
  )
}
