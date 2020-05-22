import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';

const blankForm = {
  name: "",
  size: "8",
  sauce: "",
  toppings: [],
  glutenFree: false,
  specialInstructions: "",
  quantity: 1
}

const App = () => {
  const [formValue, setFormValue] = useState(blankForm);

  const onChangeHandler = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const toppingsChangeHandler = e => {
    console.log(e.target.checked)
    if (e.target.checked) {
      setFormValue({ ...formValue, toppings: [...formValue.toppings, e.target.id] })
    } else {
      const itemRemoved = formValue.toppings.filter(existing => existing !== e.target.id)
      setFormValue({ ...formValue, toppings: itemRemoved })
    }
  }

  const toggleGlutenFree = () => {
    setFormValue({ ...formValue, glutenFree: !formValue.glutenFree })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://reqres.in/api/users', formValue)
      .then(res => console.log("Order was successful! ", res.data))
      .catch(err => console.log("Uh..oh.... something went wrong: ", err))
  }



  return (
    <>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <PizzaForm formValue={formValue} handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} toggleGlutenFree={toggleGlutenFree} toppingsChangeHandler={toppingsChangeHandler} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
