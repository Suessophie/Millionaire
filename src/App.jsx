import React, { useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { StartPage } from './StartPage';
import { Game } from './Game';
import { GameOver } from './GameOver';

export const App = () => {
  const [benefit, setBenefit] = useState(0);

  const totalBenefit = (benefitAfterAnswer) => {
    setBenefit(benefitAfterAnswer);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <StartPage />
      </Route>

      <Route
        path="/game"
        exact
      >
        <Game
          totalBenefit={totalBenefit}
        />
      </Route>

      <Route path="/gameover">
        <GameOver
          benefit={benefit}
        />
      </Route>
    </Switch>
  );
};
