import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import moviesService from '../API/services/movies';
import createFormData from '../utils/createFormData';

const Edit = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await moviesService.getOne(id);
        console.log(response.data);
        setMovie(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);

  const submit = async (data) => {
    try {
      setLoading(true);
      await moviesService.update(id, data);
      history.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row d-flex justify-content-center">
      <h1 className="text-center m-5">Editar película</h1>
      <div className="col-12 col-lg-8 col-xl-7">
        {movie ? <MovieForm movie={movie} submit={submit} loading={loading} /> : null}
      </div>
    </div>
  );
};

export default Edit;
