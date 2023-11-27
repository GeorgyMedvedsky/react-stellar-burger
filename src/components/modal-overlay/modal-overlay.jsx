import styles from './modal-overlay.module.css'
import PropTypes from 'prop-types'

export default function ModalOverlay({onClose}) {
  const handleClick = () => {
    onClose()
  }

  return (
    <div className={styles.overlay} onClick={handleClick}>
    </div>
  )
}

ModalOverlay.propTypes = {
  'onClose': PropTypes.func,
}