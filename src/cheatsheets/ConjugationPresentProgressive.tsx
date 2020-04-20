import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';

import conjugationTableClasses from '../styles/conjugation-table.module.scss';

function ConjugationPresentProgressive() {
  return (
    <CheatSheet title='Conjugation: Present Progressive'>
      <p>The present progressive is used to describe what you are doing right now. You can use this to say things like, "I am running," or "We are dancing."</p>
      <p>There is only one conjugation ending per type of verb.</p>
      <p><u>Before every verb</u> conjugated verb in the present progressive, <u>you must include a form of estar</u>.</p>

      <div className={conjugationTableClasses.tableWrapper}>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>-ar Verbs</th>
            </tr>
            <tr>
              <td colSpan={2}>-ando</td>
            </tr>
          </tbody>
        </table>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>-er and -ir Verbs</th>
            </tr>
            <tr>
              <td colSpan={2}>-iendo</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={conjugationTableClasses.tableWrapper}>
        <table className={conjugationTableClasses.conjugationTable}>
          <tbody>
            <tr>
              <th colSpan={2}>Estar</th>
            </tr>
            <tr>
              <td>estoy</td>
              <td>estamos</td>
            </tr>
            <tr>
              <td>estás</td>
              <td>estáis</td>
            </tr>
            <tr>
              <td>está</td>
              <td>están</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>To conjugate a verb to the future tense, remove the -ar, -er, or -ir ending, and replace it with the appropriate ending above.</p>
      <p><u>If the stem of an infinitive ends in a vowel, you add -yendo</u> to the end of the stem, instead of -ando or -iendo.</p>

      <h2 style={{ textAlign: 'center' }}>Pronouns</h2>
      <p>When using pronouns, <u>use accented -ándo or -iéndo</u> endings.</p>
    </CheatSheet>
  );
}

export default ConjugationPresentProgressive;
