import React from "react";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

function Pizza(props) {
  return (
    <div>
      <img src={props.photo} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photo="../public/starter/pizzas/prosciutto.jpg"
        price={18}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photo="../public/starter/pizzas/salamino.jpg"
        price={15}
      />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1
        style={{
          color: "orangered",
          fontSize: "48px",
          textTransform: "uppercase",
        }}
      >
        Taps Pizzaria
      </h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = hour > 8 && hour < 18;
  console.log(hour, open);

  return (
    <footer>{new Date().toLocaleTimeString()}. We're currenly open!</footer>
  );
}
