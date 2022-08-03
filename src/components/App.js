import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([])
  const [editablePizza, setEditablePizza] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(r => r.json())
    .then(data => setPizzas(data))
  },[])

  function handlePizzaEdit(editedPizza) {
    const newPizzas = pizzas.map(pizza => {
      if (pizza.id === editedPizza.id) {
        return editedPizza
      } else {
        return pizza
      }
    })
    setPizzas(newPizzas)
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={editablePizza} setEditablePizza={setEditablePizza} onEditPizza={handlePizzaEdit}/>
      <PizzaList pizzas={pizzas} setEditablePizza={setEditablePizza}/>
    </>
  );
}

export default App;
