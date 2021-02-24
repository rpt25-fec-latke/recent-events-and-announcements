import React from 'react';

import { REAItemOuterContainer, REAItemInnerContainer, REABottomInfoSection, REAType, READate, REAHoverTextContainer, REAHoverTextType, REAHoverTextMessage } from '../styled';

const EventAnnouncementItem = ({ data: { type, announcementDate, description }, photo }) => {
  const date = new Date(announcementDate);
  const weekday = date.toLocaleString('default', { weekday: 'short' });
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  const day = date.toLocaleString('default', { day: 'numeric' });
  const time = date.toLocaleString('default', { hour: 'numeric', minute: 'numeric', hour12: true });
  console.log(time);
  return (
    <REAItemOuterContainer>
      <REAItemInnerContainer className="inner_container" url={photo}>
        <REABottomInfoSection>
          <REAType>{type}</REAType>
          <READate>{`${weekday}, ${month} ${day}, ${year} ${time} PST`}</READate>
        </REABottomInfoSection>
      </REAItemInnerContainer>
      <REAHoverTextContainer className="hover_text">
        <REAHoverTextType>{type}</REAHoverTextType>
        <REAHoverTextMessage>{description}</REAHoverTextMessage>
      </REAHoverTextContainer>
    </REAItemOuterContainer>
  );
};

export default EventAnnouncementItem;
