import React, { useState } from 'react';

export default function SiteInput({
  createSite,
  categoryEntities,
  categoryIDs,
}) {
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
      {categoryIDs.map(id => {
        const targetCategory = categoryEntities[id];

        return (
          <label key={id} htmlFor={id}>
            {targetCategory.displayName}

            <input
              type="checkbox"
              id={id}
              checked={selectedCategoryIds.includes(id)}
              // todo: refactor to ensure this isn't reruning on render
              onChange={e => {
                if (e.target.checked) {
                  setSelectedCategoryIds(selectedCategoryIds.concat(id));
                } else {
                  // uncheck category
                }
              }}
            />
          </label>
        );
      })}
      <button type="submit">Add</button>
    </form>
  );
}
