import React, { useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { StartPage } from './components/StartPage/StartPage';
import { Game } from './components/Game/Game';
import { GameOver } from './components/GameOver/GameOver';

export const App = () => {
  const [benefit, setBenefit] = useState(0);

  const totalBenefit = (benefitAfterAnswer) => {
    setBenefit(benefitAfterAnswer);
  };

  return (
    <Switch>
      <Route
        path="/game/:questionId"
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

      <Route path="/" exact>
        <StartPage />
      </Route>
    </Switch>
  );
};
