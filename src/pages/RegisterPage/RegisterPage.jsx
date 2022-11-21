import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

export const RegisterPage = () => {
  const token = useSelector(selectToken);
  return <>{!token && <RegisterForm />}</>;
};
