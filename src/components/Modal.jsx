import React from "react";
import Card from "./Card";
import MyButton from "./MyButton";
import close from "../assets/close.png";
import cart from "../assets/cart.png";
import { useCard } from "../store";

export default function Modal({  ...props }) {
  const cardDelete = useCard((state) => state.cardDelete);
  const isOpenModal = useCard((state) => state.isOpenModal);
  const handleDelete = useCard((state) => state.handleDelete);
  const closeModal = useCard((state) => state.closeModal);

  const onDelete = () => {
  handleDelete(cardDelete[0]?.id);
};
  
  return (
    <div className={`modal ${isOpenModal ? "open" : ""}`} {...props}>
      <article className="info">
        <div className="circle close" onClick={closeModal}>
          <img src={close} alt="close" width={15} height={15} />
        </div>
        <h4>Вы уверены что хотите удалить этот продукт?</h4>
        <Card product={cardDelete[0]} />
        <div className="subinfo">
          <div className="btnBox">
            <MyButton className="cancel" handleClick={closeModal}>
              отменить
            </MyButton>
            <MyButton cart={cart} handleClick={onDelete}>
              удалить
            </MyButton>
          </div>
        </div>
      </article>
    </div>
  );
}
