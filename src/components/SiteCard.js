import React from 'react';
import { CardStyles } from '../styles';

export default function SiteCard({ displayName, categoryNames = [] }) {
  return (
    <CardStyles>
      {displayName}
      <ul>
        {categoryNames.map(categoryName => (
          <li>{categoryName}</li>
        ))}
      </ul>
    </CardStyles>
  );
}
