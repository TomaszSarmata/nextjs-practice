import React from 'react';
import Settings from './settings';
import HomeComponent from '../../components/HomeComponent';

export default function Dashboard() {
  return (
    <div>
      <HomeComponent></HomeComponent>
      <Settings />
    </div>
  );
}
