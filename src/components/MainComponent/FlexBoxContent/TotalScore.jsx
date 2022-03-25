import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRef } from "react";
import { useSelector } from "react-redux";

const TotalScoreConatiner = styled.div`
  border: 1px solid #f2f2f2;
  width: 430px;
  height: 266px;
  margin: 10px 10px 0 0;
  background-color: #fff;
`;

export const ConatinerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 40px;
  width: 400px;
  border-bottom: 1px solid #f2f2f2;
  margin-left: 15px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  span {
    margin-right: 5px;
    color: #07f;
  }
  &.borderTop {
    span {
      margin-right: 0px;
    }
    border-bottom: none;
    border-top: 1px solid #f2f2f2;
  }
  > .Total {
    font-size: 20px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
`;
const GraphContainer = styled.div`
  /* flex: 1 1 auto; */
  margin-top: 10px;
  width: 143px;
  height: 150px;
  text-align: center;
  &.border {
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
  }
`;
const Graph = styled.div`
  position: relative;
  width: 83px;
  height: 83px;
  border-radius: 100%;
  margin: 0 auto;
  transition: all 2s ease-in;
  background: ${(props) =>
    props.graphData
      ? `conic-gradient(${props.graphData.bgColor} ${props.graphData.percent}%,silver 0%)`
      : "white"};
  span {
    position: absolute;
    text-align: center;
    line-height: 63px;
    left: 10px;
    top: 10px;
    width: 63px;
    height: 63px;
    border-radius: 100%;
    background-color: white;
  }
`;
const TotalScore = () => {
  const graph1 = useRef(null);
  const graph2 = useRef(null);
  const graph3 = useRef(null);
  const userInfo = useSelector((state) => state.data);

  const [totalMatch, setTotalMatch] = useState(0);
  const [totalWin, setTotalWin] = useState(0);
  const [totalRetire, setTotalRetire] = useState(0);

  useEffect(() => {
    if (Object.keys(userInfo).length >= 1) {
      setTotalMatch(userInfo.matches[0].matches.length);
      setTotalWin(
        userInfo.matches[0].matches.filter((obj) => obj.player.matchWin === "1")
          .length
      );
      setTotalRetire(
        userInfo.matches[0].matches.filter(
          (obj) => obj.player.matchRetired === "1"
        ).length
      );
    }
  }, [userInfo]);

  const graphData = [
    {
      chartNo: graph1,
      percent: Math.floor((totalWin / totalMatch) * 100),
      bgColor: "#07f",
    },
    {
      chartNo: graph2,
      percent: 100 - Math.floor((totalRetire / totalMatch) * 100),
      bgColor: "#9bd728",
    },
    {
      chartNo: graph3,
      percent: Math.floor((totalRetire / totalMatch) * 100),
      bgColor: "#f62459",
    },
  ];
  // const colorFn = (i, classname, color) => {
  //   classname.current.style.background = `conic-gradient(${color} ${i}%,white 0%)`;
  //   classname.current.style.color = `${color}`;
  // };

  // let i = 1;
  // const drawChart = (percent, classname, color) => {
  //   let func1 = setInterval(() => {
  //     if (i < percent) {
  //       if (classname.current) {
  //         colorFn(i, classname, color);
  //         i++;
  //       } else {
  //         return;
  //       }
  //     } else {
  //       clearInterval(func1);
  //     }
  //   }, 10);
  // };
  // graphData.map((obj) => drawChart(obj.percent, obj.chartNo, obj.bgColor));
  return (
    <TotalScoreConatiner>
      <ConatinerTitle>
        <div>
          <span>종합</span> 전적
        </div>
        <div>
          {totalMatch}전 {totalWin}승 {totalMatch - totalWin}패
        </div>
      </ConatinerTitle>
      <ContentContainer>
        <GraphContainer>
          <p>승률</p>
          <Graph ref={graph1} graphData={graphData[0]}>
            <span>{graphData[0].percent}%</span>
          </Graph>
        </GraphContainer>
        <GraphContainer className="border">
          <p>완주율</p>
          <Graph ref={graph2} graphData={graphData[1]}>
            <span>{graphData[1].percent}%</span>
          </Graph>
        </GraphContainer>
        <GraphContainer>
          <p>리타이어율</p>
          <Graph ref={graph3} graphData={graphData[2]}>
            <span>{graphData[2].percent}%</span>
          </Graph>
        </GraphContainer>
      </ContentContainer>
      <ConatinerTitle className="borderTop">
        <div>
          <span>최다주행</span> 모드
        </div>
        <div className="Total">통합</div>
      </ConatinerTitle>
    </TotalScoreConatiner>
  );
};

export default TotalScore;
