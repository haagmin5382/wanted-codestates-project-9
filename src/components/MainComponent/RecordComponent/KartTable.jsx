import React from "react";
import { Kart } from "../../../constants/Kart";

const KartTable = ({ kart, matches }) => {
  const kartname = Kart.filter((obj) => obj.id === kart[0]);

  const kartMatches = matches.filter((obj) => obj.player.kart === kart[0]);

  const winRate = Math.round(
    (kartMatches.filter((match) => match.player.matchWin === "1").length /
      kartMatches.length) *
      100
  );
  const retireRate = Math.round(
    (kartMatches.filter((match) => match.player.matchRetired === "1").length /
      kartMatches.length) *
      100
  );

  return (
    <tr>
      <td>
        <input type="radio" />
      </td>
      <td>{kartname[0].name}</td>
      <td>{kart[1]}</td>
      <td>{winRate}%</td>
      <td>{retireRate}%</td>
    </tr>
  );
};

export default KartTable;
