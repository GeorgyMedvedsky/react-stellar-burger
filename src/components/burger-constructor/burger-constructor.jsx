
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
import { addIngredient, removeIngredient, toggleBun } from "../../services/actions/ingredientsInConstructor";
import { useEffect } from "react";

export default function BurgerConstructor() {
    const { bun, ingredients } = useSelector(state => state.ingredientsInConstructor);
    const defaultBun = useSelector(state => state.ingredients.items).find(item => item.type === 'bun');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleBun(defaultBun))
    }, [dispatch, defaultBun]);

    const {isModalOpen, handleOpenModal, handleCloseModal} = useModal();

    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(item) {
            if(item.type === 'bun') {
                dispatch(toggleBun(item))
            } else {
                dispatch(addIngredient(item))
            }
        }
    });

    const handleRemoveIngredient = (id) => {
        dispatch(removeIngredient(id));
    };

    return (
        <>  
            <section className={`${styles.burgerConstructor} pt-25 pl-4 pr-4 `}>
                
                <div className={styles.constructor} ref={dropTarget}>
                    <div className={styles.constructor__item}>
                        {bun &&
                            <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={`${bun.name} (верх)`}
                                price={bun.price}
                                thumbnail={bun.image}
                            />
                        }
                    </div>
                    {!ingredients.length > 0
                        ? <div className={`${styles.constructor__items_empty} custom-scroll`} ref={dropTarget}>
                            <p className='text text_type_main-default text_color_inactive'>Перетащите ингредиенты, чтобы собрать свой бургер</p>
                        </div>
                        : <ul className={`${styles.constructor__items} custom-scroll`} ref={dropTarget}>
                            {ingredients.map(item => {
                                return (
                                    <li className={styles.constructor__item} key={item.id}>
                                        <DragIcon type="primary" />
                                        <ConstructorElement
                                            text={item.name}
                                            price={item.price}
                                            thumbnail={item.image}
                                            handleClose={() => handleRemoveIngredient(item.id)}
                                        />
                                    </li>
                                )
                            })}                    
                        </ul> 
                    }
                    <div className={styles.constructor__item}>
                        {bun &&
                            <ConstructorElement
                                type="bottom"
                                isLocked={true}
                                text={`${bun.name} (низ)`}
                                price={bun.price}
                                thumbnail={bun.image}
                            />
                        }
                    </div>
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