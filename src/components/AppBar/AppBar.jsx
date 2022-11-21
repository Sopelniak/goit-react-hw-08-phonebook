import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';

import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';

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
      {token && <button onClick={clickHeandler}>LogOut</button>}
    </div>
  );
};
