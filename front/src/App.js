import React from "react";
import { StoreProvider } from "./Components/Store";
import TareaForm from "./Components/Tarea/TareaForm";
import TareaLista from "./Components/Tarea/TareaLista";

function App() {
  return <div className= "container text-center">
      <StoreProvider>
        <TareaForm />
        <TareaLista />
    </StoreProvider>
  </div>
  
}

export default App;
