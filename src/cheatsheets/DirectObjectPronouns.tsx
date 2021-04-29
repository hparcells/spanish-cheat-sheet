import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';
import ConjugationTable from '../components/ConjugationTable/ConjugationTable';
import ConjugationTableWrapper from '../components/ConjugationTableWrapper';

function DirectObjectPronouns() {
  return (
    <CheatSheet title='Direct Object Pronouns'>
      <p>
        <u>Direct Objects</u> is the object that receives the action of the verb. It is usually the
        answer to the question "who?" or "what?" with regard to what the subject of the sentence is
        doing.
      </p>
      <p>
        <u>Direct Object Pronouns</u> take the place of the noun. We use them so we don't have to
        repeat ourselves. When there is <u>one verb</u>, the pronoun comes{' '}
        <strong>before the verb</strong>. If there are <u>two verbs</u> is can come{' '}
        <strong>before the conjugated verb</strong> or{' '}
        <strong>attached to the infinitive or participial</strong>.
      </p>

      <ConjugationTableWrapper>
        <ConjugationTable
          title='Direct Object Pronouns'
          yo='me'
          tu='te'
          ud='lo / la'
          nos='nos'
          vos='os'
          uds='los / las'
        />
      </ConjugationTableWrapper>
    </CheatSheet>
  );
}

export default DirectObjectPronouns;
