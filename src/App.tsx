import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useApiKey } from './context/ApiKeyContext';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  const { apiKey } = useApiKey();


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={apiKey ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}


export default App;
