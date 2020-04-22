import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';
import ConjugationTable from '../components/ConjugationTable/ConjugationTable';
import ConjugationTableWrapper from '../components/ConjugationTableWrapper';

function ConjugationImperfect() {
  return (
    <CheatSheet title='Conjugation: Imperfect'>
      <p>
        Similar to the preterite, the imperfect is used to describe things that had happened. More
        specifically, things that you were doing (progressive) or something you used to do.
      </p>

      <ConjugationTableWrapper>
        <ConjugationTable
          title='-ar Verbs'
          yo='-aba'
          tu='-abas'
          ud='-aba'
          nos='-ábamos'
          vos='-abais'
          uds='-aban'
        />
        <ConjugationTable
          title='-er and -ir Verbs'
          yo='-ía'
          tu='-ías'
          ud='-ía'
          nos='-íamos'
          vos='-íais'
          uds='-ían'
        />
      </ConjugationTableWrapper>

      <p>
        To conjugate a verb to the future tense, remove the -ar, -er, or -ir ending, and replace it
        with the appropriate ending above.
      </p>
      <p>
        You must{' '}
        <u>include a clarifier for the first person singular and third person singular forms</u>,
        because they share the same ending.
      </p>

      <h2 style={{ textAlign: 'center' }}>Irregulars</h2>
      <ConjugationTableWrapper>
        <ConjugationTable
          title='ir'
          yo='iba'
          tu='ibas'
          ud='iba'
          nos='íbamos'
          vos='ibais'
          uds='iban'
        />
        <ConjugationTable
          title='ser'
          yo='era'
          tu='eras'
          ud='era'
          nos='éramos'
          vos='erais'
          uds='eran'
        />
        <ConjugationTable
          title='ver'
          yo='veía'
          tu='veías'
          ud='veía'
          nos='veíamos'
          vos='veíais'
          uds='veían'
        />
      </ConjugationTableWrapper>
    </CheatSheet>
  );
}

export default ConjugationImperfect;
