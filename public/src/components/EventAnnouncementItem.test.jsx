import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import EventAnnouncementItem from './EventAnnouncementItem.jsx';

configure({ adapter: new Adapter() });

describe('EventAnnouncementItem component', () => {
  it('Should correctly render the event type', () => {
    const fakeProps = {
      type: 'Contest',
    };

    const component = shallow(<EventAnnouncementItem data={fakeProps} />);

    expect(component.find('.event_type').text()).toEqual('Contest');
  });

  it('Should correctly render the event date', () => {
    const fakeProps = {
      announcementDate: new Date('2021-02-13T13:22:00.000'),
    };

    const component = shallow(<EventAnnouncementItem data={fakeProps} />);

    expect(component.find('.event_date').text()).toEqual('Sat, February 13, 2021 1:22 PM PST');
  });
});
