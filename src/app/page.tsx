import Image from "next/image";
import Board from "@/components/Board";
import react from 'react'

export default function Home() {
  return (
    <div >
    <div className="font-mono text-4xl text-center p-10  ">Tic Tac Toe game with NextJs </div>
    <Board />
  </div>
  );
}
