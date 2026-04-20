import React from "react";

export default function Card({
  product,
  cart,
  menu,
  quantity,
  handleOrder,
  handleDelete,
  ...props
}) {
  const {
    id,
    photo,
    title,
    guarantee,
    price,
    type,
    specification,
    date,
    serialNumber,
    isNew,
  } = product;

  const isInCart = handleDelete;
  

  return (
    <div className="card" {...props}>
      {isNew &&
        (isNew === 1 ? <a className="on"></a> : <a className="off"></a>)}
      {photo && (
        <div className="image">
          <img src={photo} alt="photo" width={40} height={40} />
        </div>
      )}
      {serialNumber && (
        <div className="box">
          <h5>{title}</h5>
          <p>{serialNumber}</p>
        </div>
      )}
      <div>
        {(isNew && cart) && 
          (isNew === 1 ? <p className="free">Свободен</p> : "В ремонте")}
      </div>
      {menu && (
        <div className="circle">
          <img src={menu} alt="image" width={40} height={40} />
        </div>
      )}
      {(quantity || quantity === 0) && (
        <div className="box">
          <h3> {quantity}</h3>
          <p>Продукта</p>
        </div>
      )}
      {guarantee && (
        <div className="box">
          <div>с {guarantee.start}</div>
          <div>по {guarantee.end}</div>
        </div>
      )}
      <div>{(isNew && cart) &&  (isNew === 1 ? "Новый" : "Б/у")}</div>
      <div className="box">
        {price &&
          price.map((item, index) => {
            if (item.isDefault === 0) {
              return (
                <div key={index}>
                  <p>
                    {item.value} {item.symbol}
                  </p>
                </div>
              );
            }
            return (
              <div key={index}>
                {item.value} {item.symbol}
              </div>
            );
          })}
      </div>
      <div className="type">
        <h5>{type}</h5>
      </div>
      <div>
        <h5>{specification}</h5>
      </div>
      <div>{date}</div>
      {cart && (
        <div
          className="image cart"
          onClick={() =>
            isInCart ? handleDelete?.(id) : handleOrder?.(product)
          }
        >
          <img src={cart} alt="photo" width={20} height={20} />
        </div>
      )}
    </div>
  );
}
