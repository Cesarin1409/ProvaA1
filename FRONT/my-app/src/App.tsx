import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
//1 - Um componente SEMPRE deve começar com a primeira letra
//maiúscula
//2 - Todo componente DEVE ser uma função do JS
//3 - Todo deve retornar apenas UM elemento HTML
function App() {
  return (
    <div>
      <h1>Listar</h1>
      <li>
              <Link to={"/FRONT/my-app/src/components/pages/tarefa/listar.tsx"}>
                Listar Tarefas{" "}
              </Link>
            </li>
    </div>
  );
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado
export default App;
