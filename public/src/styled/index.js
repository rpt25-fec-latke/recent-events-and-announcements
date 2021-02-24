import styled from 'styled-components';

// RE & A = Recent Events & Announcements

//----------------------------------------
// Parent RE & A styled
//----------------------------------------

export const RecentEventsAnnouncements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const REAContainer = styled.div`
  width:  616px;
`;

export const REATitleBar = styled.div`
  display: flex;
  background-image: url('https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png');
  background-position-x: 0%;
  background-position-y: 100%;
  background-repeat-x: no-repeat;
  background-repeat-y: no-repeat;
  padding-top: 2px;
  margin-bottom: 10px;
`;

export const REATitle = styled.h2`
  font-family: "Motiva Sans", Sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  letter-spacing: 2px;
  font-weight: normal;
  padding-top: 2px;
  padding-bottom: 4px;
  margin: 0px;
`;

export const REAViewAllButton = styled.div`
  margin-left: auto;
  order: 2;
  border: solid 1px rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  color: white;
  cursor: pointer;
  font-size: 11px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  height: 12px;
  &:hover {
    color: #66c0f4;
    border: solid 1px white;
  }
`;

export const REAItemsContainer = styled.div`
  display: flex;
`;

export const REARefreshBar = styled.div`
  display: flex;
`;

//----------------------------------------
// RE & A Item styled
//----------------------------------------
