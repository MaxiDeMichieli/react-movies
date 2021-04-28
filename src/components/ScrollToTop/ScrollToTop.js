import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
