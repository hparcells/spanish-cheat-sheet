import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';
import ConjugationTable from '../components/ConjugationTable/ConjugationTable';
import ConjugationTableWrapper from '../components/ConjugationTableWrapper';

function ConjugationPreterite() {
  return (
    <CheatSheet title='Conjugation: Preterite'>
      <p>
        The preterite is used to describe what you previously did like, "I sang," or "I listened,""
        and is used when an <u>action</u> verb is conjugated, and does not match any of the use
        cases listed for the imperfect.
      </p>

      <ConjugationTableWrapper>
        <ConjugationTable
          title='-ar Verbs'
          yo='-é'
          tu='-aste'
          ud='-ó'
          nos='-amos'
          vos='-asteis'
          uds='-aron'
        />
        <ConjugationTable
          title='-er and -ir Verbs'
          yo='-í'
          tu='-iste'
          ud='-ió'
          nos='-imos'
          vos='-isteis'
          uds='-ieron'
        />
      </ConjugationTableWrapper>

      <p>
        To conjugate a verb to the preterite, remove the -ar, -er, or -ir ending, and replace it
        with the appropriate ending above.
      </p>
      <p>Some verbs in the preterite are irregular and are conjugated differently.</p>

      <h2 style={{ textAlign: 'center' }}>Stem Changing</h2>
      <p>
        <u>-ar and -er verbs do not stem change</u> in the preterite. Only{' '}
        <u>-ir verbs in the third person stem change</u>.
      </p>
      <p>
        The only two stem changes in the preterite are <u>e -> i</u> and <u>o -> u</u>.
      </p>

      <h2 style={{ textAlign: 'center' }}>-car, -gar, -zar Verbs</h2>
      <p>
        Infinitives <u>ending in -car</u> will have their <u>"c" changed to "qu"</u> when conjugated{' '}
        <u>in the first person singular form</u>.
      </p>
      <p>
        Infinitives <u>ending in -gar</u> will have their <u>"g" changed to "gu"</u> when conjugated{' '}
        <u>in the first person singular form</u>.
      </p>
      <p>
        Infinitives <u>ending in -zar</u> will have their <u>"z" changed to "c"</u> when conjugated{' '}
        <u>in the first person singular form</u>.
      </p>
    </CheatSheet>
  );
}

export default ConjugationPreterite;
