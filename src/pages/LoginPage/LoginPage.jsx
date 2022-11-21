import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

export const LoginPage = () => {
  const token = useSelector(selectToken);
  return <>{!token && <LoginForm />}</>;
};
