import React from "react";
import Card from "./Card";
import close from "../assets/close.png";

export default function CardTable({
  card,
  cart,
  handleClose,
  openModal,
  ...props
}) {
  
  return (
    <div className="table" {...props}>
      <div className="circle close" onClick={handleClose}>
        <img src={close} alt="close" width={15} height={15} />
      </div>
      <h4>Таблица прихода</h4>
      <div className="btnBox">
        <button className="btn">+</button>
        <span>Добавить продукт</span>
      </div>
      <div>
        {card.map((item) => (
          <div className="mask" key={item.id}>
            <div className="cardTable">
              {item.isNew &&
                (item.isNew === 1 ? (
                  <a className="on"></a>
                ) : (
                  <a className="off"></a>
                ))}
              {item.photo && (
                <div className="image">
                  <img src={item.photo} alt="photo" width={40} height={40} />
                </div>
              )}
              {item.serialNumber && (
                <div className="box">
                  <h5>{item.title}</h5>
                  <p>{item.serialNumber}</p>
                </div>
              )}
              <div>
                {item.isNew &&
                  (item.isNew === 1 ? (
                    <p className="free">Свободен</p>
                  ) : (
                    "В ремонте"
                  ))}
              </div>

              <div
                className="image cart"
                onClick={() => openModal(item.id)}
              >
                <img src={cart} alt="photo" width={20} height={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
