import React from 'react';

function ConjugationTableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {children}
    </div>
  );
}

export default ConjugationTableWrapper;
