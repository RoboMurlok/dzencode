import React, { useState, useEffect } from "react";
import shield from "../assets/shield.svg";
import MyInput from "./MyInput";
import clock from "../assets/clock.svg";

export default function Header({ ...props }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date()); // обновляем время
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const weekday = now.toLocaleDateString("ru-RU", { weekday: "long" });
  const day = now.toLocaleDateString("ru-RU", { day: "numeric" });
  const month = now.toLocaleDateString("ru-RU", { month: "short" });
  const year = now.toLocaleDateString("ru-RU", { year: "numeric" });
  const time = now.toLocaleTimeString("ru-RU");

  return (
    <header {...props}>
      <div className="search">
        <div className="icons">
          <img src={shield} alt="shield" />
          INVERTORY
        </div>
        <MyInput />
      </div>
      <div className="box">
        <div>{weekday}</div>
        <div className="time">
          <div className="clock">
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
          </div>
          <div className="clock">
            <img src={clock} alt="clock" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
