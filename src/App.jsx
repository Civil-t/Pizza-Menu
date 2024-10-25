import React from "react";
import "./index.css";
import Card from "./CHALLENGE1-ProfileCard/card";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "..//public/starter/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "..//public/starter/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "..//public/starter/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "..//public/starter/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "..//public/starter/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "..//public/starter/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <Card />
    //  <div className="container ">
    //   <Header />
    //   <Menu />
    //   <Footer />
    // </div>
  );
}

export default App;

function Pizza({ pizzaObj }) {
  // {pizzaObj} = props destructured

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {" "}
      {/* conditional rendering Classes 👆 */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </li>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <p>
        Auth Zimbabwean cuisine 😂😂😂 <br /> wasara wasara woza lazo
      </p>

      <h2>Menu</h2>

      {/* - unordered list mapping pizza data array to Pizza component then passing props to it as an object 
      - conditional rendering using tenary operator if pizzas are available  */}

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>No pizzas available come back later</p>
      )}

      {/*<Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photo="../public/starter/pizz  as/prosciutto.jpg"
        price={18}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photo="../public/starter/pizzas/salamino.jpg"
        price={15}
      />*/}
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
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(hour, open);

  // Conditional rendering using the && short circuit operator
  return <footer>{isOpen && <Order close={closeHour} />}</footer>;
}
function Order(props) {
  return (
    <div className="order">
      <p>We're currenly open! until {props.close}:00</p>
      <button className="btn">Order</button>
    </div>
  );
}
