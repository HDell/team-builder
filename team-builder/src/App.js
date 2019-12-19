import React, { useState } from 'react';
import Form from './components/Form';
import Cards from './components/Card';
import './App.css';

function App() {
    const [cards, setCards] = useState([
        {
            id: 1,
            name: "Handell Desulme",
            email: "handelldesulme51@gmail.com",
            role: "Computer Science/Web Development Student"
        }
    ]);
    const addNewCard = card => {
        const newCard = {
            id: Date.now(),
            name: card.name,
            email: card.email,
            role: card.role
        };
        setCards([...cards, newCard]);
    };
    return (
        <div className="App">
            <h1>My Team</h1>
            {/* we are going to pass a function down as a prop */}
            <Form addNewCard={addNewCard} />
            <Cards cards={cards} />
        </div>
    );
}

export default App;
