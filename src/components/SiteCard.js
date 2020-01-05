import React from 'react';

export default function SiteCard({ site }) {
  const { displayName } = site;
  return <li>{displayName}</li>;
}
