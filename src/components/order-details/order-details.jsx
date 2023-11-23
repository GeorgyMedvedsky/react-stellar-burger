import styles from './order-details.module.css'

export default function OrderDetails() {
  return (
    <>
        <p className={`${styles.order__number} text text_type_digits-large mt-4`}>034536</p>
        <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
        <div className={`${styles.order__icon} mt-15 mb-15`}></div>
        <p className={`text text_type_main-small`}>Ваш заказ начали готовить</p>
        <p className={`text text_type_main-small text_color_inactive mt-2 mb-20`}>Дождитесь готовности на орбитальной станции</p>
    </>
  )
}

