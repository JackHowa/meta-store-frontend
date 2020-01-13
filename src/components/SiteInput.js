import React, { useState } from 'react';
import { ButtonStyles, BigInputStyles, TextInputStyles } from '../styles';

export default function SiteInput({
  createSite,
  categoryEntities,
  categoryIDs,
}) {
  const [newSiteName, setNewSiteName] = useState('');
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);

  return (
    <BigInputStyles>
      <form
        onSubmit={e => {
          e.preventDefault();
          createSite(newSiteName, selectedCategoryIds);
          setNewSiteName('');
          setSelectedCategoryIds([]);
        }}
      >
        <div>
          <input
            className={TextInputStyles}
            type="text"
            value={newSiteName}
            onChange={e => setNewSiteName(e.target.value)}
          />
        </div>
        <div>
          {categoryIDs.map(id => {
            const targetCategory = categoryEntities[id];

            return (
              <div key={id}>
                <label htmlFor={id}>
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
              </div>
            );
          })}
        </div>
        <ButtonStyles type="submit">Add</ButtonStyles>
      </form>
    </BigInputStyles>
  );
}
