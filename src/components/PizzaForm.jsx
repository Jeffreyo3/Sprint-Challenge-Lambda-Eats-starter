import React from "react";

export default function PizzaForm({
  formValue,
  disabled,
  errorMessage,
  onChangeHandler,
  toggleChangeHandler,
  arrChangeHandler,
  handleSubmit,
}) {
  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="title">
        <h2>Build Your Own Pizza</h2>
      </div>
      <div className="errors">
        <p>{errorMessage.name}</p>
        <p>{errorMessage.size}</p>
        <p>{errorMessage.sauce}</p>
        <p>{errorMessage.toppings}</p>
        <p>{errorMessage.glutenFree}</p>
        <p>{errorMessage.specialInstructions}</p>
        <p>{errorMessage.quantity}</p>
      </div>
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
              onChange={arrChangeHandler}
            />
            <label htmlFor="pepperoni">Pepperoni</label>
            <br />
            <input
              type="checkbox"
              id="sausage"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="sausage">Sausage</label>
            <br />
            <input
              type="checkbox"
              id="canadian-bacon"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="canadian-bacon">Canadian Bacon</label>
            <br />
            <input
              type="checkbox"
              id="spicy-italian-sausage"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="spicy-italian-sausage">Spicy Italian Sausage</label>
            <br />
            <input
              type="checkbox"
              id="grilled-chicken"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="grilled-chicken">Grilled Chicken</label>
            <br />
            <input
              type="checkbox"
              id="onions"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="onions">Onions</label>
            <br />
            <input
              type="checkbox"
              id="green-pepper"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="green-pepper">Green Pepper</label>
          </div>
          <div className="row">
            <input
              type="checkbox"
              id="diced-tomatos"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="diced-tomatos">Diced Tomatos</label>
            <br />
            <input
              type="checkbox"
              id="black-olives"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="black-olives">Black Olives</label>
            <br />
            <input
              type="checkbox"
              id="roasted-garlic"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="roasted-garlic">Roasted Garlic</label>
            <br />
            <input
              type="checkbox"
              id="artichoke-hearts"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="artichoke-hearts">Artichoke Hearts</label>
            <br />
            <input
              type="checkbox"
              id="three-cheese"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="three-cheese">Three Cheese</label>
            <br />
            <input
              type="checkbox"
              id="pineapple"
              name="toppings"
              onChange={arrChangeHandler}
            />
            <label htmlFor="pineapple">Pineapple</label>
            <br />
            <input
              type="checkbox"
              id="extra-cheese"
              name="toppings"
              onChange={arrChangeHandler}
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
          <label className="switch">
            <input type="checkbox" onClick={toggleChangeHandler} />
            <span className="slider"></span>
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
          min="0"
          max="10"
          value={formValue.quantity}
          onChange={onChangeHandler}
        />

        <button disabled={disabled} className="subButton" name="button">
          {/* Add to Order */}
          Submit Order
        </button>
      </div>
    </form>
  );
}
