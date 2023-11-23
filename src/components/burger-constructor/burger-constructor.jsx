import styles from "./burger-constructor.module.css"
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from "../modal/modal"
import useModal from "../../hooks/useModal"

export default function BurgerConstructor({data}) {
    const bun = data.find(item => item.type === "bun")
    const ingredients = data.filter(item => {
        return item.type !== "bun"
    })

    const {isModalOpen, handleOpenModal, handleCloseModal} = useModal()

    return (
        <>
            <section className={`${styles.burgerConstructor} pt-25 pl-4 pr-4 `}>
                <div className={styles.constructor}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                    <ul className={`${styles.constructor__items} custom-scroll`}>
                        {ingredients.map(item => {
                            return (
                                <li className={styles.constructor__item} key={item._id}>
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
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
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
            </Modal>
        </>
    )
}
