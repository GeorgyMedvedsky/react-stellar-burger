import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay'

const modalRoot = document.getElementById('root');

export default function Modal({children, isOpen, onClose}) {

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  useEffect(() => {
    const handleCloseByEsc = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleCloseByEsc)
    }

    return () => {
      document.removeEventListener('keydown', handleCloseByEsc)
    };
  }, [isOpen, handleClose])

  if (!isOpen) {
    return null
  }

  return (
    isOpen && createPortal(
      <div className={`${styles.modal}`}>
        <div className={`${styles.modal__content} p-10`} onClick={(e) => {e.stopPropagation()}}>
          <button type="button" className={`${styles.closeBtn}`}>
            <CloseIcon type="primary" onClick={handleClose}/>
          </button>
          <div>{children}</div>
        </div>
        <ModalOverlay onClose={onClose} />
      </div>
    , modalRoot)
    )
  }
  