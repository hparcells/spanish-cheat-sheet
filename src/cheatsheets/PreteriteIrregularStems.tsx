import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';
import ConjugationTable from '../components/ConjugationTable/ConjugationTable';
import ConjugationTableWrapper from '../components/ConjugationTableWrapper';

function PreteriteIrregularStems() {
  return (
    <CheatSheet title='Preterite: Irregular Stems'>
      <p>
        <u>Some verbs</u>, when conjugated to the preterite{' '}
        <u>will have a different stem and a different set of endings</u>. These verbs are:
      </p>
      <ul>
        <li>
          <strong>andar</strong> will have the <strong>anduv-</strong> stem.
        </li>
        <li>
          <strong>estar</strong> will have the <strong>estuv-</strong> stem.
        </li>
        <li>
          <strong>tener</strong> will have the <strong>tuv-</strong> stem.
        </li>
        <li>
          <strong>caber</strong> will have the <strong>cup-</strong> stem.
        </li>
        <li>
          <strong>haber</strong> will have the <strong>hub-</strong> stem.
        </li>
        <li>
          <strong>poder</strong> will have the <strong>pud-</strong> stem.
        </li>
        <li>
          <strong>poner</strong> will have the <strong>pus-</strong> stem.
        </li>
        <li>
          <strong>saber</strong> will have the <strong>sup-</strong> stem.
        </li>
        <li>
          <strong>hacer</strong> will have the <strong>hic-</strong> stem.
        </li>
        <li>
          <strong>querer</strong> will have the <strong>quis-</strong> stem.
        </li>
        <li>
          <strong>venir</strong> will have the <strong>vin-</strong> stem.
        </li>
      </ul>

      <ConjugationTableWrapper>
        <ConjugationTable
          title='All (Above) Verbs'
          yo='-e'
          tu='-iste'
          ud='-o'
          nos='-imos'
          vos='-isteis'
          uds='-ieron'
        />
      </ConjugationTableWrapper>

      <p>
        Some special <u>stems end in a "v"</u> and those verbs will have a similar, but different
        set of endings. The difference being that <u>the "i" is dropped from the Uds. ending</u>.
        These verbs are:
      </p>
      <ul>
        <li>
          <strong>traer</strong> will have the <strong>traj-</strong> stem.
        </li>
        <li>
          <strong>traducir</strong> will have the <strong>traduj-</strong> stem.
        </li>
        <li>
          <strong>producir</strong> will have the <strong>produj-</strong> stem.
        </li>
        <li>
          <strong>decir</strong> will have the <strong>dij-</strong> stem.
        </li>
        <li>
          <strong>conducir</strong> will have the <strong>conduj-</strong> stem.
        </li>
      </ul>

      <ConjugationTableWrapper>
        <ConjugationTable
          title='All Verbs (j Ending Roots)'
          yo='-e'
          tu='-iste'
          ud='-o'
          nos='-imos'
          vos='-isteis'
          uds='-eron'
        />
      </ConjugationTableWrapper>
    </CheatSheet>
  );
}

export default PreteriteIrregularStems;
