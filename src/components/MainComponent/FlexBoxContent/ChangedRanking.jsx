import React, { useEffect, useState } from "react";
import styled from "styled-components";
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

import { ConatinerTitle } from "./TotalScore";

const ChangedRankingConatiner = styled.div`
  border: 1px solid #f2f2f2;
  width: 430px;
  height: 266px;
  margin: 10px 10px 0 0;
  background-color: #fff;
`;

const ChangedRanking = () => {
  const userInfo = useSelector((state) => state.data);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (Object.keys(userInfo).length >= 1) {
      setMatches(userInfo.matches[0].matches.slice(0, 50));
    }
  }, [userInfo]);

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
    lineTension: 0.4,

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
        display: false,
      },
      y: {
        reverse: true,
        max: 8,

        ticks: {
          stepSize: 1,
        },
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
        text: "순위 변동",
      },
    },
  };

  const Rank = matches.map((obj) => Number(obj.player.matchRank));

  let totalScore = 0;
  if (Rank.length !== 0) {
    totalScore = Rank.filter((number) => number < 9 && 0 < number).reduce(
      (acc, cur) => {
        return acc + cur;
      },
      0
    );
  }
  const data = {
    labels: Rank,
    datasets: [
      {
        label: "순위",
        data: Rank.filter((number) => number < 9 && 0 < number), // 순위 그래프
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <ChangedRankingConatiner>
      <ConatinerTitle>
        <div>
          <span>순위변동</span> 추이
        </div>
        <div>
          최근 50경기
          <span>
            {(
              totalScore /
              Rank.filter((number) => number < 9 && 0 < number).length
            ).toFixed(2)}
            위
          </span>
        </div>
      </ConatinerTitle>
      <Line options={options} data={data} />
    </ChangedRankingConatiner>
  );
};

export default ChangedRanking;
