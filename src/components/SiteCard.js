import React from 'react';

export default function SiteCard({ displayName, categoryNames = [] }) {
  return (
    <li>
      {displayName}
      <ul>
        {categoryNames.map(categoryName => (
          <li>{categoryName}</li>
        ))}
      </ul>
    </li>
  );
}
