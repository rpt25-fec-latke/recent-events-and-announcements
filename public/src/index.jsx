import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

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
      <div>
        Hello
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('eventsAndAnnouncements'));
