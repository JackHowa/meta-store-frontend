import React, { useState } from 'react';

export default function SiteInput({ handleSubmit }) {
  const [newSiteName, setNewSiteName] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(newSiteName);
        setNewSiteName('');
      }}
    >
      <input
        type="text"
        value={newSiteName}
        onChange={e => setNewSiteName(e.target.value)}
      />
    </form>
  );
}
