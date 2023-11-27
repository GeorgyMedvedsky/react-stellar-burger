// function ModalOverlay({onClose}) {
//     const handleClick = () => {
//       onClose()
//     }
//     return (
//       <div className={styles.overlay} onClick={handleClick}>
//       </div>
//     )
// }

// function Modal({children, isOpen, onClose}) {

//     const handleClose = useCallback(() => {
//       onClose()
//     }, [onClose])
  
//     useEffect(() => {
//       const handleCloseByEsc = (e) => {
//         if (e.key === 'Escape') {
//           handleClose()
//         }
//       };
  
//       if (isOpen) {
//         document.addEventListener('keydown', handleCloseByEsc)
//       }
  
//       return () => {
//         document.removeEventListener('keydown', handleCloseByEsc)
//       };
//     }, [isOpen, handleClose])
  
//     if (!isOpen) {
//       return null
//     }
  
//     return (
//       isOpen && createPortal(
//         <div className={`${styles.modal}`}>
//           <div className={`${styles.modal__content} p-10`} onClick={(e) => {e.stopPropagation()}}>
//             <button type="button" className={`${styles.closeBtn}`}>
//               <CloseIcon type="primary" onClick={handleClose}/>
//             </button>
//             <div>{children}</div>
//           </div>
//           <ModalOverlay onClose={onClose} />
//         </div>
//       , modalRoot)
//     )
// }

// function IngredientItem({dataItem}) {
//     const {image, price, name} = dataItem;
//     const {isModalOpen, handleOpenModal, handleCloseModal} = useModal()
    
//     return (
        
//         <div className={styles.ingredientItem} onClick={handleOpenModal}>
//             <img src={image} alt={name} />
//             <p className={`${styles.ingredientItem__price} text text_type_digits-default mt-2 mb-2`} >
//                 <span className='mr-4'>{price}</span>
//                 <CurrencyIcon type="primary" />
//             </p>
//             <h3 className={`${styles.ingredientItem__name} text text_type_main-default`}>
//                 {name}
//             </h3>

//             <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//                 <h2>{name}</h2>
//             </Modal>
//         </div>
//     )
// }

// function BurgerConstructor({data}) {
//     const bun = data.find(item => item.type === "bun")
//     const ingredients = data.filter(item => {
//         return item.type !== "bun"
//     })

//     const {isModalOpen, handleOpenModal, handleCloseModal} = useModal()

//     return (
//         <section className={`${styles.burgerConstructor} pt-25 pl-4 pr-4 `}>
//             <div className={`${styles.info} mt-10`}>
//                 <p className='text text_type_digits-medium mr-10'>
//                     <span className={`mr-2`}>610</span>
//                     <CurrencyIcon />
//                 </p>
//                 <Button htmlType="button" type="primary" size="medium" onClick={handleOpenModal}>
//                     Нажми на меня
//                 </Button>

//                 <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//                     <h2>Ваш заказ</h2>
//                 </Modal>
//             </div>
//         </section>
//     )
// }

// //Styles
// .overlay{
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 1;
//     height: 100%;
//     width: 100%;
//     background: rgba(0, 0, 0, 0.60);
// }
// .modal{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .modal__content{
//     width: 720px;
//     height: 718px;
//     border-radius: 40px;
//     border: 1px solid var(--interface-modal-edge, rgba(76, 76, 255, 0.20));
//     background: var(--interface-modal-bg, #1C1C21);
//     box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.04), 0px 16px 24px 0px rgba(0, 0, 0, 0.04), 0px 24px 32px 0px rgba(0, 0, 0, 0.04);
//     position: fixed;
//     z-index: 100;
// }
