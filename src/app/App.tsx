import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./routes/index"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
