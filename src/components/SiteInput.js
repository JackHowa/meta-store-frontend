import React, { useState } from 'react';
import CATEGORIES from '../constants/CATEGORIES';

export default function SiteInput({ createSite }) {
  const [newSiteName, setNewSiteName] = useState('');
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        createSite(newSiteName, selectedCategoryIds);
        setNewSiteName('');
        setSelectedCategoryIds([]);
      }}
    >
      <input
        type="text"
        value={newSiteName}
        onChange={e => setNewSiteName(e.target.value)}
      />
      {CATEGORIES.uuids.map(uuid => {
        const targetCategory = CATEGORIES.entities[uuid];

        return (
          <label key={uuid} htmlFor={uuid}>
            {targetCategory.displayName}

            <input
              type="checkbox"
              id={uuid}
              checked={selectedCategoryIds.includes(uuid)}
              // todo: think this is bad practice
              onChange={() =>
                setSelectedCategoryIds(selectedCategoryIds.concat(uuid))
              }
            />
          </label>
        );
      })}
    </form>
  );
}
