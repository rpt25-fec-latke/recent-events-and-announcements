import React from 'react';

import EventAnnouncementItem from './EventAnnouncementItem.jsx';

import { REAItemsContainer } from '../styled';

const EventAnnouncementList = ({ eventsAndAnnouncementsData, eventsAndAnnouncementsPhotos }) => (
  <REAItemsContainer>
    {eventsAndAnnouncementsData.map((item, i) => { return <EventAnnouncementItem key={i} data={item} photo={eventsAndAnnouncementsPhotos[i]} />; })}
  </REAItemsContainer>
);

export default EventAnnouncementList;
