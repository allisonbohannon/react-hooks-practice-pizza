import React from "react";

function PizzaForm({pizza, setEditablePizza, onEditPizza}) {
  const {id, topping, size, vegetarian} = pizza
  
  function handleChangeVeg(e) {
    if (e.target.value === "Vegetarian") {
      setEditablePizza({...pizza, vegetarian: true})
    } else {
      setEditablePizza({...pizza, vegetarian: false})
    }
  }


  function handleSubmit(e) {
    e.preventDefault()
    console.log(pizza)
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH", 
      headers: {},
      body: JSON.stringify(pizza)
    })
      .then(r => r.json())
      .then(data => onEditPizza(data))
    }


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={topping}
            placeholder="Pizza Topping"
            onChange={(e) => setEditablePizza({...pizza, topping: e.target.value})}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={(e) => setEditablePizza({...pizza, size: e.target.value})}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleChangeVeg}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check" >
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleChangeVeg}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
