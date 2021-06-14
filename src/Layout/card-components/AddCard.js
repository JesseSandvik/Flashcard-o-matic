import React, {useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { createCard, readDeck } from '../../utils/api';

function AddCard(){
    const [ deck, setDeck ] = useState([]);
    const [ front, setFront ] = useState("");
    const [ back, setBack ] = useState("");

    const history = useHistory();
    const { deckId } = useParams();

    useEffect(() => {
        async function deckRender() {
            try {
                const response = await readDeck(deckId);
                setDeck(response);
            } catch (error) {
                console.log(error);
            }
        }
        deckRender();
    }, [deckId]);

    const saveCardHandler = (event) => {
        event.preventDefault();
        createCard(deckId, {front, back});
        setFront("");
        setBack("");
        history.go(`/decks/${deck.id}`);
    }

    const doneCardHandler = (event) => {
        event.preventDefault();
        history.push(`/decks/${deck.id}`);
    }

    if (deck) {
    return (
        <div className="add_card">
            <div aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </div>
            <div className="container">
            <h2>{deck.name}: Add Card</h2>
            <form onSubmit={saveCardHandler}>
            <div className="row">
                <div className="col">
                    <div>
                <label htmlFor="add_card_front">Front</label>
                </div>
                <textarea
                required
                rows="4" cols="40"
                placeholder="Front side of card"
                name="add_card_front"
                type="text"
                onChange={(event) => setFront(event.target.value)}
                value={front}
                />
                </div>
                <div className="col">
                <div>
                <label htmlFor="add_card_back">Back</label>
                </div>
                <textarea
                required
                rows="4" cols="40"
                placeholder="Back side of card"
                name="add_card_back"
                type="text"
                onChange={(event) => setBack(event.target.value)}
                value={back}
                />
                </div>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                    <div className="p-1">
                <button className="btn btn-secondary"onClick={doneCardHandler}>Cancel</button>
                </div>
                <div className="p-1">
                <button className="btn btn-primary" type="submit">Save</button>
                </div>
                </div>
                </div>
            </form>
            </div>
        </div>
    )
    };
}

export default AddCard;