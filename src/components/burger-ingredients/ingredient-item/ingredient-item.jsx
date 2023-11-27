import styles from './ingredient-item.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../../modal/modal';
import useModal from '../../../hooks/useModal';
import IngredientDetails from '../../ingredients-details/ingredient-details';
import { ingredientPropType } from '../../../utils/prop-types';

export default function IngredientItem({dataItem}) {
    const {image, price, name} = dataItem;
    const {isModalOpen, handleOpenModal, handleCloseModal} = useModal()
    
    return (
        <>
            <div className={styles.ingredientItem} onClick={handleOpenModal}>
                <img src={image} alt={name} />
                <p className={`${styles.ingredientItem__price} text text_type_digits-default mt-2 mb-2`} >
                    <span className='mr-4'>{price}</span>
                    <CurrencyIcon type="primary" />
                </p>
                <h3 className={`${styles.ingredientItem__name} text text_type_main-default`}>
                    {name}
                </h3>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={'Детали ингредиента'}>
                <IngredientDetails data={dataItem}/>
            </Modal>
        </>
    )
}

IngredientItem.propTypes = {
    'dataItem': ingredientPropType
}