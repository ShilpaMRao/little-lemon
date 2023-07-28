import React from "react";
import CardItems from "./CardItems";
import "../../../little-lemon/src/css_files/Cards.css";
import "../../../little-lemon/src/css_files/Button.css";
import { menuCards } from "../menuItems/menuitems";

// function createData(path, src, label, textheading, price, text) {
//   return { path, src, label, textheading, price, text };
// }

// const menuCards = [
//   createData(
//     "/menu",
//     "greek salad.jpg",
//     "Greek Salad",
//     "Greek Salad",
//     "$12.99",
//     "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with garlic and olive oil."
//   ),
//   createData(
//     "/menu",
//     "bruschetta.jpg",
//     "Bruschetta",
//     "Bruschetta",
//     "$5.99",
//     "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with garlic and olive oil."
//   ),
//   createData(
//     "/menu",
//     "lemon dessert.jpg",
//     "Lemon Dessert",
//     "Lemon Dessert",
//     "$5.00",
//     "This comes straight from grandma's receipe book, every last ingredient has been sourced and is as authentic as can be imagined."
//   ),
// ];

function Cards() {
  return (
    <div className="cards">
      <div className="cards-header">
        <h1>This Week's Specials!</h1>
        {/* <button className="order-now">Order Now</button> */}
      </div>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            {menuCards.map((menucard) => (
              <CardItems
                path={menucard.path}
                src={menucard.src}
                label={menucard.label}
                textheading={menucard.textheading}
                price={menucard.price}
                text={menucard.text}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
