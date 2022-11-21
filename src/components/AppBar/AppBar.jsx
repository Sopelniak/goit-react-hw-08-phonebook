import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';

import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/authOparations';

import s from './AppBar.module.scss';

export const AppBar = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const clickHeandler = () => {
    dispatch(logout());
  };
  return (
    <div className={s.appBar}>
      <Navigation />
      {!token && <AuthNavigation />}
      {token && <button type='button' onClick={clickHeandler}>LogOut</button>
      }
      
    </div>
  );
};
