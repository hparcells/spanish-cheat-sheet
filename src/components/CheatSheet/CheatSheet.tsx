import React from 'react';

import classes from './CheatSheet.module.scss';

function CheatSheet({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <span>{title}</span>
      </div>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}

export default CheatSheet;
