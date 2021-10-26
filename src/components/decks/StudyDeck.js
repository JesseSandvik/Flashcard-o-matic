import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { readDeck } from '../../utils/api';
import FlipCard from '../cards/FlipCard';

export default function StudyDeck() {
    const initialDeckState = {
        id: 0,
        name: "",
        description: "",
        cards: [],
    };

    const { deckId } = useParams();
    
    const [ currentDeck, setCurrentDeck ] = useState({...initialDeckState});
    
    useEffect(() => {
        async function loadCurrentDeckFromApi() {
            try {
                const response = await readDeck(deckId);
                setCurrentDeck(response);
            } catch (error) {
                console.error(error);
            }
        };
        loadCurrentDeckFromApi();
    }, [deckId]);

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{currentDeck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>
            <h2 className="p-2">Study: {currentDeck.name}</h2>
            <div className="card">
                <div className="card-body">
                    <FlipCard cards={currentDeck.cards} />
                </div>
            </div>
        </>
    );
};