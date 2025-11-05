"use client";
import { useEffect } from "react";

export default function Home() {

useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:8081/ws");

    socket.onopen = () => console.log("🔗 Connected to Rust backend");
    socket.onmessage = (event) =>
      console.log("📩 Message from backend:", event.data);
    socket.onerror = (err) => console.error("⚠️ Socket error:", err);
    socket.onclose = () => console.log("❌ Connection closed");

    return () => socket.close();
  }, []);

  return (
    <main style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <h1>Web3 Terminal – Sprint 0</h1>
      <p>hi from the rust backend service 🚀</p>
    </main>
  );
}
