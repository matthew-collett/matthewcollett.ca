import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from '@views/NotFound'
import Root from '@views/Root'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
