import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import de tes pages (on va les créer juste après)
import Home from './pages/home/page';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="main-content">
      <Router>

        {/* La Navbar est en dehors de Routes pour être visible partout */}
        <Navbar />


        <Routes>
          {/* Route pour l'accueil */}
          <Route path="/" element={<Home />} />



          {/* Route 404 - Si l'utilisateur se trompe d'URL */}
          <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;