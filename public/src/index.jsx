import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import EventAnnouncementList from './components/EventAnnouncementList.jsx';
import GlobalStyle from './styled/globalStyles.js';

import {
  RecentEventsAnnouncements,
  REAContainer,
  REATitleBar,
  REATitle,
  REAViewAllButton,
  REAItemsContainer,
  REARefreshBar,
  REARefreshIcon,
  RAERefreshButton,
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
        console.log(data);
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
    const { eventsAndAnnouncementsData, eventsAndAnnouncementsPhotos } = this.state;
    let maxDate;
    let month;
    let day;

    if (eventsAndAnnouncementsData[0]) {
      maxDate = new Date(eventsAndAnnouncementsData[0].announcementDate);
      month = maxDate.toLocaleString('default', { month: 'short' });
      day = maxDate.toLocaleString('default', { day: 'numeric' });
    }

    return (
      <RecentEventsAnnouncements>
        <GlobalStyle />
        <REAContainer>
          <REATitleBar>
            <REATitle>Recent Events &#38; Announcements</REATitle>
            <REAViewAllButton>View All</REAViewAllButton>
          </REATitleBar>
          <REAItemsContainer>
            <EventAnnouncementList eventsAndAnnouncementsData={eventsAndAnnouncementsData} eventsAndAnnouncementsPhotos={eventsAndAnnouncementsPhotos.eventPics} />
          </REAItemsContainer>
          <REARefreshBar>
            <REARefreshIcon src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/refresh.png"></REARefreshIcon>
            <RAERefreshButton>{`See all updates (Latest: ${month} ${day})`}</RAERefreshButton>
          </REARefreshBar>
        </REAContainer>
      </RecentEventsAnnouncements>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('eventsAndAnnouncements'));
