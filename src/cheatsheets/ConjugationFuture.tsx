import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';

import conjugationTableClasses from '../styles/conjugation-table.module.scss';

function ConjugationFuture() {
  return (
    <CheatSheet title='Conjugation: Future'>
      <p>The future tense is used to say things that you will do. There is only one set of conjugation endings for all verbs.</p>

      <div className={conjugationTableClasses.tableWrapper}>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>All Verbs</th>
            </tr>
            <tr>
              <td>-é</td>
              <td>-emos</td>
            </tr>
            <tr>
              <td>-ás</td>
              <td>-éis</td>
            </tr>
            <tr>
              <td>-á</td>
              <td>-án</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>To conjugate a verb to the future tense, remove the -ar, -er, or -ir ending, and replace it with the appropriate ending above.</p>
      <p>You may have to use a different stem if your verb is irregular.</p>
    </CheatSheet>
  );
}

export default ConjugationFuture;
