import React from "react";

const Cards = props => {
    return (
        <div className="card-list">
            {props.cards.map(card => (
                <div className="card" key={card.id}>
                    <h2>{card.title}</h2>
                    <p>{card.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;
