import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="*" element={<Home />} />
//         {/* Any additional routes you want to add in the future */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
