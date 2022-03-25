import React from "react";
import styled from "styled-components";
import { ConatinerTitle } from "./TotalScore";

const CheeringMessageContainer = styled.div`
  position: relative;
  border: 1px solid #f2f2f2;
  width: 430px;
  height: 266px;
  margin: 10px 0 0 0;
  background-color: #fff;
`;
const MessageContainer = styled.div`
  margin-left: 15px;
  margin-top: 20px;
`;
const Nickname = styled.span`
  color: #07f;
`;
const Message = styled.span`
  margin-left: 10px;
  width: 100px;
  height: 50px;
  border: 1px solid silver;
  border-radius: 5px;
`;
const InputContainer = styled.div`
  position: absolute;
  bottom: 5px;
  padding: 10px;
  width: 400px;
  border-top: 1px solid #f2f2f2;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
`;
const InputName = styled.input`
  width: 80px;
  padding: 5px;
  margin-right: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
`;
const InputContent = styled.input`
  width: 230px;
  padding: 5px;
  margin-right: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
`;
const InputButton = styled.span`
  width: 50px;
  padding: 5px;
  border-radius: 5px;
  background-color: #ccc;
  color: white;
`;

const CheeringMessage = () => {
  return (
    <CheeringMessageContainer>
      <ConatinerTitle>
        <div>
          <span>응원</span> 한마디
        </div>
        <div>오늘 0개 전체</div>
      </ConatinerTitle>
      <MessageContainer>
        <Nickname>kart</Nickname>
        <Message>화이팅</Message>
      </MessageContainer>
      <InputContainer>
        <InputName placeholder="닉네임" />
        <InputContent placeholder="최대 30자" />
        <InputButton>남기기</InputButton>
      </InputContainer>
    </CheeringMessageContainer>
  );
};

export default CheeringMessage;
