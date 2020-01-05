import React from 'react';
import SiteListItemContainer from '../containers/SiteListItemContainer';

export default function SiteList({ siteUUIDs }) {
  // hook up getting display name from here
  const items = siteUUIDs.map(siteUUID => (
    <SiteListItemContainer key={siteUUID} siteUUID={siteUUID} />
  ));

  return (
    <>
      <ol>{items}</ol>
    </>
  );
}
