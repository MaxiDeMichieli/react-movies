import Card from '../components/Card';
import moviesMock from '../mocks/moviesMock';

const Home = () => {
  return (
    <div className="container">
      <h2 className="text-center my-5">Nuestras películas</h2>
      <section className="row">
        {moviesMock.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </section>
    </div>
  );
};

export default Home;
