import React, { useState } from 'react';

import classes from './CheatSheet.module.scss';

function CheatSheet({ title, children }: { title: string; children: React.ReactNode }) {
  const [expanded, setExpanded] = useState<boolean>(true);

  function handleExpandToggle() {
    setExpanded(!expanded);
  }

  return (
    <div className={classes.root}>
      <div className={classes.header} onClick={handleExpandToggle}>
        <span style={{ userSelect: 'none' }}>{title}</span>
      </div>

      {expanded ? <div className={classes.content}>{children}</div> : null}
    </div>
  );
}

export default CheatSheet;
