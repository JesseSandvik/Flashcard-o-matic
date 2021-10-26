import React from 'react';
import { Link } from 'react-router-dom';
import { deleteDeck } from '../../utils/api';
import DeleteButton from '../buttons/DeleteButton';
import EditButton from '../buttons/EditButton';

export default function Deck(props) {

    const { deck, currentPage } = props;
    const { cards } = deck;

    return (
        <div className="container-fluid">
            <div className="card p-4">
                <div className="row justify-content-between">
                    <h5 className="card-title font-weight-bold">{deck.name}</h5>
                    <p className="text-secondary">{cards.length} Cards</p>
                </div>
                <p className="card-text">{deck.description}</p>
                <div className="row">
                    {currentPage === "DeckList" && (
                        <div className="p-1">
                            <Link to={`/decks/${deck.id}`} className="btn btn-secondary">View</Link>
                        </div>
                    )}
                    {currentPage === "ViewDeck" && <EditButton
                                                        routePath={`/decks/${deck.id}/edit`}
                                                        buttonFunction={"Deck"}
                                                   />
                    }
                    <div className="p-1">
                        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
                    </div>
                    <DeleteButton
                        id={deck.id}
                        delete={deleteDeck}
                        buttonFunction={"Deck"}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
};