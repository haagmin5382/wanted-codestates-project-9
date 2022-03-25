import React, { useState } from "react";
import { getDataFromAPI } from "../utils/axios";
import UserInfo from "../components/MainComponent/UserInfo";
import styled from "styled-components";
import Matching from "../components/MainComponent/Matching";
import MainFlex from "../components/MainComponent/MainFlex";
import GameMode from "../components/MainComponent/GameMode";
import UserRecord from "../components/MainComponent/RecordComponent/UserRecord";

const MainConatiner = styled.div`
  align-items: center;
  margin: 20px auto;
  width: 1300px;
`;
const Main = () => {
  // const [data, setData] = useState("");

  // getDataFromAPI("test").then((data) => console.log(data.data));
  return (
    <MainConatiner>
      <UserInfo />
      <Matching />
      <MainFlex />
      <GameMode />
      <UserRecord />
    </MainConatiner>
  );
};

export default Main;
