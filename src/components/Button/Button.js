import { useHistory } from 'react-router-dom';

const Button = ({
  className = 'btn btn-primary',
  type = 'button',
  text = 'ENVIAR',
  loading,
  to,
  onClick,
  ...rest
}) => {
  const history = useHistory();

  const handleClick = (e) => {
    if (onClick) {
      onClick();
    }
    if (to) {
      e.preventDefault();
      history.push(to);
    }
  };

  return (
    <button
      className={className}
      type={type}
      disabled={loading}
      onClick={handleClick}
      {...rest}
    >
      {loading ? (
        <>
          <i className="fas fa-spinner fa-pulse" />
          <span className="px-2">CARGANDO</span>
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
