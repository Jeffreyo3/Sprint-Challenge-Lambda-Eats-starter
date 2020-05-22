import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Lambda Eats</h1>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>Help</button>
        </Link>
      </div>
    </header>
  );
}
