import React, { useEffect } from "react";
import Card from "../components/Card";
import CardTable from "../components/CardTable";
import menu from "../assets/menu.svg";
import cart from "../assets/cart.png";
import arrow from "../assets/arrow.svg";
import Modal from "../components/Modal.jsx";
import { useCard } from "../store";

export default function Groups() {
  const card = useCard((state) => state.card);
  const order = useCard((state) => state.order);
  const orders = useCard((state) => state.orders);
  const isOpen = useCard((state) => state.isOpen);
  const handleOrder = useCard((state) => state.handleOrder);
  const handleClose = useCard((state) => state.handleClose);
  const openModal = useCard((state) => state.openModal);
  const fetchProducts = useCard((state) => state.fetchProducts);
  const fetchOrders = useCard((state) => state.fetchOrders);

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const ordersMap = Object.fromEntries(
    orders.map((order) => [order.id, { ...order, products: [] }]),
  );

  card.forEach((product) => {
    ordersMap[product.order]?.products.push(product);
  });

  const result = Object.values(ordersMap);

  return (
    <>
      <h2>Приходы / {card.length}</h2>
      <section>
        <article>
          {result.map((order) => (
            <Card
              key={order.title}
              product={order}
              menu={menu}
              quantity={order.products.length}
              cart={arrow}
              handleOrder={handleOrder}
            />
          ))}
        </article>
        <article>
          {isOpen && (
            <CardTable
              card={order}
              cart={cart}
              handleClose={handleClose}
              openModal={openModal}
            />
          )}
        </article>
      </section>
    </>
  );
}
