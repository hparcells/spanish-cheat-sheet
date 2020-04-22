import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';
import ConjugationTable from '../components/ConjugationTable/ConjugationTable';
import ConjugationTableWrapper from '../components/ConjugationTableWrapper';

function ConjugationPresent() {
  return (
    <CheatSheet title='Conjugation: Present'>
      <p>The present tense is used to say things like, "I run," "they eat," or "we drink."</p>
      <p>
        There are three different sets of conjugations for each of the three types of verbs. Verbs
        that end in -ar, -er, or -ir.
      </p>

      <ConjugationTableWrapper>
        <ConjugationTable
          title='-ar Verbs'
          yo='-o'
          tu='-as'
          ud='-a'
          nos='-amos'
          vos='-áis'
          uds='-an'
        />
        <ConjugationTable
          title='-er Verbs'
          yo='-o'
          tu='-es'
          ud='-e'
          nos='-emos'
          vos='-eis'
          uds='-en'
        />
        <ConjugationTable
          title='-ir Verbs'
          yo='-o'
          tu='-es'
          ud='-e'
          nos='-imos'
          vos='-ís'
          uds='-en'
        />
      </ConjugationTableWrapper>

      <p>
        To conjugate a verb to the present tense, remove the -ar, -er, or -ir ending, and replace it
        with the appropriate ending above.
      </p>
    </CheatSheet>
  );
}

export default ConjugationPresent;
