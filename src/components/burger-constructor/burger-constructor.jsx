
import styles from "./burger-constructor.module.css";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from "../modal/modal"
import useModal from "../../hooks/useModal"
import OrderDetails from "../order-details/order-details"
// Redux
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { addIngredient } from "../../services/actions/ingredientsInConstructor";

export default function BurgerConstructor() {
    const { bun, ingredients } = useSelector(state => state.ingredientsInConstructor);
    const dispatch = useDispatch();

    const {isModalOpen, handleOpenModal, handleCloseModal} = useModal();

    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(item) {
            dispatch(addIngredient(item))
        }
    });

    return (
        <>  
            <section className={`${styles.burgerConstructor} pt-25 pl-4 pr-4 `} ref={dropTarget}>
                <div className={styles.constructor}>
                    {/* <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    /> */}
                    <ul className={`${styles.constructor__items} custom-scroll`} ref={dropTarget}>
                        {ingredients.map(item => {
                            return (
                                <li className={styles.constructor__item} key={item.id}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                    />
                                
                                </li>
                            )
                        })}                    
                    </ul>
                    {/* <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    /> */}
                </div>
                <div className={`${styles.info} mt-10`}>
                    <p className='text text_type_digits-medium mr-10'>
                        <span className={`mr-2`}>610</span>
                        <CurrencyIcon />
                    </p>
                    <Button htmlType="button" type="primary" size="medium" onClick={handleOpenModal}>
                        Нажми на меня
                    </Button>

                </div>
            </section>
            
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <OrderDetails />
            </Modal>
        </>
    )
}