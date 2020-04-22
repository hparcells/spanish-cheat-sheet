import React from 'react';

import CheatSheet from '../components/CheatSheet/CheatSheet';
import ConjugationTable from '../components/ConjugationTable/ConjugationTable';
import ConjugationTableWrapper from '../components/ConjugationTableWrapper';

function PreteriteIrregulars() {
  return (
    <CheatSheet title='Preterite: Irregulars'>
      <ConjugationTableWrapper>
        <ConjugationTable
          title='ser'
          yo='fui'
          tu='fuiste'
          ud='fue'
          nos='fuimos'
          vos='fuisteis'
          uds='fueron'
        />
        <ConjugationTable
          title='ir'
          yo='fui'
          tu='fuiste'
          ud='fue'
          nos='fuimos'
          vos='fuisteis'
          uds='fueron'
        />
        <ConjugationTable
          title='ver'
          yo='vi'
          tu='viste'
          ud='vio'
          nos='vimos'
          vos='visteis'
          uds='vieron'
        />
      </ConjugationTableWrapper>

      <h2 style={{ textAlign: 'center' }}>i -> y Verbs</h2>
      <p>
        The following verbs in the <u>third person change their i to a y</u>.
      </p>
      <ConjugationTableWrapper>
        <ConjugationTable
          title='leer'
          yo='leí'
          tu='leíste'
          ud='leyó'
          nos='leímos'
          vos='leísteis'
          uds='leyeron'
        />
        <ConjugationTable
          title='creer'
          yo='creí'
          tu='creíste'
          ud='creyó'
          nos='creímos'
          vos='creísteis'
          uds='creyeron'
        />
        <ConjugationTable
          title='caer'
          yo='caí'
          tu='caíste'
          ud='cayó'
          nos='caímos'
          vos='caísteis'
          uds='cayeron'
        />
        <ConjugationTable
          title='oír'
          yo='oí'
          tu='oíste'
          ud='oyó'
          nos='oímos'
          vos='oísteis'
          uds='oyeron'
        />
      </ConjugationTableWrapper>
    </CheatSheet>
  );
}

export default PreteriteIrregulars;
