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
        setCard({ name: "", email: "", role: "" });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={card.name}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                onChange={handleChanges}
                value={card.email}
            />
            <label htmlFor="role">Role</label>
            <textarea
                id="role"
                name="role"
                onChange={handleChanges}
                value={card.role}
            />
            <button type="submit">Add Card</button>
        </form>
    );
};

export default CardForm;
