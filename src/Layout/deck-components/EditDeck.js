import React, {useEffect, useState} from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { updateDeck, readDeck } from '../../utils/api';

function EditDeck() {
    const [ deck, setDeck ] = useState([]);
    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");

    const history = useHistory();
    const { deckId } = useParams();

    useEffect(() => {
        async function deckRender() {
            setDeck([]);
            try {
                const response = await readDeck(deckId);
                setDeck(response);
                setName(response.name);
                setDescription(response.description);
            }  catch (error) {
                console.log(error);
            }
        }
        deckRender();
    }, [deckId])
    
    const editSubmitHandler = (event) => {
        event.preventDefault();
        const updatedDeck = {
            ...deck,
            name,
            description
        }
        updateDeck(updatedDeck)
        .then(response => {
            setDeck(response);
            history.push(`/decks/${deck.id}`);
        })
    }

    const cancelEditDeckHandler = (event) => {
        event.preventDefault();
        history.push(`/decks/${deck.id}`);
    }

    if (deck) {
        return (
            <div className="edit_deck">
                <div aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
                    </ol>
                </div>
                <h2>Edit Deck</h2>
                <div className="container">
                <form onSubmit={editSubmitHandler}>
                <div className="row">
                    <div className="col">
                        <div>
                    <label htmlFor="edit_deck_name">Name</label>
                    </div>
                <input
                required
                name="edit_deck_name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                />
                <div className="pt-5">
                    <span className="p-1">
                        <button className="btn btn-secondary" onClick={cancelEditDeckHandler}>Cancel</button>
                        </span>
                        <button className="btn btn-primary" type="submit">Save</button>
                        </div>
                </div>
                <div className="col">
                <label htmlFor="edit_deck_description">Description</label>
                <textarea
                rows="5" cols="50"
                required
                name="edit_deck_description"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
                />
                </div>
                </div>
                </form>
                </div>
            </div>
        )
    };
}

export default EditDeck;