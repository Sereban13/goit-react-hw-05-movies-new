import { getTrendtMovies } from 'api';
import TrendMoviesList from 'components/TrendMoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [bestMovies, setBestMovies] = useState([]);

  useEffect(() => {
    async function fetchBestMovies() {
      try {
        const response = await getTrendtMovies();
        setBestMovies([...response]);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBestMovies();
  });
  return (
    <div>
      <TrendMoviesList movies={bestMovies} />
    </div>
  );
};

export default Home;
