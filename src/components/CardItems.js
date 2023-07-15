import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItems(props) {
  const { path, src, label, textheading, price, text, ordernow } = props;
  return (
    <>
      <li className="cards-item">
        {/* <Link className="cards-item-link" to="/menu"> */}
        <Link className="cards-item-link" to={path}>
          <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" src={src} alt={label} />
            {/* <img
              className="cards-item-img"
              src="greek salad.jpg"
              alt="greek salad"
            /> */}
          </figure>
          <div className="cards-item-info">
            <div className="cards-item-text-header-price">
              <h5 className="cards-item-text-header">{textheading}</h5>
              <h5 className="cards-item-text-price">{price}</h5>
            </div>
            <p className="cards-item-text">{text}</p>
            <h6 className="cards-item-ordernow">{ordernow}</h6>
            {/*  <div className="cards-item-text-header-price">
              <h5 className="cards-item-text-header">Greek Salad</h5>
              <h5 className="cards-item-text-price">$12.99</h5>
            </div>
            <p className="cards-item-text">
              The famous greek salad of crispy lettuce,peppers,olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <h6 className="cards-item-ordernow">Order a Delivery</h6> */}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItems;
