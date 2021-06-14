import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Deck from './Deck';

import { deleteDeck, listDecks } from '../../utils/api';

function DeckList() {
    const [decks, setDecks] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function decksFromApi() {
            setDecks([]);
            try {
                const response = await listDecks();
                setDecks(response);
            } catch (error) {
                console.log(error);
            }
        }
        decksFromApi();
    }, []);

    if (decks) {
       const decksToList = decks.map((deck) => (
    <section className="p-2" key={deck.id}>
       <div className="card">
            <div className="card-body">
            <Deck deck={deck} cards={deck.cards} />
            <br />
            <div className="container">
                <div className="row justify-content-between">
                    <div className="row">
                        <div className="p-1">
                            <Link to={`/decks/${deck.id}`} className="btn btn-secondary">View</Link>
                            </div>
                            <div className="p-1">
                                <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
                            </div>
                        </div>
                            <div className="p-1">
                                <button className="btn btn-danger"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            if (window.confirm("Delete this deck? You will not be able to recover it.")) {
                                                deleteDeck(deck.id);
                                                history.go(0);
                                            }}}
                                            >
                                            Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 
                    ));

                    return (
                    <main className="container">
                            <div>{decksToList}</div>
                    </main>
                )};
                    return <p>There are currently no decks</p>
};

export default DeckList;