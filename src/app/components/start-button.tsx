"use client";

const StartButton = () => {
  const onClick = () => {
    let products = [
      {
        id: 1,
        name: "Apple",
        price: 10,
        quantity: 1,
      },
      {
        id: 2,
        name: "Orange",
        price: 20,
        quantity: 1,
      },
      {
        id: 3,
        name: "Banana",
        price: 30,
        quantity: 1,
      },
    ];

    localStorage.setItem("products", JSON.stringify(products));
  };
  return (
    <div>
      <button onClick={onClick}>Start</button>
    </div>
  );
};

export default StartButton;
