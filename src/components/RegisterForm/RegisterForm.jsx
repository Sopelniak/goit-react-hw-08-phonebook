import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/authOparations';
import s from './RegisterForm.module.scss';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const [user, setUser] = useState(INITIAL_FORM_STATE);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registration(user));
    setUser(INITIAL_FORM_STATE);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name:
        <input
          className={s.input}
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Email:
        <input
          className={s.input}
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Password:
        <input
          className={s.input}
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Regicter</button>
    </form>
  );
};
