import React from 'react';
import SiteCard from './SiteCard';

export default function SiteList({ siteIds }) {
  const items = siteIds.map(id => <SiteCard key={id} id={id} />);

  return (
    <>
      <ol>{items}</ol>
    </>
  );
}
