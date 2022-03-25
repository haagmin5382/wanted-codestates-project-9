import React from "react";
import styled from "styled-components";
import TotalScore from "./FlexBoxContent/TotalScore";
import ChangedRanking from "./FlexBoxContent/ChangedRanking";
import CheeringMessage from "./FlexBoxContent/CheeringMessage";
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #fff;
`;
const MainFlex = () => {
  return (
    <FlexContainer>
      <TotalScore />
      <ChangedRanking />
      <CheeringMessage />
    </FlexContainer>
  );
};

export default MainFlex;
