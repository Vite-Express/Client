import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { AccountType, Home, Login } from '@/pages/main'
import { ScrollToTop } from '@/components/ui'
const App = () => {
  return (
    <>
    <Toaster />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AccountType />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App