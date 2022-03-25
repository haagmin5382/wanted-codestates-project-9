import React from "react";
import { Track } from "../../../constants/Track";
import { Kart } from "../../../constants/Kart";

const TrackTable = ({
  matchAndTrack,
  matches,
  setTrackName,
  Boolean,
  setCurrentTab,
  index,
}) => {
  const trackName = Track.filter((track) => track.id === matchAndTrack[0])[0]
    .name;
  //   const kartName = Kart.filter((kart) => kart.id === match.player.kart)[0].name;
  const trackMatch = matches.filter(
    (match) => match.trackId === matchAndTrack[0]
  );
  const winRate = Math.round(
    (trackMatch.filter((obj) => obj.player.matchWin === "1").length /
      trackMatch.length) *
      100
  );

  const matchRecord = (trackMatch[0].player.matchTime / 1000).toFixed(2);

  const clickTrack = (trackName) => {
    setTrackName(trackName);
    setCurrentTab(index);
  };
  return (
    <tr>
      <td>
        <input
          type="radio"
          className="radio"
          checked={Boolean}
          onChange={() => setCurrentTab(index)}
          onClick={(e) => {
            // e.target.checked = Boolean;
            clickTrack(trackName);
          }}
        />
      </td>
      <td>{trackName}</td>
      <td>{matchAndTrack[1]}</td>
      <td>{winRate}%</td>
      <td>
        {Math.floor(matchRecord / 60)}'
        {`${Math.floor(matchRecord - 60 * Math.floor(matchRecord / 60))}`
          .length === 1
          ? "0" + Math.floor(matchRecord - 60 * Math.floor(matchRecord / 60))
          : Math.floor(matchRecord - 60 * Math.floor(matchRecord / 60))}
        '{`${matchRecord}`.split(".")[1]}
      </td>
      <td>4%</td>
    </tr>
  );
};

export default TrackTable;
