import React from "react";

const Cards = props => {
    return (
        <div className="card-list">
            {props.cards.map(card => (
                <div className="card" key={card.id}>
                    <h2>{card.name}</h2>
                    <p>{card.email}</p>
                    <p>{card.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;
