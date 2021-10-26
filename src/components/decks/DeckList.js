import React, { useEffect, useState } from 'react';
import { listDecks } from '../../utils/api';
import Deck from './Deck';

export default function DeckList() {

    const [ decks, setDecks ] = useState([]);

    useEffect(() => {
      setDecks([]);
        async function loadDecksFromAPI() {
            try {
              const response = await listDecks();
              setDecks(response);
            } catch (error) {
              console.error(error);
            }
        }
        loadDecksFromAPI();
    }, []);

    const listOfDecks = decks.map((deck) => <li key={deck.id} className="p-2"><Deck deck={deck} currentPage={"DeckList"} /></li>);

    if (decks) {
        return (
            <>
                <h2>Available Decks</h2>
                <ul className="container list-unstyled">{listOfDecks}</ul>
            </>
        );
    }
    return <p>There are no decks yet.</p>
};