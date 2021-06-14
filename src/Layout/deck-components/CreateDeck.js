import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createDeck } from '../../utils/api';

function CreateDeck() {
    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");

    const history = useHistory();

    const newDeckSubmitHandler = (event) => {
        event.preventDefault();
        const deck = { name, description };
        createDeck(deck)
        .then(response => {
            history.push(`/decks/${response.id}`);
        })
        setName("");
        setDescription("");
    };

    const cancelNewDeckHandler = (event) => {
        event.preventDefault();
        setName("");
        setDescription("");
        history.push("/");
    }

    return (
        <div className="create_deck">
            <div aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </div>
            <div className="container">
            <h2>Create Deck</h2>
                <form onSubmit={newDeckSubmitHandler}>
                    <div className="row">
                    <div className="col">
                        <div>
                    <label htmlFor="new_deck_name">Name</label>
                    </div>
                    <input
                    className="p-1"
                    required
                    placeholder="Deck Name"
                    name="new_deck_name"
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    />
                    <div className="pt-5">
                        <span className="p-1">
                    <button className="btn btn-secondary" onClick={cancelNewDeckHandler}>Cancel</button>
                    </span>
                    <button className="btn btn-primary" type="submit">Save</button>
                    </div>
                    </div>
                    <div className="col">
                    <div>
                    <label htmlFor="new_deck_description">Description</label>
                    </div>
                    <textarea
                    className="p-1"
                    rows="5" cols="50"
                    required
                    placeholder="Brief description of the deck"
                    name="new_deck_description"
                    type="text"
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                    />
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateDeck;