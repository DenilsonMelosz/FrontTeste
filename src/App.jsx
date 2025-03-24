import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RoutesApp from './Routes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesApp />} />
      </Routes>
    </BrowserRouter>
  )
}