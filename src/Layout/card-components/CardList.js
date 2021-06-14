import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Card from './Card';

import { deleteCard } from '../../utils/api';

function CardList({ deck, cards }) {
    const history = useHistory();

    if (cards) {
        return (
        cards.map((card) => (
        <div className="container p-2" key={card.id}>
            <div className="card">
                <div className="card-body">
                <Card card={card} />
                <div className="container">
                <div className="row justify-content-center">
                    <div className="row">
                        <div className="p-1">
                                <Link className="btn btn-info" to={`/decks/${deck.id}/cards/${card.id}/edit`}>Edit Card</Link>
                                </div>
                                <div className="p-1">
                                <button className="btn btn-danger"
                                        onClick={() => {
                                        if(window.confirm("Delete this card? You will not be able to recover it.")) {
                                          deleteCard(card.id);
                                          history.go(`/decks/${deck.id}`);
                                }}}>Delete Card</button>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                            </div>
        )))};
        return <p>No Cards In This Deck</p>
};

export default CardList;