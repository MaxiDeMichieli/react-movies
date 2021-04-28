import { useParams } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import movieMock from '../mocks/movieMock';

const Edit = () => {
  const { id } = useParams();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="row d-flex justify-content-center">
      <h1 className="text-center m-5">Editar película</h1>
      <div className="col-12 col-lg-8 col-xl-7">
        {movieMock ? (
          <MovieForm movie={movieMock} submit={submit} />
        ) : null}
      </div>
    </div>
  );
};

export default Edit;
