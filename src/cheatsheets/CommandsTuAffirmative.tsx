import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';

function CommandsTu() {
  return (
    <CheatSheet title='Tú Commands: Affirmative'>
      <p>
        Tú commands are used when you are telling someone who you are familiar with to do something.
      </p>

      <p>
        To form an affirmative tú command, simply{' '}
        <u>conjugate a verb into its third person present form.</u> Some verbs do not follow this
        pattern and are <u>irregular</u>. Those are:
      </p>

      <ul>
        <li>
          <strong>venir</strong>: ven
        </li>
        <li>
          <strong>decir</strong>: di
        </li>
        <li>
          <strong>salir</strong>: sal
        </li>
        <li>
          <strong>hacer</strong>: haz
        </li>
        <li>
          <strong>tener</strong>: ten
        </li>
        <li>
          <strong>ir</strong>: ve
        </li>
        <li>
          <strong>poner</strong>: pon
        </li>
        <li>
          <strong>ser</strong>: sé
        </li>
      </ul>

      <h2 style={{ textAlign: 'center' }}>With Direct Object Pronouns</h2>

      <p>
        Direct Object Pronouns get <u>attached</u> to the end of the conjugated verb.
      </p>
    </CheatSheet>
  );
}

export default CommandsTu;
