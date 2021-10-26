import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createDeck } from '../../utils/api';
import Form from '../../utils/Form';

export default function CreateDeck() {
    const initialDeckState = {
        name: "",
        description: "",
    };

    const history = useHistory();

    const [ deck, setDeck ] = useState({...initialDeckState});

    const createDeckChangeHandler = ({ target }) => {
        setDeck({
            ...deck,
            [target.name]: target.value,
        });
    };

    const createDeckCancelHandler = (event) => {
        event.preventDefault();
        history.push("/");
    }

    const createDeckSubmitHandler = (event) => {
        event.preventDefault();
        createDeck(deck)
            .then((response) => {
                setDeck({...initialDeckState});
                history.push(`/decks/${response.id}`);
        });
    };

    return (
        <div className="container p-2">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>
            <Form
                formTitle={`Create A New Deck`}
                changeHandler={createDeckChangeHandler}
                cancelHandler={createDeckCancelHandler}
                submitHandler={createDeckSubmitHandler}
                htmlForOne={`createDeckName`}
                formLabelOne={`Name`}
                formPlaceholderOne={`The name of the deck`}
                formNameOne={`name`}
                htmlForTwo={`createDeckDescription`}
                formLabelTwo={`Description`}
                formPlaceholderTwo={`A brief description of the deck`}
                formNameTwo={`description`}
            />
        </div>
    );
};