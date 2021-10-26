import React from "react";
import { Route, Switch } from 'react-router-dom';
import CreateCard from '../components/cards/CreateCard';
import CreateDeck from '../components/decks/CreateDeck';
import EditCard from '../components/cards/EditCard';
import EditDeck from '../components/decks/EditDeck';
import HomePage from './HomePage';
import NotFound from './NotFound';
import StudyDeck from '../components/decks/StudyDeck';
import ViewDeck from '../components/decks/ViewDeck';

export default function Routes() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </ Route>
        <Route exact path="/decks/new">
          <CreateDeck />
        </Route>
        <Route exact path="/decks/:deckId">
          <ViewDeck />
        </Route>
        <Route exact path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route exact path="/decks/:deckId/study">
          <StudyDeck />
        </Route>
        <Route exact path="/decks/:deckId/cards/new">
          <CreateCard />
        </Route>
        <Route exact path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>
        <Route>
          <NotFound />
        </ Route>
      </ Switch>
    </>
  );
};
