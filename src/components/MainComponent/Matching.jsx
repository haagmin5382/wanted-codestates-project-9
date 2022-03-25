import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

const MatchingContainer = styled.div`
  // 위치
  position: relative;
  line-height: 45px;
  margin-top: 20px;
  padding-left: 20px;

  // 애니메이션
  background: linear-gradient(-45deg, #ee7752, #f62459, #07f, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: changeColor 20s ease infinite;
  animation: changeColor 20s ease infinite;

  @keyframes changeColor {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  // 폰트
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

const MatchingButton = styled.span`
  position: absolute;
  vertical-align: middle;
  display: inline-block;
  top: 0;
  right: 0;
  margin-top: 8.5px;
  margin-right: 20px;
  width: 82px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border: 0.7px solid #fff;
  border-radius: 15px;

  .icon {
    margin-right: 10px;
  }
`;
const Matching = () => {
  return (
    <MatchingContainer>
      1대1 매칭 시뮬레이터- ''와 가상대결을 펼쳐보세요
      <MatchingButton>
        <FontAwesomeIcon icon={faCalculator} className="icon" />
        매칭하기
      </MatchingButton>
    </MatchingContainer>
  );
};

export default Matching;
