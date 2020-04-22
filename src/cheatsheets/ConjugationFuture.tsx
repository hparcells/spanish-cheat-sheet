import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';
import ConjugationTable from '../components/ConjugationTable/ConjugationTable';
import ConjugationTableWrapper from '../components/ConjugationTableWrapper';

function ConjugationFuture() {
  return (
    <CheatSheet title='Conjugation: Future'>
      <p>
        The future tense is used to say things that you will do. There is only one set of
        conjugation endings for all verbs.
      </p>

      <ConjugationTableWrapper>
        <ConjugationTable
          title='All Verbs'
          yo='-é'
          tu='-ás'
          ud='-á'
          nos='-emos'
          vos='-éis'
          uds='-án'
        />
      </ConjugationTableWrapper>

      <p>
        To conjugate a verb to the future tense, remove the -ar, -er, or -ir ending, and replace it
        with the appropriate ending above.
      </p>
      <p>You may have to use a different stem if your verb is irregular.</p>

      <h2 style={{ textAlign: 'center' }}>Irregulars</h2>
      <p>
        Some verbs have an <u>irregular stem</u> that needs to be used instead of the infinitive's
        stem.
      </p>
      <ul>
        <li>caber = cabr-</li>
        <li>decir = dir-</li>
        <li>hacer = har-</li>
        <li>poder = podr-</li>
        <li>poner = pondr-</li>
        <li>querer = querr-</li>
        <li>saber = sabr-</li>
        <li>salir = saldr</li>
        <li>tener = tendr-</li>
        <li>valer = valdr-</li>
        <li>venir = vendr-</li>
      </ul>
    </CheatSheet>
  );
}

export default ConjugationFuture;
