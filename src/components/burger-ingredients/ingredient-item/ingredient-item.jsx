import styles from './ingredient-item.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../../modal/modal';
import useModal from '../../../hooks/useModal';
import IngredientDetails from '../../ingredients-details/ingredient-details';
import { ingredientPropType } from '../../../utils/prop-types';
import { useDrag } from 'react-dnd';

export default function IngredientItem({dataItem}) {
    const {image, price, name} = dataItem;
    const {isModalOpen, handleOpenModal, handleCloseModal} = useModal();

    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: {...dataItem}
    });
    
    return (
        <>
            <div className={styles.ingredientItem} onClick={handleOpenModal} ref={dragRef}>
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
                <IngredientDetails item={dataItem} />
            </Modal>
        </>
    )
}

IngredientItem.propTypes = {
    'dataItem': ingredientPropType
}