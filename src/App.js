import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Axios from 'axios';
import * as Yup from 'yup';

import Header from './components/Header';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';

import pizzaFormSchema from './utils/pizzaFormSchema';

const blankForm = {
  name: "",
  size: "8",
  sauce: "",
  toppings: [],
  glutenFree: false,
  specialInstructions: "",
  quantity: 1
}

const initialErrorMsg = {
  name: "",
  size: "",
  sauce: "",
  toppings: "",
  glutenFree: "",
  specialInstructions: "",
  quantity: ""
}

const App = () => {
  const [formValue, setFormValue] = useState(blankForm);
  const [disabled, setDisabled] = useState(false)
  const [errorMessage, setErrorMessage] = useState(initialErrorMsg)

  const validateSchema = (item, value) => {
    Yup
      .reach(pizzaFormSchema, item)
      .validate(value)
      .then(response => {
        setErrorMessage({
          ...errorMessage,
          [item]: "",
        });
      })
      .catch(
        error => {
          setErrorMessage({
            ...errorMessage,
            [item]: error.errors[0],
          });
        })
  }

  const onChangeHandler = e => {
    const { name, value } = e.target
    validateSchema(name, value)
    setFormValue({ ...formValue, [name]: value })
  }

  const arrChangeHandler = e => {
    const { checked, id } = e.target
    const name = "toppings"
    validateSchema(name, id)
    if (checked) {
      setFormValue({ ...formValue, [name]: [...formValue[name], id] })
    } else {
      const itemRemoved = formValue[name].filter(existing => existing !== id)
      setFormValue({ ...formValue, [name]: itemRemoved })
    }
  }

  const toggleChangeHandler = () => {
    const name = "glutenFree"
    validateSchema(name, !formValue[name])
    setFormValue({ ...formValue, [name]: !formValue[name] })
  }

  const handleSubmit = e => {
    e.preventDefault();
    Axios.post('https://reqres.in/api/users', formValue)
      .then(res => console.log("Order was successful! ", res.data))
      .catch(err => console.log("Uh..oh.... something went wrong: ", err))
  }



  useEffect(() => {
    pizzaFormSchema.isValid(formValue)
      .then(valid => {
        // console.log(valid)
        setDisabled(!valid)
      })
      .catch(err => console.log(err))
  }, [formValue])


  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <PizzaForm
            formValue={formValue}
            disabled={disabled}
            errorMessage={errorMessage}
            handleSubmit={handleSubmit}
            onChangeHandler={onChangeHandler}
            toggleChangeHandler={toggleChangeHandler}
            arrChangeHandler={arrChangeHandler} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
