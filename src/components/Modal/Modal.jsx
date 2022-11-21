import { EditContactForm } from 'components/EditContactForm/EditContactForm';
import { AddContactForm } from 'components/Form/AddContactForm';
import PropTypes from 'prop-types';
import { useEffect } from 'react';


import s from '../Modal/Modal.module.scss';

export const Modal = ({ closeModal, param, contact }) => {
  useEffect(() => {
    const closeByEsc = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  const closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <>
      <div className={s.overlay} onClick={closeByBackdrop}>
        <div className={s.modal}>
          {param === 'edit' && (
            <EditContactForm contact={contact} closeModal={closeModal} />
          )}
          {param === 'add' && <AddContactForm />}
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
