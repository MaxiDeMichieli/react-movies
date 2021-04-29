import { useEffect, useState } from 'react';
import Card from '../components/Card';
import moviesService from '../API/services/movies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (refresh) {
      const fetchMovies = async () => {
        const { data } = await moviesService.getAll();
        setMovies(data.data);
      };
      fetchMovies();
      setRefresh(false);
    }
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      await moviesService.remove(id);
    } catch (error) {
      console.log(error);
    } finally {
      setRefresh(true);
    }
  }

  return (
    <div className="container">
      <h2 className="text-center my-5">Nuestras películas</h2>
      <section className="row">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} handleDeleteMovie={handleDelete} />
        ))}
      </section>
    </div>
  );
};

export default Home;
