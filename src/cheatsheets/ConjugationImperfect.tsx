import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';

import conjugationTableClasses from '../styles/conjugation-table.module.scss';

function ConjugationImperfect() {
  return (
    <CheatSheet title='Conjugation: Imperfect'>
      <p>
        Similar to the preterite, the imperfect is used to describe things that had happened. More
        specifically, things that you were doing (progressive) or something you used to do.
      </p>

      <div className={conjugationTableClasses.tableWrapper}>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>-ar Verbs</th>
            </tr>
            <tr>
              <td>-aba</td>
              <td>-ábamos</td>
            </tr>
            <tr>
              <td>-abas</td>
              <td>-abais</td>
            </tr>
            <tr>
              <td>-aba</td>
              <td>-aban</td>
            </tr>
          </tbody>
        </table>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>-er and -ir Verbs</th>
            </tr>
            <tr>
              <td>-ía</td>
              <td>-íamos</td>
            </tr>
            <tr>
              <td>-ías</td>
              <td>-íais</td>
            </tr>
            <tr>
              <td>-ía</td>
              <td>-ían</td>
            </tr>
          </tbody>
        </table>
      </div>

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
      <div className={conjugationTableClasses.tableWrapper}>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>ir</th>
            </tr>
            <tr>
              <td>iba</td>
              <td>íbamos</td>
            </tr>
            <tr>
              <td>ibas</td>
              <td>ibais</td>
            </tr>
            <tr>
              <td>iba</td>
              <td>iban</td>
            </tr>
          </tbody>
        </table>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>ser</th>
            </tr>
            <tr>
              <td>era</td>
              <td>-éramos</td>
            </tr>
            <tr>
              <td>eras</td>
              <td>erais</td>
            </tr>
            <tr>
              <td>era</td>
              <td>eran</td>
            </tr>
          </tbody>
        </table>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>ver</th>
            </tr>
            <tr>
              <td>veía</td>
              <td>veíamos</td>
            </tr>
            <tr>
              <td>veías</td>
              <td>veíais</td>
            </tr>
            <tr>
              <td>veía</td>
              <td>veían</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CheatSheet>
  );
}

export default ConjugationImperfect;
