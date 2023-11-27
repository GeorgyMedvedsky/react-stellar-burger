import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay'
import PropTypes from 'prop-types'

const modalRoot = document.getElementById('root');

export default function Modal({children, isOpen, onClose, title}) {

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
        <div className={`${styles.modal__container} p-10`} onClick={(e) => {e.stopPropagation()}}>
          <header className={`${styles.modal__heading}`}>
            <h2 className='text text_type_main-large'>{title}</h2>
            <button type="button" className={`${styles.closeBtn}`}>
              <CloseIcon type="primary" onClick={handleClose}/>
            </button>
          </header>
          <div className={`${styles.modal__content}`}>
            {children}
          </div>
        </div>
        <ModalOverlay onClose={onClose} />
      </div>
    , modalRoot)
    )
}

Modal.propTypes = {
  "children": PropTypes.object,
  "isOpen": PropTypes.bool,
  "onClose": PropTypes.func,
  "title": PropTypes.string,
}