import React from 'react';
import { deleteCard } from '../../utils/api';
import DeleteButton from '../buttons/DeleteButton';
import EditButton from '../buttons/EditButton';

function Card(props){
    
if (props.card) {
    return (
        <div className="card p-4">
            <div className="row">
                <div className="col">
                    <h4 className="card-title font-weight-bold">Card Front</h4>
                    <p>{props.card.front}</p>
                </div>
                <div className="col">
                    <h4 className="card-title font-weight-bold">Card Back</h4>
                    <p>{props.card.back}</p>
                </div>
            </div>
            <div className="row">
                <EditButton
                    routePath={`/decks/${props.deck.id}/cards/${props.card.id}/edit`}
                    buttonFunction={"Card"}
                />
                <DeleteButton
                    id={props.card.id}
                    delete={deleteCard}
                    buttonFunction={"Card"}
                    currentPage={"Card"}
                />
            </div>
        </div>
    )};
};
export default Card;