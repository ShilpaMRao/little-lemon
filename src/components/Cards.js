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
        <br />
        <br />
        <Button buttonStyle="btn--primary">Order Now</Button>
      </div>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItems
            //   src="greek-salad.jpg"
            //   textheading="Greek Salad"
            //   text="The famous greek salad of crispy lettuce,peppers,olives and our
            //   Chicago style feta cheese, garnished with crunchy garlic and
            //   rosemary croutons."
            //   label="Greek Salad"
            //   ordernow="Order Now"
            //   path="/menu"
            />
            <CardItems />
            <CardItems />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
