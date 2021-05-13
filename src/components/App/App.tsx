import React from 'react';

import classes from './App.module.scss';

import ConjugationPresent from '../../cheatsheets/ConjugationPresent';
import ConjugationFuture from '../../cheatsheets/ConjugationFuture';
import ConjugationPresentProgressive from '../../cheatsheets/ConjugationPresentProgressive';
import ConjugationPreterite from '../../cheatsheets/ConjugationPreterite';
import ConjugationImperfect from '../../cheatsheets/ConjugationImperfect';
import PreteriteIrregulars from '../../cheatsheets/PreteriteIrregulars';
import PreteriteIrregularStems from '../../cheatsheets/PreteriteIrregularStems';
import Possessive from '../../cheatsheets/Possessive';
import SerEstar from '../../cheatsheets/SerEstar';
import SaberConocer from '../../cheatsheets/SaberConocer';
import PorPara from '../../cheatsheets/PorPara';
import DirectObjectPronouns from '../../cheatsheets/DirectObjectPronouns';
import IndirectObjectPronouns from '../../cheatsheets/IndirectObjectPronouns';
import DoubleObjectPronouns from '../../cheatsheets/DoubleObjectPronouns';
import CommandsTuAffirmative from '../../cheatsheets/CommandsTuAffirmative';
import CommandsTuNegative from '../../cheatsheets/CommandsTuNegative';

const cheatSheets = [
  ConjugationPresent,
  ConjugationFuture,
  ConjugationPresentProgressive,
  ConjugationPreterite,
  ConjugationImperfect,
  PreteriteIrregulars,
  PreteriteIrregularStems,
  Possessive,
  SerEstar,
  SaberConocer,
  PorPara,
  DirectObjectPronouns,
  IndirectObjectPronouns,
  DoubleObjectPronouns,
  CommandsTuAffirmative,
  CommandsTuNegative
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
        <p>
          Warning! This site is a huge work in progress, so a lot of things may be misspelled,
          incorrect, or missing.
        </p>
        <small>
          If you found a mistake or would like to contribute, feel free to open and issue or pull
          request at{' '}
          <a href='https://github.com/hparcells/spanish-cheat-sheet/' style={{ color: 'white' }}>
            https://github.com/hparcells/spanish-cheat-sheet/
          </a>
          .
        </small>
      </div>

      <div style={{ marginBottom: '2em' }}>
        <h1>Cheat Sheets</h1>
        <p>Click the header of any of the cheat sheets to expand/collapse it.</p>
      </div>

      {cheatSheets.map((CheatSheet, index) => {
        return (
          <div key={index} style={{ marginBottom: '20px' }}>
            <CheatSheet />
          </div>
        );
      })}
    </div>
  );
}

export default App;
