import React, { useState } from 'react';
import SiteList from './SiteList';
import SiteInput from './SiteInput';

export default function ListManager() {
  const [siteIds, setSiteIds] = useState(['22', '33']);

  return (
    <>
      <SiteList siteIds={siteIds} />
      <SiteInput handleSubmit={id => setSiteIds(siteIds.concat(id))} />
    </>
  );
}
