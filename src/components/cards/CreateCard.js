import React, {useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { createCard, readDeck } from '../../utils/api';
import Form from '../../utils/Form';

export default function CreateCard(){
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

    const { deckId } = useParams();
    const history = useHistory();

    const [ currentCard, setCurrentCard ] = useState({...initialCardState});
    const [currentDeck, setCurrentDeck] = useState({...initialDeckState});
    
    useEffect(() => {
        async function loadCurrentDeckFromAPI() {
            try {
                const response = await readDeck(deckId);
                setCurrentDeck(response);
            } catch (error) {
                console.error(error);
            }
        };
        loadCurrentDeckFromAPI();
    }, [deckId]);

    const createCardChangeHandler = ({ target }) => {
        setCurrentCard({
            ...currentCard,
            [target.name]: target.value,
        });
    };

    const createCardCancelHandler = (event) => {
        event.preventDefault();
        history.push(`/decks/${deckId}`)
    };

    const createCardSubmitHandler = (event) => {
        event.preventDefault();
        createCard(deckId, currentCard)
        .then(() => {
            setCurrentCard({...initialCardState});
            history.push(`/decks/${deckId}`);
        });
    };

    if (currentDeck) {
        return (
            <>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${currentDeck.id}`}>{currentDeck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Create A New Card</li>
                    </ol>
                </nav>
                <Form
                    formTitle={`${currentDeck.name}: Create A New Card`}
                    changeHandler={createCardChangeHandler}
                    cancelHandler={createCardCancelHandler}
                    submitHandler={createCardSubmitHandler}
                    htmlForOne={`createCardFront`}
                    formLabelOne={`Front`}
                    formPlaceholderOne={`Front side of card`}
                    formNameOne={`front`}
                    htmlForTwo={`createCardBack`}
                    formLabelTwo={`Back`}
                    formPlaceholderTwo={`Back side of card`}
                    formNameTwo={`back`}
                />
            </>
        );
    };
    return <p>Loading...</p>
};