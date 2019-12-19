import React, { useState } from "react";

const CardForm = props => {
    console.log("props", props);
    const [card, setCard] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        console.log(card);
        setCard({
            ...card,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewCard(card);
        setCard({ title: "", body: "", role: "" });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Title</label>
            <input
                id="title"
                type="text"
                name="title"
                onChange={handleChanges}
                value={card.title}
            />
            <label htmlFor="card">Card</label>
            <textarea
                id="card"
                name="body"
                onChange={handleChanges}
                value={card.body}
            />
            <button type="submit">Add Card</button>
        </form>
    );
};

export default CardForm;
