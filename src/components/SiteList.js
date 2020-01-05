import React from 'react';
import SiteListItemContainer from '../containers/SiteListItemContainer';

export default function SiteList({ siteIDs }) {
  const items = siteIDs.map(siteID => (
    <SiteListItemContainer key={siteID} siteID={siteID} />
  ));

  return (
    <>
      <ol>{items}</ol>
    </>
  );
}
