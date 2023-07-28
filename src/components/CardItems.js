import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItems(props) {
  const { path, src, label, textheading, price, text, ordernow } = props;
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={path}>
          <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" src={src} alt={label} />
          </figure>
          <div className="cards-item-info">
            <div className="cards-item-text-header-price">
              <h5 className="cards-item-text-header">{textheading}</h5>
              <h5 className="cards-item-text-price">{price}</h5>
            </div>
            <p className="cards-item-text">{text}</p>
            {/* <h6 className="cards-item-ordernow">{ordernow}</h6> */}
            <button className="order-now-card">Order Now</button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItems;
