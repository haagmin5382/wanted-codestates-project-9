import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Track } from "../../../constants/Track";
import { Kart } from "../../../constants/Kart";
const MatchesContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Match = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  width: 850px;
  height: 100px;
  margin-bottom: 5px;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  background: ${(props) =>
    props.rank === "1" ? "rgba(0,119,255,.05)" : "white"};
`;

const PlayTime = styled.div`
  width: 150px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;

const Rank = styled.div`
  width: 140px;
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
  text-align: left;
  color: ${(props) => (props.rank === "1" ? "#07f" : "#1f334a")};
`;

const Map = styled.div`
  width: 150px;
  font-weight: 400;
  text-align: center;
`;

const Cart = styled.div`
  width: 150px;
  font-weight: 400;
  text-align: center;
`;

const Record = styled.div`
  width: 150px;
  font-weight: 400;
  text-align: center;
`;
const DetailMenu = styled.div`
  position: absolute;
  right: 20px;
  /* border: 2px solid black; */
`;

const Matches = ({ match }) => {
  // console.log(match);
  const trackName = Track.filter((track) => track.id === match.trackId)[0].name;
  const kartName = Kart.filter((kart) => kart.id === match.player.kart)[0].name;
  const matchRecord = (match.player.matchTime / 1000).toFixed(2);
  const days = match.endTime
    .split("T")[0]
    .split("-")
    .map((el) => Number(el)); // 연,월,일
  const time = match.endTime
    .split("T")[1]
    .split(":")
    .map((el) => Number(el)); // 시간,분
  // console.log(new Date().getFullYear());
  const timeGab =
    (new Date().getTime() -
      new Date(days[0], days[1] - 1, days[2], time[0], time[1]).getTime()) /
    1000 /
    60;

  return (
    <MatchesContainer>
      <Match rank={match.player.matchRank}>
        <PlayTime>
          {timeGab / 60 / 24 >= 1
            ? Math.floor(timeGab / 60 / 24) + "일 전"
            : null}
          {timeGab / 60 >= 1 && timeGab / 60 / 24 < 1
            ? Math.floor(timeGab / 60) + "시간 전"
            : null}
          {timeGab / 60 < 1 && timeGab / 60 / 24 < 1
            ? Math.floor(timeGab) + "분 전"
            : null}
        </PlayTime>
        <Rank rank={match.player.matchRank}>
          #
          {Number(match.player.matchRank) < 8 &&
          Number(match.player.matchRank) > 0
            ? match.player.matchRank + "/" + match.playerCount
            : "리타이어"}
        </Rank>
        <Map>{trackName}</Map>
        <Cart>{kartName}</Cart>
        <Record>
          {Math.floor(matchRecord / 60)}'
          {`${Math.floor(matchRecord - 60 * Math.floor(matchRecord / 60))}`
            .length === 1
            ? "0" + Math.floor(matchRecord - 60 * Math.floor(matchRecord / 60))
            : Math.floor(matchRecord - 60 * Math.floor(matchRecord / 60))}
          '{`${matchRecord}`.split(".")[1]}
        </Record>
        <DetailMenu>
          <FontAwesomeIcon icon={faCaretDown} />
        </DetailMenu>
      </Match>
    </MatchesContainer>
  );
};

export default Matches;
