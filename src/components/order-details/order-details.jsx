import { useDispatch, useSelector } from 'react-redux';
import styles from './order-details.module.css'
import { useEffect } from 'react';
import { getOrderDetails } from '../../services/actions/orderDetails';

const ID = '034536';

export default function OrderDetails() {
  const { id } = useSelector(store => store.orderDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetails(ID))
  }, [dispatch])

  return (
    <>
        <p className={`${styles.order__number} text text_type_digits-large mt-4`}>{id}</p>
        <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
        <div className={`${styles.order__icon} mt-15 mb-15`}></div>
        <p className={`text text_type_main-small`}>Ваш заказ начали готовить</p>
        <p className={`text text_type_main-small text_color_inactive mt-2 mb-20`}>Дождитесь готовности на орбитальной станции</p>
    </>
  )
}

