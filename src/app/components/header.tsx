import React from "react";
import 'primeicons/primeicons.css';

const Header = () => {
  return (
    <header className="bg-red-400 w-full text-center p-6 align-middle">
      <div className="flex justify-center gap-2  ">
        <i className="pi pi-bitcoin " style={{ fontSize: '2rem' }} />
        <h1 className="text-4xl font-bold inline-block text-white">Tip App</h1>
      </div>
    </header>
  );
};

export default Header;
