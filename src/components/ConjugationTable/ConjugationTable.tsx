import React from 'react';

import classes from './ConjugationTable.module.scss';

function ConjugationTable({
  title,
  yo,
  tu,
  ud,
  nos,
  vos,
  uds
}: {
  title: string;
  yo: string;
  tu: string;
  ud: string;
  nos: string;
  vos: string;
  uds: string;
}) {
  return (
    <table className={classes.conjugationTable}>
      <tbody>
        <tr>
          <th colSpan={2}>{title}</th>
        </tr>
        <tr>
          <td>{yo}</td>
          <td>{nos}</td>
        </tr>
        <tr>
          <td>{tu}</td>
          <td>{vos}</td>
        </tr>
        <tr>
          <td>{ud}</td>
          <td>{uds}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ConjugationTable;
