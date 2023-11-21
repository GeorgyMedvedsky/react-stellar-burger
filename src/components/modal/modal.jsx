import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay'
import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('root');

export default function Modal({children, active, setActive}) {

  const handleCloseModal = useCallback(() => {
    setActive(false)
  }, [setActive])

  const handleCloseModalByEsc = useCallback((event) => {
    if (event.key === 'Escape') {
      handleCloseModal()
    }
  }, [handleCloseModal])
  
  useEffect(() => {
    if (active) {
      window.addEventListener('keydown', handleCloseModalByEsc)
    }
    return () => {
      window.removeEventListener('keydown', handleCloseModalByEsc)
    }
  }, [active, handleCloseModalByEsc])

  return (
    active && createPortal(
      <div className={`${styles.modal}`} onClick={handleCloseModal}>
        <div className={`${styles.modal__content} p-10`}>
          
          <button type="button" className={`${styles.closeBtn}`}>
            <CloseIcon type="primary" onClick={handleCloseModal}/>
          </button>
          {children}
        </div>
        <ModalOverlay/>
      </div>
    , modalRoot)
  )
}
