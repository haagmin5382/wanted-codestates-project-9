import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Matches from "./Matches";
import KartRecord from "./KartRecord";
import TrackTable from "./TrackTable";
import KartTable from "./KartTable";
import { ConatinerTitle } from "../FlexBoxContent/TotalScore";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const Container = styled.div`
  margin-top: 30px;
`;
const TrackOrCartSpan = styled.button`
  background-color: #ebebeb;
  color: #a1a1a1;
  width: 100px;
  height: 50px;
  border: none;
  cursor: pointer;

  &.checked {
    background-color: #fff;
    color: #07f;
    border-bottom: 2px solid #07f;
  }
`;

const UserRecordConatiner = styled.div`
  border: 1px solid #f2f2f2;
  width: 430px;
  height: 600px;
  margin-right: 10px;
  background-color: #fff;
`;

const RecordContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ChartTitle = styled.p`
  color: #1f334a;
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 10px;
  span {
    color: #a1a1a1;
  }
`;

const TableContainer = styled.div`
  margin-top: 20px;
  height: 235px;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
  border-top: 1px solid #f2f2f2;
  font-size: 13px;
  text-align: center;
  & table {
    width: 100%;
    & thead {
      width: 312px;
      line-height: 45px;
      font-size: 13px;
      background-color: #fbfbfb;
      & tr {
        display: table-row;
        background-color: #fbfbfb;
        line-height: 45px;
        & th {
          background-color: #fbfbfb;
        }
      }
    }
  }
  & tbody {
    & tr {
      height: 45px;
      & td {
        font-size: 13px;
        vertical-align: middle;
      }
    }
  }
`;

// 컴포넌트
const UserRecord = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        },
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        reverse: false,
      },
    },
    responsive: true,

    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
      title: {
        display: false,
        position: "top",
        text: "코리아 제주 오름 다운힐 기록분포",
      },
    },
  };
  const labels = [1, 2, 3, 4, 5, 6, 7, 8];

  const data = {
    labels: ["순위", "순위", "순위", "순위", "순위", "순위", "순위", "순위"],
    datasets: [
      {
        label: "순위",
        data: [5, 8, 2, 4, 5, 4, 1, 3], // 순위 그래프
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const menu = ["트랙", "카트"];
  const [currentMenu, setCurrentMenu] = useState(0);
  const [matches, setmatches] = useState([]);
  const [trackName, setTrackName] = useState("");
  const [currentTab, setCurrentTab] = useState(0);
  const userInfo = useSelector((state) => state.data);
  useEffect(() => {
    if (Object.keys(userInfo).length >= 1) {
      setmatches(userInfo.matches[0].matches);
    }
  }, [userInfo]);

  const result = {};

  matches.forEach((match) => {
    result[match.trackId] = (result[match.trackId] || 0) + 1;
  });
  // console.log(matches);
  const matchTimesArr = Object.entries(result).sort((a, b) => {
    return b[1] - a[1];
  });
  // console.log(matches);

  const kart = {};

  matches.forEach((match) => {
    kart[match.player.kart] = (kart[match.player.kart] || 0) + 1;
  });

  const kartArr = Object.entries(kart).sort((a, b) => {
    return b[1] - a[1];
  });
  return (
    <Container>
      {menu.map((el, index) => {
        return (
          <TrackOrCartSpan
            key={index}
            onClick={() => setCurrentMenu(index)}
            className={currentMenu === index ? "checked" : null}
          >
            {el}
          </TrackOrCartSpan>
        );
      })}
      <RecordContent>
        <UserRecordConatiner>
          <ConatinerTitle>
            <div>
              <span>{currentMenu === 0 ? "트랙" : "카트"}</span> 전적
            </div>
            <div>평균 상위</div>
          </ConatinerTitle>
          <ChartTitle>
            {currentMenu === 0 ? (
              <div>
                {trackName} <span>기록분포</span>
              </div>
            ) : null}
          </ChartTitle>
          {currentMenu === 0 ? (
            <Line options={options} data={data} />
          ) : (
            <KartRecord kartInfo={kartArr[0]} />
          )}
          <TableContainer>
            <table>
              <thead>
                {currentMenu === 0 ? (
                  <tr>
                    <th>선택</th>
                    <th>트랙</th>
                    <th>횟수</th>
                    <th>승률</th>
                    <th>기록</th>
                    <th>상위</th>
                  </tr>
                ) : (
                  <tr>
                    <th>선택</th>
                    <th>카트</th>
                    <th>횟수</th>
                    <th>승률</th>
                    <th>리타율</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {currentMenu === 0
                  ? matchTimesArr.map((arr, idx) => {
                      return (
                        <TrackTable
                          key={idx}
                          matchAndTrack={arr}
                          Boolean={currentTab === idx ? true : false}
                          matches={matches}
                          setCurrentTab={setCurrentTab}
                          index={idx}
                          setTrackName={setTrackName}
                        />
                      );
                    })
                  : kartArr.map((kart, index) => {
                      return (
                        <KartTable key={index} kart={kart} matches={matches} />
                      );
                    })}
              </tbody>
            </table>
          </TableContainer>
        </UserRecordConatiner>
        <div>
          {matches.map((match, index) => (
            <Matches match={match} key={index} />
          ))}
        </div>
      </RecordContent>
    </Container>
  );
};

export default UserRecord;
