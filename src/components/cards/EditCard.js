import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { updateCard, readDeck } from '../../utils/api';
import Form from '../../utils/Form';

export default function EditCard() {
    const initialCardState = {
        front: "",
        back: "",
        deckId: 0,
    };

    const initialDeckState = {
        id: 0,
        name: "",
        description: "",
        cards: [],
    };

    const { cardId, deckId } = useParams();
    const history = useHistory();

    const [ currentCard, setCurrentCard ] = useState({...initialCardState});
    const [ currentDeck, setCurrentDeck ] = useState({...initialDeckState});

    useEffect(() => {
        async function loadCurrentDeckFromAPI() {
            try {
                const response = await readDeck(deckId);
                setCurrentDeck(response);
                setCurrentCard(response.cards.find(card => card.id.toString() === cardId));
            } catch (error) {
                console.error(error);
            }
        };
        loadCurrentDeckFromAPI();
    }, [cardId, deckId]);

    const updateCardChangeHandler = ({ target }) => {
        setCurrentCard({
            ...currentCard,
            [target.name]: target.value,
        });
    };

    const updateCardCancelHandler = (event) => {
        event.preventDefault();
        history.push(`/decks/${deckId}`)
    };

    const updateCardSubmitHandler = (event) => {
        event.preventDefault();
        updateCard(currentCard)
        .then(() => {
            setCurrentCard({...initialCardState});
            history.push(`/decks/${deckId}`);
        });
    };

    if (currentDeck && currentCard) {
        return (
            <>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>Deck {currentDeck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Edit Card {currentCard.id}</li>
                    </ol>
                </nav>
                <Form
                    formTitle={`${currentDeck.name}: Edit Card ${currentCard.id}`}
                    changeHandler={updateCardChangeHandler}
                    cancelHandler={updateCardCancelHandler}
                    submitHandler={updateCardSubmitHandler}
                    htmlForOne={`createCardFront`}
                    formLabelOne={`Front`}
                    formPlaceholderOne={currentCard.front}
                    formNameOne={`front`}
                    formValueOne={currentCard.front}
                    htmlForTwo={`createCardBack`}
                    formLabelTwo={`Back`}
                    formPlaceholderTwo={currentCard.back}
                    formNameTwo={`back`}
                    formValueTwo={currentCard.back}
                />
            </>
        );
    };
    return <p>Loading...</p>
};