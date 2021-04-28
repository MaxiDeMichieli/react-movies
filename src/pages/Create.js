import MovieForm from '../components/MovieForm';

const Create = () => {
  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="row d-flex justify-content-center">
      <h1 className="text-center m-5">Crear película</h1>
      <div className="col-12 col-lg-8 col-xl-7">
        <MovieForm submit={submit} />
      </div>
    </div>
  );
};

export default Create;
