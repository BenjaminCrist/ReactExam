import SearchBar from './SearchBar';
import ListMovies from './ListMovies';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  
  const handleSearchResults = (results: any) => {
    navigate('/search', { state: { results } });
};
  

  return (
    <div>
      <SearchBar onSearch={handleSearchResults} />
      <ListMovies />
    </div>
  );
}

export default HomePage;