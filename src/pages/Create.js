import { useState } from 'react';
import MovieForm from '../components/MovieForm';
import moviesService from '../API/services/movies';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const submit = async (data) => {
    try {
      setLoading(true);
      await moviesService.create(data);
      history.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row d-flex justify-content-center">
      <h1 className="text-center m-5">Crear película</h1>
      <div className="col-12 col-lg-8 col-xl-7">
        <MovieForm submit={submit} loading={loading} />
      </div>
    </div>
  );
};

export default Create;
