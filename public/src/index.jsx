import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import GlobalStyle from './styled/globalStyles.js';

import {
  RecentEventsAnnouncements,
  REAContainer,
  REATitleBar,
  REATitle,
  REAViewAllButton,
  REAItemsContainer,
  REARefreshBar,
} from './styled';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsAndAnnouncementsData: [],
      eventsAndAnnouncementsPhotos: [],
    };
  }

  componentDidMount() {
    const fullUrl = window.location.href;
    const id = fullUrl.indexOf('?id=') !== -1 ? fullUrl.slice(fullUrl.indexOf('?id=') + 4) : 1;

    $.ajax({
      method: 'GET',
      url: `/events_and_announcements/?id=${id}`,
      success: (data) => {
        this.setState({
          eventsAndAnnouncementsData: data.data,
          eventsAndAnnouncementsPhotos: data.pictures,
        });
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
        <REAContainer>
          <REATitleBar>
            <REATitle>Recent Events &#38; Announcements</REATitle>
            <REAViewAllButton>View All</REAViewAllButton>
          </REATitleBar>
          <REAItemsContainer>
            <div>Hello</div>
            <div>-there-</div>
            <div>friend</div>
          </REAItemsContainer>
          <REARefreshBar>
            <div>Button-</div>
            <div>here</div>
          </REARefreshBar>
        </REAContainer>
      </RecentEventsAnnouncements>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('eventsAndAnnouncements'));
