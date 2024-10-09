import './App.css'
import NavBar from './components/NavBar'
import PlanetsList from './pages/PlanetsList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlanetDetails from './pages/PlanetDetails';
import PlanetForm from './pages/PlanetForm';
import UpdateForm from './pages/UpdateForm';

function App() {

  return (
    <Router>
      <div className='h-screen w-screen max-h-screen overflow-y-auto bg-slate-100'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<PlanetsList />} />
          <Route path="/planet/:id" element={<PlanetDetails />} />
          <Route path="/create-planet" element={<PlanetForm />} />
          <Route path="/update-planet/:id" element={<UpdateForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
