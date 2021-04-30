import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';
import ConjugationTable from '../components/ConjugationTable/ConjugationTable';
import ConjugationTableWrapper from '../components/ConjugationTableWrapper';

function IndirectObjectPronouns() {
  return (
    <CheatSheet title='Indirect Object Pronouns'>
      <p>
        The <u>Indirect Object</u> tells us where the direct object is going. The indirect object
        answers the question "to whom/for whom" the action of the verb is performed.
      </p>
      <p>
        <u>Indirect Object Pronouns</u> take the place of the indirect object. The indirect object
        pronoun comes <strong>before the conjugated verb</strong>.
      </p>

      <ConjugationTableWrapper>
        <ConjugationTable
          title='Indirect Object Pronouns'
          yo='me'
          tu='te'
          ud='le'
          nos='nos'
          vos='os'
          uds='les'
        />
      </ConjugationTableWrapper>
    </CheatSheet>
  );
}

export default IndirectObjectPronouns;
