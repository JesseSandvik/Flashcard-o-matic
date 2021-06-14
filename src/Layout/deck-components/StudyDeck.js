import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { readDeck } from '../../utils/api';
import FlipCard from '../card-components/FlipCard';

function StudyDeck() {
    const [ deck, setDeck ] = useState([]);
    const [ cards, setCards ] = useState([]);

    const { deckId } = useParams();

    useEffect(() => {
        async function deckRender() {
            setDeck([]);
            setCards([]);
            try {
            const response = await readDeck(deckId);
            setDeck(response);
            const { cards } = response;
            setCards(cards);
            } catch (error) {
                console.log(error);
            }
        }
        deckRender();
    }, [deckId]);

    if (deck && cards) {
        return (
            <div className="study_deck">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Study</li>
                    </ol>
                </nav>
                <h2 className="p-2">Study: {deck.name}</h2>
                <div className="card">
                    <div className="card-body">
                <FlipCard cards={cards} />
                </div>
                </div>
            </div>
        )
    }
}

export default StudyDeck;