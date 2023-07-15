import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";
import { Button } from "./Button";
import "./Button.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards-header">
        <h1>This Week's Specials!</h1>
        <Button buttonStyle="btn--primary">Order Now</Button>
      </div>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItems
              path="/menu"
              src="greek salad.jpg"
              label="Greek Salad"
              textheading="Greek Salad"
              price="$12.99"
              text="The famous greek salad of crispy lettuce,peppers,olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons."
              ordernow="Order Now"
            />
            <CardItems
              path="/menu"
              src="bruschetta.jpg"
              label="Bruschetta"
              textheading="Bruschetta"
              price="$5.99"
              text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with garlic and olive oil."
              ordernow="Order Now"
            />
            <CardItems
              path="/menu"
              src="lemon dessert.jpg"
              label="Lemon Dessert"
              textheading="Lemon Dessert"
              price="$5.00"
              text="This comes straight from grandma's receipe book, every last ingredient has been sourced and is as authentic as can be imagined."
              ordernow="Order Now"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
