import React from 'react';
import { SiteListContainer, SiteCreationContainer } from '../containers';
import { AppStyles } from '../styles';

export default function ListManager() {
  return (
    <AppStyles>
      <SiteListContainer />
      <SiteCreationContainer />
    </AppStyles>
  );
}
