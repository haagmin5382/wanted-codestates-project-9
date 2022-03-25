import React, { useState } from "react";
import styled from "styled-components";

const GameModeContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid silver;
`;

const GameModeMenu = styled.span`
  width: 81px;
  height: 35px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.2s ease;

  &.checked {
    color: #07f;
    border-bottom: 2px solid #07f;
  }
  :hover {
    color: #07f;
    border-bottom: 2px solid #07f;
  }
`;

const RetireSpan = styled.span`
  position: absolute;
  vertical-align: middle;
  top: 0;
  right: 50px;
  margin-top: 2px;

  font-size: 14px;
`;

const ShowRetireToggle = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  width: 34px;
  height: 18px;
  border-radius: 2em;
  padding: 2px;
  cursor: pointer;

  > .toggle-container {
    position: absolute;
    top: 0;
    right: 0px;
    background-color: #f0f0f0;
    border: 1px solid #f0f0f0;
    width: 34px;
    height: 18px;
    border-radius: 2em;
    padding: 2px;
    cursor: pointer;
    &.toggle-checked {
      background: navy;
    }
  }
  > .toggle-circle {
    position: absolute;
    top: 4px;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    transition: 0.5s;
    &.toggle-checked {
      left: 40px;
    }
  }
`;

const GameMode = () => {
  const menu = ["통합", "매우빠름", "무한부스터"];
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <GameModeContainer>
      {menu.map((el, index) => {
        return (
          <GameModeMenu
            key={index}
            onClick={() => setCurrentTab(index)}
            className={currentTab === index ? "checked" : null}
          >
            {el}
          </GameModeMenu>
        );
      })}
      <RetireSpan>리타이어 노출</RetireSpan>
      <ShowRetireToggle>
        <div className={`toggle-container `}></div>
        <div className={`toggle-circle`}></div>
      </ShowRetireToggle>
    </GameModeContainer>
  );
};

export default GameMode;
