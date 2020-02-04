import React from 'react';

import classes from './App.module.scss';

import ConjugationPresent from '../../cheatsheets/ConjugationPresent';
import ConjugationFuture from '../../cheatsheets/ConjugationFuture';
import ConjugationPresentProgressive from '../../cheatsheets/ConjugationPresentProgressive';
import ConjugationPreterite from '../../cheatsheets/ConjugationPreterite';

const cheatSheets = [
  ConjugationPresent,
  ConjugationFuture,
  ConjugationPresentProgressive,
  ConjugationPreterite
];

function App() {
  return (
    <div className={classes.root}>
      <div
        style={{
          padding: '10px',
          backgroundColor: '#a40000',
          border: '5px dashed #640000'
        }}
      >
        Warning! This site is a huge work in progress, so a lot of things may be misspelled, incorrect, or missing.
      </div>

      <h1>Cheat Sheets</h1>

      {
        cheatSheets.map((CheatSheet, index) => {
          return (
            <div key={index} style={{ marginBottom: '20px' }}>
              <CheatSheet />
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
