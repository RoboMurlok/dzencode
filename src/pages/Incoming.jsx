import React, { useEffect } from "react";
import Card from "../components/Card";
import cart from "../assets/cart.png";
import { useCard } from "../store";
import Modal from "../components/Modal";

export default function Incoming() {
  const card = useCard((state) => state.card);
  const fetchProducts = useCard((state) => state.fetchProducts);
  const openModal = useCard((state) => state.openModal);
  const [type, setType] = React.useState(null);
  const [cert, setCert] = React.useState(null);

  const filteredCard = card.filter((item) => {
    const matchType = type ? item.type === type : true;
    const matchCert = cert ? item.specification.trim() === cert.trim() : true;
    return matchType && matchCert;
  });


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <section>
        <h2>Продукты / {filteredCard.length}</h2>
        <p>Тип</p>
        <div className="select-wrapper">
          <select onChange={(e) => setType(e.target.value)}>
            <option value="">Все</option>
            <option value="Монитор">Монитор</option>
            <option value="Мониторы">Мониторы</option>
          </select>
        </div>
        <p>Спецификация</p>
        <div className="select-wrapper">
          <select onChange={(e) => setCert(e.target.value)}>
            <option value="">Все</option>
            <option value="Спецификация 1">Спецификация 1</option>
            <option value="Спецификация 2">Спецификация 2</option>
          </select>
        </div>
      </section>
      <section>
        <article>
          {filteredCard.map((product) => (
            <Card
              key={product.id}
              product={product}
              cart={cart}
              handleDelete={openModal}
            />
          ))}
        </article>
      </section>
    </>
  );
}
