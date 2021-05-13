import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';

function CommandsTuNegative() {
  return (
    <CheatSheet title='Tú Commands: Negative'>
      <p>
        Negative tú commands are used to tell someone you are familiar with to not do something.
      </p>
      <p>
        To form a negative tú command, you first{' '}
        <u>conjugate a verb into the first person present</u> form then <u>drop the -o</u> and{' '}
        <u>
          add -as for -er verbs <strong>OR</strong> add -es for -ar verbs
        </u>
        . Finally you add "no" in front of the verb.
      </p>
      <p>
        Any "c", "g", or "z" in -car, -gar, and -zar verbs change to "qu", "gu", and "c"
        respectively.
      </p>

      <h2 style={{ textAlign: 'center' }}>Irregulars</h2>

      <ul>
        <li>
          <strong>no saber</strong>: no sepas
        </li>
        <li>
          <strong>no ser</strong>: no seas
        </li>
        <li>
          <strong>no ir</strong>: no vayas
        </li>
        <li>
          <strong>no dar</strong>: no des
        </li>
        <li>
          <strong>no estar</strong>: no estés
        </li>
      </ul>

      <h2 style={{ textAlign: 'center' }}>With Pronouns</h2>

      <p>
        Pronouns with negative commands are always placed after the "no" and before the verb, with
        indirect object pronouns always coming before direct object pronouns.
      </p>
    </CheatSheet>
  );
}

export default CommandsTuNegative;
