import React, { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './CreateModalComponent.module.scss';

function CreateModalComponent({
  children,
  closeModal,
}: {
  children: ReactNode;
  closeModal: () => void;
}) {
  const modalRef = useRef(null);
  // @ts-ignore
  const hideModal = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  };
  return createPortal(
    <div className={styles.modalRoot} onClick={hideModal} ref={modalRef}>
      {children}
    </div>,
    document.getElementById('modal-root')!
  );
}

export default CreateModalComponent;
