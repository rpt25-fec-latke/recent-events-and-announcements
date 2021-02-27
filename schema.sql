DROP DATABASE IF EXISTS recent_events_and_announcements;

CREATE DATABASE recent_events_and_announcements;

USE recent_events_and_announcements;

CREATE TABLE events_and_announcements (
  eventId int NOT NULL AUTO_INCREMENT,
  gameId int NOT NULL,
  title varchar(50),
  type varchar(50),
  description varchar(1000),
  announcementDate datetime NOT NULL,
  PRIMARY KEY (eventId)
);
