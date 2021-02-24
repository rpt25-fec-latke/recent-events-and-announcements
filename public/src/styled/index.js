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
  padding-bottom: 5px;
`;

export const REARefreshBar = styled.div`
  display: flex;
`;

export const REARefreshIcon = styled.img`
  height: 17px;
  width: 17px;
  padding-top: 7px;
  margin-right: 10px;
`;

export const RAERefreshButton = styled.div`
  border: solid 1px rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  font-size: 12px;
  font-family: "Motiva Sans", Arial, Helvetica, sans-serif;
  cursor: pointer;
  padding: 5px 15px;
  &:hover {
    border: solid 1px white;
  }
`;

//----------------------------------------
// RE & A Item styled
//----------------------------------------

export const REAItemOuterContainer = styled.div`
  position: relative;
  max-height: 256px;
  &:hover .inner_container {
    -webkit-transform: scale(0.99);
    filter: blur(2px) brightness(0.5);
    z-index: -1;
  }
  &:hover .hover_text {
    opacity: 1;
    z-index: 1;
  }
`;

export const REAItemInnerContainer = styled.div`
  background-image: url(${({ url }) => { return "'" + url + "'"; }});
  width: 304px;
  height: 256px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 2px;
  box-shadow: 0 0 10px 1px black;
  transition: 0.1s;
`;

export const REABottomInfoSection = styled.div`
  position: relative;
  z-index: 1;
  opacity: 0.97;
  height: 61px;
  top: 172px;
  padding: 12px;
  background-color: #483d36;
  box-sizing: content-box;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
`;

export const REAType = styled.div`
  font-size: 15px;
  color: white;
  line-height: 19px;
  margin-bottom: 4px;
  font-family: "Motiva Sans", Arial, Helvetica, sans-serif;
`;

export const READate = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  font-family: "Motiva Sans", Arial, Helvetica, sans-serif;
`;

export const REAHoverTextContainer = styled.div`
  position: relative;
  color: white;
  padding: 15px;
  opacity: 0;
  cursor: pointer;
  bottom: 250px;
  transition: .3s;
`;

export const REAHoverTextType = styled.div`
  color: #389cff;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 12px;
  font-family: "Motiva Sans", Arial, Helvetica, sans-serif;
`;

export const REAHoverTextMessage = styled.div`
  font-size: 14px;
  overflow-wrap: break-word;
  letter-spacing: 1px;
  line-height: 17px;
  font-family: "Motiva Sans", Arial, Helvetica, sans-serif;
`;
