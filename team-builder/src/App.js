import React, { useState } from 'react';
import Form from './components/Form';
import Cards from './components/Card';
import './App.css';

function App() {
    const [cards, setCards] = useState([
        {
            id: 1,
            title: "Happy little quote",
            body: "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
        }
    ]);
    const addNewCard = card => {
        const newCard = {
            id: Date.now(),
            title: card.title,
            body: card.body
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
