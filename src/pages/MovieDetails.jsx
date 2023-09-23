// import { fetchMovieByID } from 'api';
import { fetchMovieById } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const params = useParams();
  const { id } = params;
  const [, setFindedMovie] = useState();
  console.dir(useParams);

  useEffect(() => {
    const findMovieById = async () => {
      try {
        const fetchedMovie = await fetchMovieById(id);
        setFindedMovie(fetchedMovie);
      } catch (error) {
        console.log(error);
      }
    };
    findMovieById();
  }, [id]);
  return (
    <main>
      <div>
        Movie Details
        {/* <img src={findedMovie.backdrop_path} alt={findedMovie.title} />
        <h2>{findedMovie.title}</h2>
        <p>{findedMovie.overview}</p> */}
      </div>
      {/* <ul>
        <li>
          <Link to={routes.CAST}>Cast</Link>
        </li>
        <li>
          <Link to={routes.REVIEWS}>Reviews</Link>
        </li>
      </ul> */}
      {/* <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense> */}
    </main>
  );
};

export default MovieDetails;
