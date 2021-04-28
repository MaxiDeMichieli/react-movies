import './Footer.css';

const Footer = () => {
  const developers = [
    {
      name: 'Jonatan Céspedes',
      href: 'https://www.linkedin.com/in/jonatan-cespedes/',
    },
    {
      name: 'Máximo De Michieli',
      href: 'https://www.linkedin.com/in/maximodemichieli/',
    },
    { name: 'Eric Mena', href: 'https://www.linkedin.com/in/menaeric/' },
  ];

  return (
    <footer className="footer mt-5 p-3">
      <div className="py-1">
        <p className="text-center text-light m-0">
          <small className="d-block p-2">
            © 2021 Formar. Todos los derechos reservados.
          </small>
          <small className="d-block p-2">
            Desarrolladores:
            {developers.map((dev, i) => (
              <a
                className="text-light font-weight-bold mx-1"
                href={dev.href}
                target="_blank"
                rel="noreferrer"
                key={i}
              >
                {dev.name}
              </a>
            ))}
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
