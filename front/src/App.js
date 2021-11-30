import React from "react";
import { StoreProvider } from "./Components/Store";
import TareaForm from "./Components/Tarea/TareaForm";
import ListaTarea from "./Components/Tarea/ListaTarea";

function App() {
  return <div className= "container text-center">
      <StoreProvider>
        <TareaForm />
        <ListaTarea />
    </StoreProvider>
  </div>
  
}

export default App;
