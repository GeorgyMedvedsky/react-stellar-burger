import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('root');

export default function Modal({children}) {
  const [visible, setVisible] = useState(true)

  const handleCloseModal = () => {
    setVisible(false)
  }

  const handleEscClose = (event) => {
    if (event.key === 'Escape') {
      handleCloseModal()
    }
  }
  
  useEffect(() => {
    if (visible) {
      window.addEventListener('keydown', handleEscClose)
    }
    return () => {
      window.removeEventListener('keydown', handleEscClose)
    }
  }, [visible])

  return (
    visible && createPortal(
      <div className={`${styles.modal__container}`}>
        <div className={`${styles.modal} p-10`} onClick={e => e.stopPropagation()}>
          {children}
          <button type="button" className={`${styles.closeBtn}`}>
            <CloseIcon type="primary" onClick={handleCloseModal}/>
          </button>
        </div>
        <div onClick={handleCloseModal}>
          <ModalOverlay/>
        </div>
      </div>
    , modalRoot)
  )
}
