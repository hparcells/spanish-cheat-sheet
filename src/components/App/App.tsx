import React from 'react';

import classes from './App.module.scss';

import ConjugationPresent from '../../cheatsheets/ConjugationPresent';
import ConjugationFuture from '../../cheatsheets/ConjugationFuture';
import ConjugationPresentProgressive from '../../cheatsheets/ConjugationPresentProgressive';
import ConjugationPreterite from '../../cheatsheets/ConjugationPreterite';
import ConjugationImperfect from '../../cheatsheets/ConjugationImperfect';

const cheatSheets = [
  ConjugationPresent,
  ConjugationFuture,
  ConjugationPresentProgressive,
  ConjugationPreterite,
  ConjugationImperfect
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

      <div style={{ marginBottom: '2em' }}>
        <h1>Cheat Sheets</h1>
        <p>Click the header of any of the cheat sheets to expand/collapse it.</p>
      </div>

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
