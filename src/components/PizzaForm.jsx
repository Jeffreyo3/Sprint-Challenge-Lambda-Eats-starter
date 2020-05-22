import React from "react";

export default function PizzaForm({
  formValue,
  onChangeHandler,
  toggleGlutenFree,
  toppingsChangeHandler,
  handleSubmit,
}) {
  console.log(formValue);
  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="title">
        <h2>Build Your Own Pizza</h2>
      </div>
      {/* <div className="errors">
              <p>{errorMessage.email}</p>
              <p>{errorMessage.first_name}</p>
              <p>{errorMessage.last_name}</p>
              <p>{errorMessage.password}</p>
              <p>{errorMessage.accept}</p>
          </div> */}
      {/* Order Name */}
      <div className="section">
        <div className="label">
          <h3>Order Name</h3>
          <i>Required</i>
        </div>
        <div className="field">
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            placeholder="Order Name"
            value={formValue.name}
          />
        </div>
      </div>
      {/* Size */}
      <div className="section">
        <div className="label">
          <h3>Choice of Size</h3>
          <i>Required</i>
        </div>
        <div className="field">
          <select name="size" value={formValue.size} onChange={onChangeHandler}>
            <option value="8">Personal (8")</option>
            <option value="12">Small (12")</option>
            <option value="14">Medium (16")</option>
            <option value="18">Large (18")</option>
            <option value="21">X-Large (21")</option>
          </select>
        </div>
      </div>
      {/* Sauces */}
      <div className="section">
        <div className="label">
          <h3>Choice of Sauce</h3>
          <i>Required</i>
        </div>
        <div className="field">
          <input
            type="radio"
            id="original"
            name="sauce"
            value="original"
            onChange={onChangeHandler}
          />
          <label htmlFor="original">Original Red</label>
          <br />
          <input
            type="radio"
            id="garlice"
            name="sauce"
            value="garlice"
            onChange={onChangeHandler}
          />
          <label htmlFor="garlice">Garlic Ranch</label>
          <br />
          <input
            type="radio"
            id="bbq"
            name="sauce"
            value="bbq"
            onChange={onChangeHandler}
          />
          <label htmlFor="bbq">BBQ Sauce</label>
          <br />
          <input
            type="radio"
            id="alfredo"
            name="sauce"
            value="alfredo"
            onChange={onChangeHandler}
          />
          <label htmlFor="alfredo">Spinach Alfredo</label>
        </div>
      </div>
      {/* Toppings */}
      <div className="section">
        <div className="label">
          <h3>Add Toppings</h3>
          <i>Choose up to 10</i>
        </div>
        <div className="field" style={{ display: "flex" }}>
          <div className="row">
            <input
              type="checkbox"
              id="pepperoni"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="pepperoni">Pepperoni</label>
            <br />
            <input
              type="checkbox"
              id="sausage"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="sausage">Sausage</label>
            <br />
            <input
              type="checkbox"
              id="canadian-bacon"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="canadian-bacon">Canadian Bacon</label>
            <br />
            <input
              type="checkbox"
              id="spicy-italian-sausage"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="spicy-italian-sausage">Spicy Italian Sausage</label>
            <br />
            <input
              type="checkbox"
              id="grilled-chicken"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="grilled-chicken">Grilled Chicken</label>
            <br />
            <input
              type="checkbox"
              id="onions"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="onions">Onions</label>
            <br />
            <input
              type="checkbox"
              id="green-pepper"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="green-pepper">Green Pepper</label>
          </div>
          <div className="row">
            <input
              type="checkbox"
              id="diced-tomatos"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="diced-tomatos">Diced Tomatos</label>
            <br />
            <input
              type="checkbox"
              id="black-olives"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="black-olives">Black Olives</label>
            <br />
            <input
              type="checkbox"
              id="roasted-garlic"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="roasted-garlic">Roasted Garlic</label>
            <br />
            <input
              type="checkbox"
              id="artichoke-hearts"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="artichoke-hearts">Artichoke Hearts</label>
            <br />
            <input
              type="checkbox"
              id="three-cheese"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="three-cheese">Three Cheese</label>
            <br />
            <input
              type="checkbox"
              id="pineapple"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="pineapple">Pineapple</label>
            <br />
            <input
              type="checkbox"
              id="extra-cheese"
              name="toppings"
              onChange={toppingsChangeHandler}
            />
            <label htmlFor="extra-cheese">Extra Cheese</label>
          </div>
        </div>
      </div>

      {/* Gluten Free */}
      <div className="section">
        <div className="label">
          <h3>Choice of Substitute</h3>
          <i>Choose up to 1</i>
        </div>
        <div className="field">
          <label class="switch">
            <input type="checkbox" onClick={toggleGlutenFree} />
            <span class="slider"></span>
          </label>
        </div>
      </div>
      {/* Special Insructions */}
      <div className="section">
        <div className="label">
          <h3>Special Instructions</h3>
          <i>Optional</i>
        </div>
        <div className="field">
          <input
            type="text"
            name="specialInstructions"
            onChange={onChangeHandler}
            placeholder="Anything else you'd like to add?"
            value={formValue.specialInstructions}
          />
        </div>
      </div>

      <div className="submit">
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="10"
          value={formValue.quantity}
          onChange={onChangeHandler}
        />

        <button
          // disabled={disabled}
          className="subButton"
          name="button"
        >
          {/* Add to Order */}
          Submit Order
        </button>
      </div>
    </form>
  );
}
