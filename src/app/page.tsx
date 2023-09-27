"use client";
import Image from "next/image";
import Header from "./components/header";
import Table from "./components/table";
import { useEffect, useState } from "react";
import StartButton from "./components/start-button";
import Container from "./components/container";
import { useRouter } from "next/navigation";

export default function Home() {
  const [invoice, setInvoice] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [showTotal, setShowTotal] = useState(false);
  const [names, setNames] = useState([]);
  const [showNames, setShowNames] = useState(false);
  const [showClear, setShowClear] = useState(false);
  const [namenow, setNameNow] = useState("");
  const router = useRouter();

  const calcular = () => {
    setTotal(invoice * (tip / 100));
    setShowTotal(true);
    setShowClear(true);
  };

  const Limpiar = () => {
    setInvoice(0);
    setTip(0);
    setTotal(0);
    setShowTotal(false);
    setShowClear(false);
    router.push("/");
  };

  return (
    <main className="">
      <Header />
      <div className="flex flex-row">
        <div className="flex flex-col justify-center w-6/12 p-16">
          <label className="text-2xl font-bold p-5">
            Total de la factura:{" "}
          </label>
          <input
            type="text"
            className="border-2 border-gray-400 rounded-md p-5"
            onChange={(e: any) => setInvoice(e.target.value)}
            value={invoice}
          />
          <label className="text-2xl font-bold p-5">
            Porcentaje de propina:{" "}
          </label>
          <input
            type="text"
            className="border-2 border-gray-400 rounded-md p-5"
            value={tip}
            onChange={(e: any) => setTip(e.target.value)}
          />
          <label className="text-2xl font-bold p-5">
            A quien le daran la propina?:{" "}
          </label>
          <input
            type="text"
            className="border-2 border-gray-400 rounded-md p-5"
            value={namenow}
            onChange={(e: any) => setNameNow(e.target.value)}
          />
          <button
            className="bg-red-400 text-white font-bold rounded-md p-5 m-2"
            onClick={calcular}
          >
            Calcular
          </button>
        </div>
        {showTotal && (
          <div className="flex flex-col justify-center p-16 w-5/12 h-48 ">
            <label className="text-2xl font-bold">
              Total de propina a {namenow}:{" "}
            </label>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-md p-5"
              value={total}
            />
            <button
              className="bg-red-400 text-white font-bold rounded-md p-5 m-2"
              onClick={Limpiar}
            >
              Limpiar
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
