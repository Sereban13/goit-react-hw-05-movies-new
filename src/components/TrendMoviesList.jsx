import { Link } from 'react-router-dom';
import { routes } from 'routes';

const TrendMoviesList = ({ movies }) => {
  // const location = useLocation();
  // console.log(movies);
  return (
    <div>
      {movies.map(({ id, title }) => (
        <div key={id}>
          <Link to={routes.MOVIE_ID}>
            <h3>{title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TrendMoviesList;
