import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Error } from './pages/Error'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
