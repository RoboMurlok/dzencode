import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());

const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: "src/assets/monitor.png",
    title: "Samsung B1930N ",
    type: "Мониторы",
    specification: "Спецификация 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 2,
    photo: "src/assets/monitor.png",
    title: "Samsung B1930N ",
    type: "Монитор",
    specification: "Спецификация 2",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 2,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo: "src/assets/monitor.png",
    title: "Samsung B1930N",
    type: "Мониторы",
    specification: "Спецификация 2",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: 2,
    photo: "src/assets/monitor.png",
    title: "Samsung B1930N ",
    type: "Монитор",
    specification: "Спецификация 1",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 2,
    date: "2017-06-29 12:09:33",
  },
];

 const orders = [
  {
    id: 1,
    title: "Order 1",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products;
    },
  },
  {
    id: 2,
    title: "Order 2",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products;
    },
  },
  {
    id: 3,
    title: "Order 3",
    date: "2017-06-29 12:09:33",
    description: "desc",
    get products() {
      return products;
    },
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/orders", (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


