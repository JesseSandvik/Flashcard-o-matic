import React, { useEffect, useState } from 'react';
import { listDecks } from '../../utils/api';
import CreateButton from '../buttons/CreateButton';
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
                <div className="p-5">
                  <CreateButton 
                    routePath={"/decks/new"}
                    buttonFunction={"Deck"}
                  />
                </div>
                <h2 className="p-2">Available Decks</h2>
                <ul className="container list-unstyled p-5">{listOfDecks}</ul>
            </>
        );
    }
    return (
      <>
        <h2>There are no decks yet.</h2>
        <p>Let's create one and get started!</p>
        <CreateButton 
          routePath={"/decks/new"}
          buttonFunction={"Deck"}
        />
      </>
    );
};