import React from 'react';
import Card from './Card';

export default function CardList(props) {

    const { deck } = props;

    if (deck.cards) {
        return (
            deck.cards.map((card) => (
                <div className="container p-2" key={card.id}>
                    <Card card={card} deck={deck} />
                </div>
            ))
        )
    };
    return <p>There are no cards in this deck.</p>
};