import { create } from "zustand";

export const useCard = create((set) => ({
  card: [],
  orders: [],
  cardDelete: null,
  order: [],
  isOpen: false,
  isOpenModal: false,
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true });

    try {
      const res = await fetch("api/products");
      const data = await res.json();

      set({
        card: data,
        loading: false,
      });
    } catch (err) {
      set({
        error: err.message,
        loading: false,
      });
    }
  },

  fetchOrders: async () => {
    set({ loading: true });

    try {
      const res = await fetch("api/orders");
      const data = await res.json();

      set({
        orders: data,
        loading: false,
      });
    } catch (err) {
      set({
        error: err.message,
        loading: false,
      });
    }
  },

  handleDelete: (id) =>
    set((state) => {
      const updatedCard = state.card.filter((item) => item.id !== id);

      return {
        card: updatedCard,
        isOpenModal: false,
      };
    }),

  handleOrder: (product) =>
    set((state) => {
      state.order = [];
      const newICard = product.products
        .filter((p) => !state.order.some((item) => item.id === p.id))
        .map(({ id, isNew, photo, title, serialNumber }) => ({
          id,
          isNew,
          photo,
          title,
          serialNumber,
        }));
      console.log(newICard);
      return {
        order: [...newICard],
        isOpen: true,
      };
    }),

  handleClose: () => set({ isOpen: false }),

  openModal: (id) =>
    set((state) => {
      const newICard = state.card
        .filter((item) => item.id === id)
        .map(({ id, isNew, photo, title, serialNumber }) => ({
          id,
          isNew,
          photo,
          title,
          serialNumber,
        }));

      return {
        cardDelete: newICard || null,
        isOpenModal: true,
        isOpen: false,
      };
    }),

  closeModal: () =>
    set(() => ({
      cardDelete: [],
      isOpenModal: false,
      isOpen: false,
    })),
}));



let socket = null; 

export const useWS = create((set) => ({
  count: 0,

  connect: () => {
    if (socket && socket.readyState === 1) return;

    socket = new WebSocket("ws://localhost:3001");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      set({ count: data.count });
    };

    socket.onclose = () => {
      socket = null; 
    };
  },
}));
