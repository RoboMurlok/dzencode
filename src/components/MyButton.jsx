import React from "react";

export default function MyButton({ children, cart, handleClick, ...props }) {
  return (
    <div
      className="button"
      {...props}
      onClick={() => {
        handleClick();
      }}
    >
      {cart && (
        <div className="image">
          <img src={cart} alt="photo" width={20} height={20} />
        </div>
      )}
      {children}
    </div>
  );
}
