"use client";
import { useEffect , useState} from "react";

interface PriceUpdate{
  source : string;
  pair : string;
  price : number;
}

export default function Home() {

  const [price , setPrice] = useState<number | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8081/ws");

    ws.onmessage = (event) => {
      const data : PriceUpdate = JSON.parse(event.data);
      
      if(data.source === "Binance") {
        setPrice(data.price);
      }
    };

    return () => ws.close();
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold">Binance SOL/USDT</h2>
      <p className="text-2xl font-bold text-green-600">
        {price ? `$${price.toFixed(2)}` : "Loading..."}
      </p>
    </div>
  );
}
