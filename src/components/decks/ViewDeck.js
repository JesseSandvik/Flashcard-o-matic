import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { readDeck } from '../../utils/api';
import CardList from '../cards/CardList';
import CreateButton from '../buttons/CreateButton';
import Deck from './Deck';

export default function ViewDeck() {
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
                    <li className="breadcrumb-item active" aria-current="page">{currentDeck.name}</li>
                </ol>
            </nav>
            <h2 className="p-2">View Deck</h2>
            <Deck deck={currentDeck} currentPage={"ViewDeck"} />
            <div className="p-5">
                <h3>Cards</h3>
                <CreateButton routePath={`/decks/${deckId}/cards/new`} buttonFunction={"Card"} />
            </div>
            <CardList deck={currentDeck} cards={currentDeck.cards} />
        </>
    );
};