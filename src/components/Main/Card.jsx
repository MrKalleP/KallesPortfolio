import React from "react";
import BokHandel from "../../assets/BokHandel.jpg";

import Foodapp from "../../assets/Foodapp.jpg";
import MemmoryGame from "../../assets/MemmoryGame.jpg";

function Card() {
  const cards = [
    {
      id: 1,
      name: "Bookstore",
      description:
        "We were given the task of making a website for a bookshop where they could display news and what will be published",
      img: BokHandel,
      link: "https://mrkallep.github.io/Bokhandel-Klar/",
    },
    {
      id: 2,
      name: "MemmoryGame",
      description:
        "We were given the task of making a website for a bookshop where they could display news and what will be published",
      img: MemmoryGame,
      link: "https://mrkallep.github.io/MemmoryGame/",
    },
    {
      id: 3,
      name: "Foodapp",
      description:
        "We were given the task of making a app for a restaurant where you could order from a tablet or phone at the restaurant",
      img: Foodapp,
      link: "https://mrkallep.github.io/RestaurangMobile/",
    },
  ];

  return (
    <div className="Project-Style">
      {cards.map((card) => (
        <div key={card.id} className="card-style">
          <img src={card.img} alt={card.name} />
          <h2 className="card-title">{card.name}</h2>
          <p className="card-text">{card.description}</p>
          <a className="link" href={card.link} rel="noopener noreferrer">
            Visit {card.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Card;

/* I use mapping over the array of cards to render individual cards. */
