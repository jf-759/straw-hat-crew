import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CrewSummary from "./pages/CrewSummary"
import CreateCrewmate from "./pages/CreateCrewmate"
import UpdateCrewmate from "./pages/UpdateCrewmate"
import CrewDetail from "./pages/CrewDetail"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CrewSummary />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/update/:id" element={<UpdateCrewmate />} />
        <Route path="/crew/:id" element={<CrewDetail />} />
      </Routes>
    </Router>
  )
}

export default App