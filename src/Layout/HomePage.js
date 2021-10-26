import React from 'react';
import CreateButton from '../components/buttons/CreateButton';
import DeckList from '../components/decks/DeckList';

export default function HomePage() {
    
    
    return (
        <>
            <CreateButton 
                routePath={"/decks/new"}
                buttonFunction={"Deck"}
            />
            <DeckList />
        </>
    );
};