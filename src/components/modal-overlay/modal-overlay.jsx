import styles from './modal-overlay.module.css'

export default function ModalOverlay({onClose}) {
  const handleClick = () => {
    onClose()
  }
  return (
    <div className={styles.overlay} onClick={handleClick}>
    </div>
  )
}
