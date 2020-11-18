import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { StartPage } from './StartPage';
import { Game } from './Game';
import { GameOver } from './GameOver';

export const App = () => (
  <Switch>
    <Route path="/" exact>
      <StartPage />
    </Route>

    <Route
      path="/game"
      exact
    >
      <Game />
    </Route>

    <Route path="/gameover">
      <GameOver />
    </Route>
  </Switch>
);
