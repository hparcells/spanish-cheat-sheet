import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';

import conjugationTableClasses from '../styles/conjugation-table.module.scss';

function ConjugationPreterite() {
  return (
    <CheatSheet title='Conjugation: Preterite'>
      <p>The preterite is used to describe what you previously did like, "I sang," or "I listened,"" and has different use cases than the imperfect tense."</p>

      <div className={conjugationTableClasses.tableWrapper}>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>-ar Verbs</th>
            </tr>
            <tr>
              <td>-é</td>
              <td>-amos</td>
            </tr>
            <tr>
              <td>-aste</td>
              <td>-asteis</td>
            </tr>
            <tr>
              <td>-ó</td>
              <td>-aron</td>
            </tr>
          </tbody>
        </table>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>-er and -ir Verbs</th>
            </tr>
            <tr>
              <td>-í</td>
              <td>-imos</td>
            </tr>
            <tr>
              <td>-iste</td>
              <td>-isteis</td>
            </tr>
            <tr>
              <td>-ió</td>
              <td>-ieron</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>To conjugate a verb to the preterite, remove the -ar, -er, or -ir ending, and replace it with the appropriate ending above.</p>
      <p>Some verbs in the preterite are irregular and are conjugated differently.</p>

      <h2 style={{ textAlign: 'center' }}>Stem Changing</h2>
      <p><u>-ar and -er verbs do not stem change</u> in the preterite. Only <u>-ir verbs in the third person stem change</u>.</p>
      <p>The only two stem changes in the preterite are <u>e -> i</u> and <u>o -> u</u>.</p>

      <h2 style={{ textAlign: 'center' }}>-car, -gar, -zar Verbs</h2>
      <p>Infinitives <u>ending in -car</u> will have their <u>"c" changed to "qu"</u> when conjugated <u>in the first person singlar form</u>.</p>
      <p>Infinitives <u>ending in -gar</u> will have their <u>"g" changed to "gu"</u> when conjugated <u>in the first person singlar form</u>.</p>
      <p>Infinitives <u>ending in -zar</u> will have their <u>"z" changed to "c"</u> when conjugated <u>in the first person singlar form</u>.</p>
    </CheatSheet>
  );
}

export default ConjugationPreterite;
