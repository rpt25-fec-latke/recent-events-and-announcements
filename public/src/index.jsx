import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import GlobalStyle from './styled/globalStyles.js';

import {
  RecentEventsAnnouncements,
  RecentEventsAnnouncementsContainer,
  RecentEventsAnnouncementsTitleBar,
  RecentEventsAnnouncementsItemsContainer,
  RecentEventsAnnouncementsRefreshBar,
  RecentEventsAnnouncementsTitle,
} from './styled';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const fullUrl = window.location.href;
    const id = fullUrl.indexOf('?id=') !== -1 ? fullUrl.slice(fullUrl.indexOf('?id=') + 4) : 1;

    $.ajax({
      method: 'GET',
      url: `/events_and_announcements/?id=${id}`,
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  render() {
    return (
      <RecentEventsAnnouncements>
        <GlobalStyle />
        <RecentEventsAnnouncementsContainer>
          <RecentEventsAnnouncementsTitleBar>
            <RecentEventsAnnouncementsTitle>Recent Events &#38; Announcements</RecentEventsAnnouncementsTitle>
          </RecentEventsAnnouncementsTitleBar>
          <RecentEventsAnnouncementsItemsContainer>
            <div>Hello</div>
            <div>-there-</div>
            <div>friend</div>
          </RecentEventsAnnouncementsItemsContainer>
          <RecentEventsAnnouncementsRefreshBar>
            <div>Button-</div>
            <div>here</div>
          </RecentEventsAnnouncementsRefreshBar>
        </RecentEventsAnnouncementsContainer>
      </RecentEventsAnnouncements>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('eventsAndAnnouncements'));
