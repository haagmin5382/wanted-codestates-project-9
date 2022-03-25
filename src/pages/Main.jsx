import React, { useState } from "react";
import { getDataFromAPI } from "../utils/axios";
import UserInfo from "../components/MainComponent/UserInfo";
import styled from "styled-components";
import Matching from "../components/MainComponent/Matching";
import MainFlex from "../components/MainComponent/MainFlex";
import GameMode from "../components/MainComponent/GameMode";
import NoInput from "../components/NoInput";
import UserRecord from "../components/MainComponent/RecordComponent/UserRecord";
import { useSelector } from "react-redux";
const MainConatiner = styled.div`
  align-items: center;
  margin: 20px auto;
  width: 1300px;
`;
const Main = () => {
  const userData = useSelector((state) => state.data);
  console.log(userData);

  return (
    <div>
      {Object.keys(userData).length >= 1 ? (
        <MainConatiner>
          <UserInfo />
          <Matching />
          <MainFlex />
          <GameMode />
          <UserRecord />
        </MainConatiner>
      ) : (
        <NoInput />
      )}
    </div>
  );
};

export default Main;
