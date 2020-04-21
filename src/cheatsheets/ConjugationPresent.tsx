import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';

import conjugationTableClasses from '../styles/conjugation-table.module.scss';

function ConjugationPresent() {
  return (
    <CheatSheet title='Conjugation: Present'>
      <p>The present tense is used to say things like, "I run," "they eat," or "we drink."</p>
      <p>
        There are three different sets of conjugations for each of the three types of verbs. Verbs
        that end in -ar, -er, or -ir.
      </p>

      <div className={conjugationTableClasses.tableWrapper}>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>-ar Verbs</th>
            </tr>
            <tr>
              <td>-o</td>
              <td>-amos</td>
            </tr>
            <tr>
              <td>-as</td>
              <td>-áis</td>
            </tr>
            <tr>
              <td>-a</td>
              <td>-an</td>
            </tr>
          </tbody>
        </table>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>-er Verbs</th>
            </tr>
            <tr>
              <td>-o</td>
              <td>-emos</td>
            </tr>
            <tr>
              <td>-es</td>
              <td>-éis</td>
            </tr>
            <tr>
              <td>-e</td>
              <td>-en</td>
            </tr>
          </tbody>
        </table>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>-ir Verbs</th>
            </tr>
            <tr>
              <td>-o</td>
              <td>-imos</td>
            </tr>
            <tr>
              <td>-es</td>
              <td>-ís</td>
            </tr>
            <tr>
              <td>-e</td>
              <td>-en</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        To conjugate a verb to the present tense, remove the -ar, -er, or -ir ending, and replace it
        with the appropriate ending above.
      </p>
    </CheatSheet>
  );
}

export default ConjugationPresent;
